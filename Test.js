#更新5.5
# 练就去除更新
^https:\/\/api\.lianjiu\.fun\/app\/api\/v1\/version\/check url reject-200
# 拼多多 
^https:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash url reject
# - 京喜
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising url response-body jdLiteAdvertisingVO response-body ""
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_SmartPush url response-body pushData response-body ""
^https:\/\/img14\.360buyimg\.com\/mcoss\/jfs\/t1\/183719\/8\/13358\/190450\/60e82bedE10b64e23\/ url reject-200
# > 建行生活
# hostname = yunbusiness.ccb.com, g.alicdn.com
# 首页横幅广告
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A00(2|6|9) url reject-200
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB04 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/ccbLife/ccbLifeAds.js
# 删除首页+金融+我的多个横幅等乱七八糟的广告
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB05 url echo-response application/json echo-response https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/ccbLife/A3341AB05.json
# 我的页面悬浮广告
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\? url response-body "TAG_AD_INFO" response-body "TAG_AD_INFO0"
# 内置饿了么外卖弹窗
^https?:\/\/g\.alicdn\.com\/.*o2o-ad url script-response-body https://raw.githubusercontent.com/zirawell/app_remove_ads/main/All/js/alicdn.js
# 顺丰速运+ 
^https:\/\/mcs-mimp-web\.sf-express\.com\/mcs-mimp\/integralPlanet\/getCxAdvertiseList url reject-dict
^https:\/\/ucmp-static\.sf-express\.com\/proxy\/wxbase\/wxTicket\/wxLiveStreamInfo\?pageNo url reject-dict
^https:\/\/ucmp\.sf-express\.com\/proxy\/esgcempcore\/memberGoods\/pointMallService\/goodsList url reject-dict
^https:\/\/ucmp\.sf-express\.com\/proxy\/operation-platform\/info-flow-adver\/query url reject-dict
^https:\/\/ucmp\.sf-express\.com\/proxy\/esgcempcore\/memberManage\/memberEquity\/queryRecommendEquity url reject-dict
^https:\/\/ucmp\.sf-express\.com\/proxy\/esgcempcore\/memberActLengthy\/fullGiveActivityService\/fullGiveInfo url reject-dict
# - 中国广电 
^https?:\/\/app\.10099\.com\.cn\/contact-web\/api\/version\/getFlashScreenPage url reject-200
# - 中国银行 
^https:\/\/mbs\.boc\.cn\/ubas-mgateway-static\/images\/advertType\/.+.jpg url reject-200
^https?:\/\/mlife\.jf365\.boc\.cn\/AppPrj\/FirstPic\.do\?txnId=2PIC000001 url reject-200
# > 中国天气网小程序 #横幅广告 #主机名e.weather.com.cn
^https:\/\/e\.weather\.com\.cn\/weChat\/typhoonNull\.json url reject-dict
#航旅纵横 
^http?:\/\/(discardrp|startup)\.umetrip\.com\/gateway\/api\/umetrip\/native url reject
^http?:\/\/(114\.115\.217\.129)|(home\.umetrip\.com)\/gateway\/api\/umetrip\/native$ url script-response-body https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Resource/Script/Umetrip/Umetrip_remove_ads.js
# > 中通快递 微信小程序净化
^https:\/\/hdgateway\.zto\.com\/getApolloConfig url reject-dict
^https:\/\/hdgateway\.zto\.com\/track url reject-dict
^https:\/\/hdgateway\.zto\.com\/getAdInfo url reject-dict
^https:\/\/hdgateway\.zto\.com\/listJumperShow url reject-dict
# > 中国联通
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/getWelcomeAd url reject-200
^https?:\/\/m\.client\.10010\.com\/mobileService\/(activity|customer)\/(accountListData|get_client_adv|get_startadv) url reject-img
^https?:\/\/m\.client\.10010\.com\/mobileService\/customer\/getclientconfig\.htm url reject-dict
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/(getHomePageAd|getWelcomeAd) url reject-img
^https?:\/\/[^(apple|10010)]+\.(com|cn)\/(a|A)d(s|v)?(\/|\.js) url reject-img
^https?:\/\/m1\.ad\.10010\.com\/noticeMag\/images\/imageUpload\/2\d{3} url reject-img
^https?:\/\/res\.mall\.10010\.cn\/mall\/common\/js\/fa\.js?referer= url reject-img
# > 一淘
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject
# > 唯品会
https://b.appsimg.com/upload/momin/ url reject
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get url reject-200
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/iosAdInfo\/report url reject
# APP+小程序弹窗广告
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/layout\/productList\/eventData\/v url reject-200
# 右下角悬浮窗，需手动关闭广告一次
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/coupon\/float_entrance\/get\?api_key url reject-200
# > 淘宝
# hostname = acs.m.taobao.com, guide-acs.m.taobao.com, poplayer.template.alibaba.com
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimusic\.common\.mobileservice\.startinit url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources url reject-dict
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(volvo\.secondfloor\.getconfig|wireless\.home\.newface\.awesome\.get) url reject-dict
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(cloudvideo\.video\.query|wireless\.home\.splash\.awesome\.get) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/poplayer\.template\.alibaba\.com\/\w+\.json url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
# > 瑞幸咖啡 倒计时可能还在 感谢@豆豆分享
^https:\/\/capi\.lkcoffee\.com\/resource\/m\/sys\/app\/adposNew url reject
^https:\/\/(ec|c)api\.lkcoffee\.com\/resource\/m\/eorder\/product\/popAppTagProductList url reject
^https:\/\/m\.lkcoffee\.com\/ecapi\/resource\/m\/member\/exchange\/page url response-body \{.+\} response-body {"status":"SUCCESS"}
^https:\/\/m\.lkcoffee\.com\/capi\/resource\/m\/growUp\/main url response-body "popTitle":".+?" response-body "popTitle":""
^https?:\/\/img0[1-9]{1}\.luckincoffeecdn\.com\/group\d/M00/[A-Z0-9]{2}/[A-Z0-9]{2}/[a-zA-Z0-9]{29}\.(jpg|jpeg)_\.webp url reject-200
# > 美图秀秀
^https?:\/\/mea\.meitudata\.com\/kaiping url reject
# > 12306
# hostname = ad.12306.cn, mobile.12306.cn
^https:\/\/ad\.12306\.cn\/ad\/ser\/getAdList$ url script-analyze-echo-response https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/12306.js
^https:\/\/mobile\.12306\.cn\/otsmobile\/app\/mgs\/mgw\.htm$ url script-response-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/header.js
# > 钉钉
^https?:\/\/(gw|img)\.alicdn\.com\/imgextra\/.+\/[\w!]+\d+-\d+-.+-\b([8-9]\d{2,}|[1-9]\d{3,})\b-\b([5-9]\d{2,}|[1-9]\d{3,})\b url reject-dict
# 58同城 //*.58cdn.com.cn, app.58.com, pic?.ajkimg.com
^https:\/\/app\.58\.com\/api\/home\/(advertising|appadv) url reject
^https:\/\/app\.58\.com\/api\/home\/invite\/popupAdv url reject
^https:\/\/app\.58\.com\/api\/log\/ url reject
^https:\/\/pic\d\.ajkimg\.com\/mat\/\w+\?imageMogr\d\/format\/jpg\/thumbnail\/\d{3}x\d{4}$ url reject
^https:\/\/.+\.58cdn\.com\.cn\/brandads url reject
# 阿里巴巴 //acs.m.taobao.com, heic.alicdn.com, guide-acs.m.taobao.com, poplayer.template.alibaba.com
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.crm\.screen\.(allresource|predict) url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimusic\.common\.mobileservice\.startinit url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject-dict
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources url reject-dict
^https:\/\/heic\.alicdn\.com\/imgextra\/i\d\/\d*\/?[\w!]+-\d-(octopus|tps-1125-1602|tps-1080-1920)\.(jp|pn)g_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q[59]0 url reject-dict
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.adx\.flyad\.getad url reject-dict
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.mshow url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cainiao.js
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(volvo\.secondfloor\.getconfig|wireless\.home\.newface\.awesome\.get) url reject-dict
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(cloudvideo\.video\.query|wireless\.home\.splash\.awesome\.get) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/poplayer\.template\.alibaba\.com\/\w+\.json url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
# 建设银行
^http:\/\/image1\.ccb\.com\/newsinfo\/eBranch\/check\/(nf\/newfin\/activity|po\/poortheme\/activity)\/\w+\.png url reject
# 京东 //api.m.jd.com
^http:\/\/\w{32}\.jddebug\.com\/diagnose\? url reject
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=(deliverLayer|getTabHomeInfo|myOrderInfo|orderTrackBusiness|personinfoBusiness|start|welcomeHome) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/jingdong.js
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=(searchBoxWord|stationPullService|uniformRecommend[06]) url reject-dict
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=getWidgetV1052 url reject
;^https?:\/\/dns\.jd\.com\/ url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(server|basic)Config url response-body "dnsvip"\:".+" response-body "dnsvip":""
# 京东极速版 //api.m.jd.com
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising url response-body jdLiteAdvertisingVO response-body rucu6
# 酷安 //api.coolapk.com
^https:\/\/api\.coolapk\.com\/v6\/feed\/(detail|replyList)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/main\/(dataList|indexV8|init) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/page\/dataList\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch url reject-dict
# hostname = img.meituan.net, p*.meituan.net, s3plus.meituan.net, www.meituan.net, flowplus.meituan.net, wmapi.meituan.net, apimobile.meituan.net, apimobile.meituan.com
^https?:\/\/img\.meituan\.net\/(?>adunion|display|midas)\/.+?\.(gif|jpg|jpg\.webp)$ url reject-200
^https?:\/\/p\d\.meituan\.net\/wmbanner\/[A-Za-z0-9]+?\.jpg url reject-200
^https?:\/\/p\d\.meituan\.net\/movie\/[A-Za-z0-9]+?\.jpg\?may_covertWebp url reject-200
^https?:\/\/s3plus\.meituan\.net\/.+?\/linglong\/ url reject
^https?:\/\/s3plus\.meituan\.net\/v1\/mss_a002 url reject-img
^https?:\/\/www\.meituan\.com\/api\/v\d\/appstatus\? url reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d+\/loadInfo\? url reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d\/startpicture url reject
^https?:\/\/flowplus\.meituan\.net\/v\d\/\w+\/linglong\/\d+\.(gif|jpg|mp4) url reject
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) url reject
^https?:\/\/apimobile\.meituan\.com\/appupdate\/mach\/checkUpdate? url reject
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ url reject
^https?:\/\/p\d.meituan.net\/movie\/.*?\?may_covertWebp url reject-img
^https?:\/\/p\d{1}\.meituan\.net\/(adunion|display|mmc|wmbanner)\/ url reject
# 美团订单详情页更多推荐
^https?:\/\/apimobile\.meituan\.com\/group\/v1\/recommend\/unity\/recommends url reject
# 闲鱼 //gw.alicdn.com, acs.m.taobao.com
^https:\/\/gw\.alicdn\.com\/mt\/ url reject
^https:\/\/gw\.alicdn\.com\/tfs\/.+\d{3,4}-\d{4} url reject
^https:\/\/gw\.alicdn\.com\/tps\/.+\d{3,4}-\d{4} url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject
# 云闪付 //wallet.95516.com
^https:\/\/wallet\.95516\.com(:10533)?\/s\/wl\/icon\/large\/1 url reject
# > 粉笔
# hostname = tiku.fenbi.com
# 开屏广告
^https:\/\/tiku\.fenbi\.com\/activity\/app\/launcher\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/fenbi.js
# > 携程旅行 微信小程序净化
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/13916\/tripAds url reject-dict
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/12673\/queryWeChatHotEvent url reject-dict
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/13012\/getWaterflowInfo url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/T3.js
# > 星巴克 微信小程序净化
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/popup url reject-dict
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/banner url reject-dict
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/global url reject-dict
# > 申通快递 微信小程序净化
^https:\/\/customer-app\.sto\.cn\/api\/app\/banner\/banner url reject-dict
^https:\/\/sto-customer-app\.oss-cn-shanghai\.aliyuncs\.com\/images url reject-dict
# > 极兔快递 微信小程序净化
^https:\/\/applets\.jtexpress\.com\.cn url reject-dict
# > EMS 微信小程序净化 由TEXAS和豆豆提供
^https:\/\/ump\.ems\.com\.cn\/new-generation-extend\/redis\/pageInfoByChannel url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/ems.js
# > 德邦快递 微信小程序净化（删除Top轮播）
# hostname = www.deppon.com
^https:\/\/www\.deppon\.com\/gwapi\/memberService\/eco\/member\/grade\/commonInterface url reject-dict
# > 丰巢 微信小程序净化
^https:\/\/webchatapp\.fcbox\.com\/fcboxactivityweb\/api\/v2\/clientPage url reject-dict
^https:\/\/dsp\.fcbox\.com url reject-dict
# > 屈臣氏 微信小程序开屏(或许APP也可以干掉)
^https:\/\/mystore-gw\.watsonsvip\.com\.cn\/gfu\/popup\/advert\/launch url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/watsons.js
# > 哈啰 微信小程序首页弹窗屏蔽
;^https:\/\/api\.hellobike\.com\/api\?adx url reject-dict
# > 青桔 微信小程序净化
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=cms\.htw\.delivery url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.combineHomepageInfo url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.mallRecommend url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.homeConfig url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/qingju.js
# > 猫眼电影小程序
# 弹窗广告+横幅广告 #主机名ad.maoyan.com
^https:\/\/ad\.maoyan\.com\/api\/position\/detail url reject-dict
# 电竞赛事+热门赛事 #主机名wx.maoyan.com
^https:\/\/wx\.maoyan\.com\/maoyansh\/api\/mobile\/(hotMatchList|eSportsIps) url reject-dict
# 猫眼放映厅 #主机名vod-movie.maoyan.com
^https:\/\/vod-movie\.maoyan\.com\/vod\/video\/onlineMovies\.json url reject-dict
# 精彩演出
^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/movie\/wonderShow url reject-dict
# 七日精选
^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/performances\/calendar\/0 url reject-dict
# 今日必抢
^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/performances\/rob\/main url reject-dict
# 大咖新动态
^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/celebrityBasicList\/query url reject-dict
# 为你推荐
^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/recommend\/performances url reject-dict
# 首页底部推荐 #主机名api.maoyan.com
^https:\/\/api\.maoyan\.com\/sns\/common\/feed\/channel\/v2\/list\.json url reject-dict
# 演出页面全部拦截
^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/ad\/detail url reject-dict
# > 麦当劳 微信小程序净化
^https:\/\/api\.mcd\.cn\/bff\/portal\/home\/hotActivity url reject-dict
# > 肯德基 微信小程序净化
^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/coupon url reject-dict
^https:\/\/dynamicad\.kfc\.com\.cn\/api url reject-dict
^https:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/custom_v2\/wxapp url reject-dict
^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/activity url reject-dict
# > 滴滴出行 微信小程序
# hostname = common.diditaxi.com.cn, conf.diditaxi.com.cn
^https:\/\/common\.diditaxi\.com\.cn\/common\/v5 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/didi/didi.js
# > 滴滴打车 小程序净化 感谢#豆豆分享
^https:\/\/conf\.diditaxi\.com\.cn\/homepage\/v1\/core url reject-dict
# > 12306
# hostname = ad.12306.cn
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://raw.githubusercontent.com/kokoryh/Script/master/js/12306.js
# 彩云天气 hostname = wrapper.cyapi.cn, api.caiyunapp.com
^https?:\/\/wrapper\.cyapi\.cn\/v1\/activity\? url echo-response application/json echo-response https://raw.githubusercontent.com/Keywos/rule/main/mocks/caiyun.json
^https?:\/\/api\.caiyunapp\.com\/v1\/activity url reject-dict
^https:\/\/biz\.cyapi\.cn\/p\/v1\/entries\? url reject-dict
^https:\/\/biz\.cyapi\.cn\/(p\/v1\/vip_info|v2\/user) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
^https:\/\/starplucker\.cyapi\.cn\/v3\/operation\/homefeatures\? url reject-dict
# 豆瓣 //api.douban.com
^https:\/\/api\.douban\.com\/v2\/app_ads\/splash url reject
^https:\/\/api\.douban\.com\b.*\/common_ads\? url reject
# > Blued
# hostname = social.blued.cn
# 主页推荐直播 
^https?:\/\/social\.blued\.cn\/users\/recommend url reject-dict
# 未登录时个人界面广告
^https?:\/\/social\.blued\.cn\/users\/no_auth\/benefit url reject-dict
# 登录后个人界面广告
^https?:\/\/social\.blued\.cn\/users\/.+\/more\/ios\?v=2 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/blued.js

hostname = api.pinduoduo.com, img14.360buyimg.com,yunbusiness.ccb.com,g.alicdn.com,mcs-mimp-web.sf-express.com, ucmp.sf-express.com,app.10099.com.cn,mbs.boc.cn,e.weather.com.cn,home.umetrip.com, discardrp.umetrip.com, startup.umetrip.com, hdgateway.zto.com, m.client.10010.com,acs.m.taobao.com, guide-acs.m.taobao.com, poplayer.template.alibaba.com,mapi.appvipshop.com,ecapi.lkcoffee.com, capi.lkcoffee.com, m.lkcoffee.com,mea.meitudata.com,ad.12306.cn, mobile.12306.cn,gw.alicdn.com,*.58cdn.com.cn, app.58.com, pic?.ajkimg.com,acs.m.taobao.com, heic.alicdn.com, guide-acs.m.taobao.com, poplayer.template.alibaba.com,api.m.jd.com,api.m.jd.com,api.coolapk.com,img.meituan.net, p*.meituan.net, s3plus.meituan.net, www.meituan.net, flowplus.meituan.net, wmapi.meituan.net, apimobile.meituan.net, apimobile.meituan.com,gw.alicdn.com, acs.m.taobao.com,wallet.95516.com,tiku.fenbi.com,m.ctrip.com,3pp.starbucks.com.cn,customer-app.sto.cn, sto-customer-app.oss-cn-shanghai.aliyuncs.co,applets.jtexpress.com.cn,ump.ems.com.cn,www.deppon.com,webchatapp.fcbox.com,mystore-gw.watsonsvip.com.cn,htwkop.xiaojukeji.com,ad.maoyan.com,wx.maoyan.com,vod-movie.maoyan.com,api.maoyan.com,api.mcd.cn,orders.kfc.com.cn, dynamicad.kfc.com.cn, res.kfc.com.cn,common.diditaxi.com.cn, conf.diditaxi.com.cn,ad.12306.cn,wrapper.cyapi.cn, api.caiyunapp.com,api.douban.com,social.blued.cn
