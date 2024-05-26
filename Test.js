/*
 [rewrite_local]
^https?:\/\/otter-api\.codefuture\.top\/v1\/user\/current url script-response-body https://raw.githubusercontent.com/kkwhf/Qx-backup/main/Test.js
[MITM]
hostname = otter-api.codefuture.top
*/
if ($request.url.includes('v1/user/current')) {
    let body = JSON.parse($response.body);
    Object.assign(body.data, { isVip: "true", vipType: "yearly", vipDeadline: "9999-09-06T06:06:06Z" });
    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}