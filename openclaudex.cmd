@echo off
title Open Claude X - DeepSeek 4.1 Flash
cd /d "%~dp0"
cls

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    pause
    exit /b 1
)

if not exist "dist\cli\index.js" (
    echo [INFO] Building Open Claude X for first run...
    call npm run build
    echo.
)

node --no-warnings dist\cli\index.js %*

