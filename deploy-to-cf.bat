@echo off
echo ===========================================
echo   Flux AI Pro V14.0.0 部署 (AI增强版) (Windows)
echo ===========================================
echo.

echo 检查 Node.js...
node --version
if errorlevel 1 (
    echo 错误：Node.js 未安装
    pause
    exit /b 1
)

echo 检查 npm...
npm --version
if errorlevel 1 (
    echo 错误：npm 未安装
    pause
    exit /b 1
)

echo 检查 Wrangler...
wrangler --version
if errorlevel 1 (
    echo 安装 Wrangler...
    npm install -g wrangler
    if errorlevel 1 (
        echo 错误：安装 Wrangler 失败
        pause
        exit /b 1
    )
)

echo.
echo 登录 Cloudflare...
wrangler whoami
if errorlevel 1 (
    echo 正在登录...
    wrangler login
    if errorlevel 1 (
        echo 错误：登录失败
        pause
        exit /b 1
    )
)

echo.
echo 检查 wrangler.toml...
if not exist "wrangler.toml" (
    echo 错误：未找到 wrangler.toml 文件
    pause
    exit /b 1
)

echo.
set /p confirm="确认部署？(y/N): "
if /i not "%confirm%"=="y" (
    echo 操作已取消
    pause
    exit /b 0
)

echo.
echo 正在部署到 Cloudflare...
wrangler deploy
if errorlevel 1 (
    echo 部署失败
    pause
    exit /b 1
)

echo.
echo ===========================================
echo 部署成功！
echo ===========================================
echo.

set /p test_choice="是否启动本地开发服务器进行测试？(y/N): "
if /i "%test_choice%"=="y" (
    start cmd /k "wrangler dev --local"
    timeout /t 3 /nobreak >nul
    start http://127.0.0.1:8787
)

echo.
echo 按任意键退出...
pause >nul
