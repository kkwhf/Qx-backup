
[Script]
iios_token_capture = type=http-request, pattern=^https:\/\/www\.iios\.fun\/api\/user\/info, script-path=https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/iios_checkin.js, requires-body=false, timeout=10, script-update-interval=0
iios_checkin = type=cron, cronexp="5 0 * * *​", script-path=https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/iios_checkin.js, timeout=60, wake-system=1, script-update-interval=0


hostname: www.iios.fun