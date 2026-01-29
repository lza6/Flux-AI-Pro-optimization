@echo off
echo ===========================================
echo   Flux AI Pro 依赖安装 (Windows)
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

echo.
echo 安装依赖...
npm install
if errorlevel 1 (
    echo 错误：安装依赖失败
    pause
    exit /b 1
)

echo.
echo 检查并安装 Wrangler...
wrangler --version >nul 2>&1
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
echo ===========================================
echo 依赖安装完成！
echo ===========================================
echo.

set /p choice="是否启动本地开发服务器？(y/N): "
if /i "%choice%"=="y" (
    start cmd /k "wrangler dev --local"
    timeout /t 3 /nobreak >nul
    start http://127.0.0.1:8787
)

echo.
echo 按任意键退出...
pause >nul
