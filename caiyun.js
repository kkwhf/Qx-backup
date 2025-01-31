***************************
Surge4 or Loon:
[Script]
http-response ^https:\/\/untech\.cc\/api\/users\/register-device requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/kkwhf/Qx-backup/refs/heads/main/caiyun.js

[MITM]
hostname = untech.cc

**************************/

const statusCode = typeof $task !== "undefined" ? "HTTP/1.1 200 OK" : 200;
const response = { status: statusCode, headers: $response.headers };

if ($response.body && $request.url.includes("api/users/register-device")) {
  response.body = JSON.stringify({
     "success" : true,
  "message" : "已注册\/更新",
  "user" : {
    "location" : {
      "longitude" : 114.31661442220835,
      "latitude" : 35.762915361491572
    },
    "_id" : "679c6f84175890f3440e2794",
    "address" : "淇滨区",
    "__v" : 0,
    "preferredTime" : "07:30",
    "lastUpdateTime" : "2025-01-31T06:59:55.504Z",
    "membershipExpires" : "2065-02-03T06:58:23.000Z",
    "pushEnabled" : true,
    "pushTypes" : [
      "dailySummary",
      "rainNotification"
    ],
    "timeZone" : "Asia\/Shanghai",
    "deviceToken" : "e34e8649d385d32f0dcdd4787f44c16be3c40ec08ac222bed3331517425a15c1"
  }
  });
}

if ($response.body && $request.url.includes("api/users/register-device")) {
  response.body = JSON.stringify({
         "success" : true,
  "message" : "已注册\/更新",
  "user" : {
    "location" : {
      "longitude" : 114.31661442220835,
      "latitude" : 35.762915361491572
    },
    "_id" : "679c6f84175890f3440e2794",
    "address" : "淇滨区",
    "__v" : 0,
    "preferredTime" : "07:30",
    "lastUpdateTime" : "2025-01-31T06:59:55.504Z",
    "membershipExpires" : "2065-02-03T06:58:23.000Z",
    "pushEnabled" : true,
    "pushTypes" : [
      "dailySummary",
      "rainNotification"
    ],
    "timeZone" : "Asia\/Shanghai",
    "deviceToken" : "e34e8649d385d32f0dcdd4787f44c16be3c40ec08ac222bed3331517425a15c1"
  }
  });
}

$done(response)