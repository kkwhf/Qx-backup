/*

滴答

[rewrite_local]
https://dida365.com/api/v2/user/status url script-response-body https://raw.githubusercontent.com/kkwhf/Qx-backup/main/dida.js

[mitm] 
hostname = dida365.com
*/
    let obj = JSON.parse($response.body);
    // 不能删
    obj.username = "我是kk";  
    obj.proEndDate = "5201-01-01T00:00:00.000+0000";  
    obj.pro = true;
  obj.teamPro = true;
    $done({
        body: JSON.stringify(obj)
    });