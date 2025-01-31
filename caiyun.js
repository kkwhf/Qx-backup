
***************************
QuantumultX:

[rewrite_local]
^https:\/\/api\.polaxiong\.com\/v1\/payments\/(appleiap\/receipts\/confirmation|profiles\/@me\/subscription) url script-response-body https://raw.githubusercontent.com/kwypn/Reviewa/main/Pola.js

[mitm]
hostname = api.polaxiong.com

***************************
Surge4 or Loon:
[Script]
http-response ^https:\/\/untech\.cc\/api\/users\/register-device requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/kwypn/Reviewa/main/Pola.js

[MITM]
hostname = untech.cc

**************************/

const statusCode = typeof $task !== "undefined" ? "HTTP/1.1 200 OK" : 200;
const response = { status: statusCode, headers: $response.headers };

if ($response.body && $request.url.includes("v1/payments/profiles/@me/subscription")) {
  response.body = JSON.stringify({
     "success": true,
  "message": "已注册/更新",
  "user": {
    "address": "淇滨区",
    "_id": "67979bd1175890f3440bb67e",
    "location": {
      "longitude": 114.31679801574958,
      "latitude": 35.763270141522156
    },
    "__v": 1,
    "preferredTime": "07:30",
    "lastUpdateTime": "2025-01-28T10:55:24.952Z",
    "membershipExpires": true,
    "pushEnabled": true,
    "pushTypes": [],
    "timeZone": "Asia/Shanghai",
    "deviceToken": "203a9bfa584233e4cbf6c6c1b505e3611f16f1e6def6ea7221af173e50488b82"
  });
}

if ($response.body && $request.url.includes("v1/payments/appleiap/receipts/confirmation")) {
  response.body = JSON.stringify({
       "__v": 1,
    "preferredTime": "07:30",
    "lastUpdateTime": "2025-01-28T10:55:24.952Z",
    "membershipExpires": true,
    "pushEnabled": true,
  });
}

$done(response)