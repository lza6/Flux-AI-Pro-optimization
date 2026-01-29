-- =================================================================================
--  项目: Flux AI Pro - Admin Database Schema
--  数据库: Cloudflare D1
--  版本: 1.0.0
-- =================================================================================

-- 管理员账号表
CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'admin',  -- admin, super_admin
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME,
    is_active BOOLEAN DEFAULT 1,
    login_attempts INTEGER DEFAULT 0
);

-- 操作日志表
CREATE TABLE IF NOT EXISTS operation_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_id INTEGER,
    username TEXT,
    action TEXT NOT NULL,           -- login, logout, update_config, ban_user, etc.
    resource_type TEXT,             -- config, user, setting
    resource_id TEXT,
    details TEXT,
    ip_address TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);

-- 请求指标表（每天聚合）
CREATE TABLE IF NOT EXISTS request_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL UNIQUE,      -- YYYY-MM-DD
    total_requests INTEGER DEFAULT 0,
    successful_requests INTEGER DEFAULT 0,
    failed_requests INTEGER DEFAULT 0,
    unique_ips INTEGER DEFAULT 0,
    total_images_generated INTEGER DEFAULT 0,
    model_usage TEXT,               -- JSON: {"nanobanana-pro": 123, "flux": 456}
    provider_usage TEXT,            -- JSON: {"pollinations": 500, "infip": 100}
    avg_response_time REAL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 用户请求日志（详细记录）
CREATE TABLE IF NOT EXISTS user_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip_address TEXT NOT NULL,
    user_agent TEXT,
    provider TEXT NOT NULL,
    model TEXT NOT NULL,
    prompt TEXT,
    width INTEGER,
    height INTEGER,
    style TEXT,
    seed INTEGER,
    status TEXT,                    -- success, failed, rate_limited
    error_message TEXT,
    response_time_ms INTEGER,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- IP 黑白名单表
CREATE TABLE IF NOT EXISTS ip_lists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip_address TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL,             -- whitelist, blacklist
    reason TEXT,
    notes TEXT,
    created_by INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,            -- NULL 表示永遠
    is_active BOOLEAN DEFAULT 1,
    FOREIGN KEY (created_by) REFERENCES admin_users(id)
);

-- 系统配置表
CREATE TABLE IF NOT EXISTS system_config (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    config_key TEXT UNIQUE NOT NULL,
    config_value TEXT,
    value_type TEXT DEFAULT 'string', -- string, number, boolean, json
    description TEXT,
    updated_by INTEGER,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (updated_by) REFERENCES admin_users(id)
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_operation_logs_admin ON operation_logs(admin_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_operation_logs_created ON operation_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_requests_ip ON user_requests(ip_address, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_requests_date ON user_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_request_metrics_date ON request_metrics(date DESC);

-- 新增：优化查询性能的复合索引
CREATE INDEX IF NOT EXISTS idx_user_requests_status_date ON user_requests(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_requests_provider_model ON user_requests(provider, model, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_requests_model_status ON user_requests(model, status);

-- 新增：IP黑白名单表索引
CREATE INDEX IF NOT EXISTS idx_ip_lists_type_active ON ip_lists(type, is_active);
CREATE INDEX IF NOT EXISTS idx_ip_lists_expires ON ip_lists(expires_at);

-- 新增：系统配置表索引
CREATE INDEX IF NOT EXISTS idx_system_config_key ON system_config(config_key);

-- 新增：管理员用户表索引
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_active_login ON admin_users(is_active, last_login DESC);

-- 插入默认管理员账号（用户名: admin, 密码: admin123）
-- 密码已使用 bcrypt 哈希，请在部署后立即修改
INSERT OR IGNORE INTO admin_users (username, password_hash, email, role)
VALUES ('admin', '$2b$10$YourHashedPasswordHere', 'admin@fluxai.pro', 'super_admin');

-- 插入默认系统配置
INSERT OR IGNORE INTO system_config (config_key, config_value, value_type, description) VALUES
('rate_limit_per_hour', '5', 'number', '每 IP 每小时请求数'),
('rate_limit_enabled', 'true', 'boolean', '是否启用限流'),
('nano_cooldown_seconds', '180', 'number', 'Nano 版冷却时间（秒）'),
('max_image_width', '2048', 'number', '最大图片宽度'),
('max_image_height', '2048', 'number', '最大图片高度'),
('allowed_providers', '["pollinations", "infip"]', 'json', '允许的 API 提供商'),
('default_provider', 'pollinations', 'string', '默认 API 提供商'),
('enable_nsfw_filter', 'true', 'boolean', '是否启用 NSFW 过滤');

-- 创建视图：今日统计
CREATE VIEW IF NOT EXISTS today_stats AS
SELECT 
    COUNT(*) as total_requests,
    COUNT(CASE WHEN status = 'success' THEN 1 END) as successful_requests,
    COUNT(CASE WHEN status = 'failed' THEN 1 END) as failed_requests,
    COUNT(DISTINCT ip_address) as unique_ips,
    AVG(response_time_ms) as avg_response_time,
    COUNT(CASE WHEN image_url IS NOT NULL THEN 1 END) as images_generated
FROM user_requests
WHERE DATE(created_at) = DATE('now');

-- 创建视图：热门模型
CREATE VIEW IF NOT EXISTS popular_models AS
SELECT 
    model,
    COUNT(*) as usage_count,
    ROUND(AVG(response_time_ms), 2) as avg_response_time
FROM user_requests
WHERE status = 'success'
GROUP BY model
ORDER BY usage_count DESC
LIMIT 10;

-- 新增：高级性能指标表
CREATE TABLE IF NOT EXISTS performance_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    metric_type TEXT NOT NULL,          -- request_time, cache_hit, queue_length, etc.
    metric_name TEXT NOT NULL,          -- avg_response_time, p95_response_time, cache_hit_rate, etc.
    metric_value REAL NOT NULL,
    tags TEXT,                          -- JSON string for additional dimensions
    provider TEXT,
    model TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 新增：缓存统计表
CREATE TABLE IF NOT EXISTS cache_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cache_layer TEXT NOT NULL,          -- memory, kv, r2
    hits INTEGER DEFAULT 0,
    misses INTEGER DEFAULT 0,
    evictions INTEGER DEFAULT 0,
    size_current INTEGER DEFAULT 0,
    size_max INTEGER DEFAULT 0,
    hit_rate REAL DEFAULT 0,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 新增：实时队列监控表
CREATE TABLE IF NOT EXISTS queue_monitor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    queue_name TEXT NOT NULL,
    running_count INTEGER DEFAULT 0,
    queued_count INTEGER DEFAULT 0,
    max_concurrent INTEGER DEFAULT 0,
    peak_concurrent INTEGER DEFAULT 0,
    total_processed INTEGER DEFAULT 0,
    total_rejected INTEGER DEFAULT 0,
    avg_process_time REAL DEFAULT 0,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 新增：安全事件日志表
CREATE TABLE IF NOT EXISTS security_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip_address TEXT NOT NULL,
    event_type TEXT NOT NULL,           -- blocked_ip, suspicious_activity, content_moderation, etc.
    severity TEXT NOT NULL,             -- low, medium, high, critical
    reason TEXT,
    details TEXT,                       -- JSON string for additional context
    resolved BOOLEAN DEFAULT 0,
    resolved_by INTEGER,                -- admin user ID
    resolved_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (resolved_by) REFERENCES admin_users(id)
);

-- 新增：AI增强功能使用统计表
CREATE TABLE IF NOT EXISTS ai_enhancement_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    enhancement_type TEXT NOT NULL,     -- smart_prompt_analysis, auto_quality_selection, style_transfer, etc.
    model_used TEXT,
    input_complexity REAL,
    output_quality_score REAL,
    usage_count INTEGER DEFAULT 0,
    success_rate REAL DEFAULT 0,
    avg_processing_time REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 新增：优化的复合索引
CREATE INDEX IF NOT EXISTS idx_performance_metrics_type_time ON performance_metrics(metric_type, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_security_events_ip_time ON security_events(ip_address, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_security_events_type_severity ON security_events(event_type, severity, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_enhancement_type_model ON ai_enhancement_stats(enhancement_type, model_used);

-- 新增：性能优化视图 - 实时请求统计
CREATE VIEW IF NOT EXISTS realtime_request_stats AS
SELECT 
    provider,
    model,
    COUNT(*) as total_requests,
    COUNT(CASE WHEN status = 'success' THEN 1 END) as successful,
    COUNT(CASE WHEN status = 'failed' THEN 1 END) as failed,
    COUNT(CASE WHEN status = 'rate_limited' THEN 1 END) as rate_limited,
    AVG(response_time_ms) as avg_response_time,
    MIN(response_time_ms) as min_response_time,
    MAX(response_time_ms) as max_response_time,
    COUNT(DISTINCT ip_address) as unique_users
FROM user_requests
WHERE created_at >= datetime('now', '-1 hour')
GROUP BY provider, model;

-- 新增：性能优化视图 - 小时级聚合统计
CREATE VIEW IF NOT EXISTS hourly_aggregated_stats AS
SELECT 
    strftime('%Y-%m-%d %H:00:00', created_at) as hour_bucket,
    provider,
    model,
    COUNT(*) as total_requests,
    SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END) as successful_requests,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) as failed_requests,
    SUM(CASE WHEN status = 'rate_limited' THEN 1 ELSE 0 END) as rate_limited_requests,
    AVG(response_time_ms) as avg_response_time,
    COUNT(DISTINCT ip_address) as unique_ips
FROM user_requests
GROUP BY hour_bucket, provider, model
ORDER BY hour_bucket DESC;