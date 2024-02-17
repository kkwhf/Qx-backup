/*
 
 [rewrite_local]
^https?:\/\/otter-api\.codefuture\.top\/v1\/user\/current url script-response-body test.js

[MITM]
hostname = otter-api.codefuture.top

*/
var kk = JSON.parse($response.body);
kk.data.isvip = true;
kk.data.vipDeadline ="9999-09-06T06:06:06Z";
$done({ body: JSON.stringify(kk) });
