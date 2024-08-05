hostname=hc-ssp.sm.cn, api.gotokeep.com, 162.14.5.*,42.187.199.*,101.42.124.*, kad.gotokeep.com
# >keep 课程预览 直播课。会员付费课跟练 会员训练计划
^https?:\/\/(api|kit).gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/keep.js
# > 屏蔽应用内弹窗
^https?:\/\/api\.gotokeep\.com\/guide-webapp\/v\d\/popup\/getPopUp url reject-200
^https?:\/\/api\.gotokeep\.com\/running\/v\d\/home\/dialog url reject-200
# > 屏蔽部分启动弹窗
^https?:\/\/api\.gotokeep\.com\/kprime\/v\d\/popups\/primeGuide url reject-200
# > 屏蔽开屏广告请求
^https?:\/\/hc-ssp\.sm\.cn url reject-200
^https?:\/\/kad\.gotokeep\.com\/op-engine-webapp\/v\d\/ad url reject-200
# > 屏蔽青少年弹窗
^https?:\/\/api.gotokeep.com/cauchy/growth/init url reject-200
# > 屏蔽搜索栏自动填充词
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/default\/keyword\/list url reject-200
# > 屏蔽热词
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotword\/list url reject-200
# > 屏蔽hotCourse
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotCourse\/list url reject-200
# > 屏蔽adwebapp
^https?:\/\/api\.gotokeep\.com\/op-engine-webapp\/v\d\/ad url reject-200
# > 屏蔽广告预加载
^https?:\/\/api\.gotokeep\.com\/ads\/v\d\/ads\/preload url reject-200
# > 屏蔽adbox
^https?:\/\/api\.gotokeep\.com\/training\/box\/config url reject-200
# > 屏蔽更新
^https?:\/\/api\.gotokeep\.com\/anno\/v\d\/upgrade\/check url reject-200
# > 我的页面去推广
#^https?:\/\/api\.gotokeep\.com\/athena\/v\d\/people\/my$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/keepStyle.js
# > 应用底部栏净化
^https?:\/\/api\.gotokeep\.com\/config\/v\d\/basic url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/keepStyle.js
# > 首页信息流去广告
^https?:\/\/api\.gotokeep\.com\/twins\/v4\/feed\/course url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/keepStyle.js