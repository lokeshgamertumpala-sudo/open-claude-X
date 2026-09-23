#!/usr/bin/env pwsh
$Host.UI.RawUI.WindowTitle = "Open Claude X - DeepSeek 4.1 Flash"
Set-Location $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js is not installed or not in PATH."
    exit 1
}

if (-not (Test-Path "dist\cli\index.js")) {
    Write-Host "Building Open Claude X..." -ForegroundColor Cyan
    npm run build
}

node dist\cli\index.js $args
