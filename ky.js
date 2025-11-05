[rewrite_local]

# > 快影 解锁Vip、付费、Ai玩法
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/resource\/activity\/pendant\? reject-dict
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/merchant\/ad\/ reject-dict
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/banner\/common\/getBannerByType\? reject-dict
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/banner\/common\/getAllBannerPage\? response-body-json-jq 'del(.data[] | select(.bannerChannelName == "活动"))'
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/banner\/common\/getBannerByTypeV2\? response-body-json-jq 'del(.list[] | select(.bannerChannelName == "活动"))'
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/resource\/get\? reject-dict
^https://mi\.gdt\.qq\.com/gdt_mview\.fcg reject
^https://api\.kmovie\.gifshow\.com/rest/n/kmovie/app/merchant/ad/bidding reject
^https?:\/\/(id\.kwaiying|api\.kmovie\.gifshow)\.com.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/kuaiy.js
^https://api\.kmovie\.gifshow\.com/rest/n/kmovie/app/merchant/ad/bidding url reject
^https://mi\.gdt\.qq\.com/gdt_mview\.fcg url reject
[mitm]
hostname = api.kmovie.gifshow.com,id.kwaiying.com,mi.gdt.qq.com