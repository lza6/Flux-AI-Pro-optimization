@echo off
chcp 65001 >nul
echo ===========================================
echo   Flux AI Pro 本地开发服务器 (Windows)
echo ===========================================
echo.

echo 正在启动开发服务器...
echo.

REM 启动开发服务器
start "Flux AI Pro 本地开发服务器" cmd /k "wrangler dev --local"

echo 等待服务器启动...
timeout /t 5 /nobreak >nul

echo 打开浏览器到 http://127.0.0.1:8787
start http://127.0.0.1:8787

echo.
echo 服务器已在新窗口启动，浏览器已打开
echo.
echo 按任意键关闭此窗口...
pause >nul