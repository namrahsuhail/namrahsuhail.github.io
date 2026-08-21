@echo off
cd /d "%~dp0"
start "Meech213 Local Server" /min cmd /c "set PORT=4173&& node server.mjs"
ping 127.0.0.1 -n 2 >nul
start "" "http://127.0.0.1:4173"
