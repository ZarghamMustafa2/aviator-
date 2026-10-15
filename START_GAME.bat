@echo off
title Aviator Game Server (BetPro Recreation)
echo ========================================================
echo   AVIATOR GAME - AUTHORITATIVE REAL-TIME SERVER
echo ========================================================
echo.
echo Launching Aviator in your default browser...
start "" "http://localhost:5000"
echo.
echo Server running at http://localhost:5000
echo Press Ctrl+C in this window to stop the server.
echo.
node server/index.js
pause
