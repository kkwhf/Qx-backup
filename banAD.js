# >>>>>>>>>>>>>>> ✅ 0 ✅ <<<<<<<<<<<<<<
# Update:20240813

# >>>>>>>>>>>>>>> ✅ 1 ✅ <<<<<<<<<<<<<<
# > 12123
# hostname = gab.122.gov.cn
;^https?:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery url reject
;^https?:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery\/adver$ url reject

# > 12306
# hostname = ad.12306.cn, mobile.12306.cn
;^https:\/\/ad\.12306\.cn\/ad\/ser\/getAdList$ url script-analyze-echo-response https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/12306.js
;^https:\/\/mobile\.12306\.cn\/otsmobile\/app\/mgs\/mgw\.htm$ url script-response-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/header.js

# > 58
# hostname = *.58cdn.com.cn, app.58.com, pic?.ajkimg.com
;^https:\/\/app\.58\.com\/api\/home\/(advertising|appadv) url reject
;^https:\/\/app\.58\.com\/api\/home\/invite\/popupAdv url reject
;^https:\/\/app\.58\.com\/api\/log\/ url reject
;^https:\/\/pic\d\.ajkimg\.com\/mat\/\w+\?imageMogr\d\/format\/jpg\/thumbnail\/\d{3}x\d{4}$ url reject
;^https:\/\/.+\.58cdn\.com\.cn\/brandads url reject

# > 微信小程序
# > 顺丰快递
# hostname = mcs-mimp-web.sf-express.com, ucmp.sf-express.com
;^https?:\/\/mcs-mimp-web\.sf-express\.com\/mcs-mimp\/integralPlanet\/getCxAdvertiseList url reject-dict
;^https?:\/\/ucmp-static\.sf-express\.com\/proxy\/wxbase\/wxTicket\/wxLiveStreamInfo\?pageNo url reject-dict
;^https?:\/\/ucmp\.sf-express\.com\/proxy\/esgcempcore\/memberGoods\/pointMallService\/goodsList url reject-dict
;^https?:\/\/ucmp\.sf-express\.com\/proxy\/operation-platform\/info-flow-adver\/query url reject-dict
;^https?:\/\/ucmp\.sf-express\.com\/proxy\/esgcempcore\/memberManage\/memberEquity\/queryRecommendEquity url reject-dict
;^https?:\/\/ucmp\.sf-express\.com\/proxy\/esgcempcore\/memberActLengthy\/fullGiveActivityService\/fullGiveInfo url reject-dict
# > 中国天气网
# hostname = e.weather.com.cn
;^https?:\/\/e\.weather\.com\.cn\/weChat\/typhoonNull\.json url reject-dict
# > 中通快递
# hostname = hdgateway.zto.com
;^https?:\/\/hdgateway\.zto\.com\/getApolloConfig url reject-dict
;^https?:\/\/hdgateway\.zto\.com\/track url reject-dict
;^https?:\/\/hdgateway\.zto\.com\/getAdInfo url reject-dict
;^https?:\/\/hdgateway\.zto\.com\/listJumperShow url reject-dict
# > 携程旅行 
# hostname = m.ctrip.com
;^https:\/\/m\.ctrip\.com\/restapi\/soa2\/13916\/tripAds url reject-dict
;^https:\/\/m\.ctrip\.com\/restapi\/soa2\/12673\/queryWeChatHotEvent url reject-dict
;^https:\/\/m\.ctrip\.com\/restapi\/soa2\/13012\/getWaterflowInfo url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/T3.js
# > 星巴克
# hostname = 3pp.starbucks.com.cn
;^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/popup url reject-dict
;^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/banner url reject-dict
;^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/global url reject-dict
# > 申通快递
# hostname = customer-app.sto.cn,sto-customer-app.oss-cn-shanghai.aliyuncs.com
;^https:\/\/customer-app\.sto\.cn\/api\/app\/banner\/banner url reject-dict
;^https:\/\/sto-customer-app\.oss-cn-shanghai\.aliyuncs\.com\/images url reject-dict
# > 极兔快递 
# hostname = applets.jtexpress.com.cn
;^https:\/\/applets\.jtexpress\.com\.cn url reject-dict
# > EMS
# hostname = ump.ems.com.cn
;^https:\/\/ump\.ems\.com\.cn\/new-generation-extend\/redis\/pageInfoByChannel url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/ems.js
# > 德邦快递
# hostname = www.deppon.com
;^https:\/\/www\.deppon\.com\/gwapi\/memberService\/eco\/member\/grade\/commonInterface url reject-dict
# > 丰巢
# hostname = webchatapp.fcbox.com,dsp.fcbox.com 
;^https:\/\/webchatapp\.fcbox\.com\/fcboxactivityweb\/api\/v2\/clientPage url reject-dict
;^https:\/\/dsp\.fcbox\.com url reject-dict
# > 屈臣氏
# hostname =mystore-gw.watsonsvip.com.cn
;^https:\/\/mystore-gw\.watsonsvip\.com\.cn\/gfu\/popup\/advert\/launch url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/watsons.js
# > 哈啰
# hostname =api.hellobike.com
;^https:\/\/api\.hellobike\.com\/api\?adx url reject-dict
# > 青桔
# hostname =htwkop.xiaojukeji.com
;^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=cms\.htw\.delivery url reject-dict
;^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.combineHomepageInfo url reject-dict
;^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.mallRecommend url reject-dict
;^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.homeConfig url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/qingju.js
# > 猫眼电影
# hostname =ad.maoyan.com,wx.maoyan.com,vod-movie.maoyan.com,api.maoyan.com
;^https:\/\/ad\.maoyan\.com\/api\/position\/detail url reject-dict
;^https:\/\/wx\.maoyan\.com\/maoyansh\/api\/mobile\/(hotMatchList|eSportsIps) url reject-dict
;^https:\/\/vod-movie\.maoyan\.com\/vod\/video\/onlineMovies\.json url reject-dict
;^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/movie\/wonderShow url reject-dict
;^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/performances\/calendar\/0 url reject-dict
;^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/performances\/rob\/main url reject-dict
;^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/celebrityBasicList\/query url reject-dict
;^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/recommend\/performances url reject-dict
;^https:\/\/api\.maoyan\.com\/sns\/common\/feed\/channel\/v2\/list\.json url reject-dict
;^https:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/ad\/detail url reject-dict
# > 麦当劳
# hostname =api.mcd.cn
;^https:\/\/api\.mcd\.cn\/bff\/portal\/home\/hotActivity url reject-dict
# > 肯德基
# hostname =*.kfc.com.cn
;^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/coupon url reject-dict
;^https:\/\/dynamicad\.kfc\.com\.cn\/api url reject-dict
;^https:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/custom_v2\/wxapp url reject-dict
;^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/activity url reject-dict
# > 滴滴出行
# hostname = common.diditaxi.com.cn, conf.diditaxi.com.cn
;^https:\/\/common\.diditaxi\.com\.cn\/common\/v5 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/didi/didi.js
;^https:\/\/conf\.diditaxi\.com\.cn\/homepage\/v1\/core url reject-dict
# > 滴滴代驾
# hostname = daijia.kuaidadi.com, as.xiaojukeji.com
;^https?:\/\/as\.xiaojukeji\.com\/ep\/as\/conf\?ns=daijia-front&name= url reject-dict
;^https?:\/\/daijia\.kuaidadi\.com\/gateway\?api=prado\.cms\.delivery\.batch&apiVe url reject-dict
# > 嘀嗒出行
# hostname = capis*.didapinche.com, adx-cn.anythinktech.com, www.didapinche.com
;^https?:\/\/capis(-\d)?\.didapinche\.com\/adbase url reject
;^https?:\/\/capis(-\d)?\.didapinche\.com\/ad\/ url reject
;^https?:\/\/adx-cn\.anythinktech\.com\/bid url reject-dict
;^https?:\/\/capis(-?\w*)?\.didapinche\.com\/publish\/api\/upgrade url reject-dict
;^https?:\/\/www\.didapinche\.com\/app\/adstat\/ url reject-200
# > 工银e生活
# hostname = elife.icbc.com.cn
;^https?:\/\/elife\.icbc\.com\.cn\/OFSTNEWBASE\/floorinfo\/getMantlePages\.do url reject-200
# > 故宫博物馆
# hostname = gugongmini.dpm.org.cn
;^https?:\/\/gugongmini\.dpm\.org\.cn\/gugong_applet\/open-screen url reject-dict
# > 美团充电宝
# hostname = cdb.meituan.com
;^https?:\/\/cdb\.meituan\.com\/marketing\/source\/getPageSlotList url reject-dict
# > 腾讯乘车码
# hostname = ccmsupport-sz.tenpay.com
;^https?:\/\/ccmsupport-sz\.tenpay\.com\/cgi-bin\/common\/ccm_page_element.cgi url reject
  
# >>>>>>>>>>>>>>> ✅ A ✅ <<<<<<<<<<<<<<
# > Alibaba
# hostname = acs.m.taobao.com, heic.alicdn.com, guide-acs.m.taobao.com, poplayer.template.alibaba.com
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.crm\.screen\.(allresource|predict) url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimusic\.common\.mobileservice\.startinit url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject-dict
#^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources url reject-dict
#^https:\/\/heic\.alicdn\.com\/imgextra\/i\d\/\d*\/?[\w!]+-\d-(octopus|tps-1125-1602|tps-1080-1920)\.(jp|pn)g_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q[59]0 url reject-dict
#^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.adx\.flyad\.getad url reject-dict
#^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.mshow url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cainiao.js
#^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(volvo\.secondfloor\.getconfig|wireless\.home\.newface\.awesome\.get) url reject-dict
#^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(cloudvideo\.video\.query|wireless\.home\.splash\.awesome\.get) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
#^https:\/\/poplayer\.template\.alibaba\.com\/\w+\.json url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js

# > 爱思助手
# hostname = list-app-m.i4.cn
^https:\/\/list-app-m\.i4\.cn\/(adclickcb|getHotSearchList|getopfstadinfo)\.xhtml url reject

# >>>>>>>>>>>>>>> ✅ B ✅ <<<<<<<<<<<<<<
# > Blued
# hostname = social.blued.cn
# 主页推荐直播 
#^https?:\/\/social\.blued\.cn\/users\/recommend url reject-dict
# 未登录时个人界面广告
#^https?:\/\/social\.blued\.cn\/users\/no_auth\/benefit url reject-dict
# 登录后个人界面广告
#^https?:\/\/social\.blued\.cn\/users\/.+\/more\/ios\?v=2 url script-response-body #https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/blued.js

# > 哔哩哔哩
# 我的页面 伪装会员,皮肤推送 //app.bilibili.com
^https:\/\/app\.bilibili\.com\/x\/v2\/account\/(mine(\/ipad)?|myinfo)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/json.js
^https:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/json.js

# IP请求,地理位置请求 //api.bilibili.com
^https:\/\/api\.bilibili\.com\/x\/web-interface\/zone\?jsonp url reject-dict
^https:\/\/app\.bilibili\.com\/x\/resource\/ip url reject-dict
# > 乐刻
# hostname = lens.leoao.com
# 开屏广告
;^https?:\/\/lens\.leoao\.com\/lens\/conduct\/app\/rpc\/v2\/com\.lefit\.dubbo\.cms\.api\.front\.AppAdvertisingFrontService\/getAppAdvertisingNew url reject-dict
;^https?:\/\/lens\.leoao\.com\/lens\/conduct\/app\/rpc\/v2\/com\.lefit\.dubbo\.cms\.api\.bff\.ClientFrontFacade\/queryHomeMiddleInfo url reject-dict
;^https?:\/\/lens\.leoao\.com\/lens\/conduct\/app\/rpc\/v2\/com\.lefit\.dubbo\.cms\.api\.front\.AdvertiseConfigFrontService\/getAdvertiseConfigNew url reject-dict

# > 波点音乐
# hostname = bd-api.kuwo.cn, h5app.kuwo.cn, bodianimgcdn.kuwo.cn
;^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/finds\/module\?moduleId url reject-dict
;^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/banner\/myPage\?uid url reject-dict
;^https?:\/\/bd-api\.kuwo\.cn\/api\/play\/listening\/entrance\/music\?musicId url reject-dict
;^https?:\/\/h5app\.kuwo\.cn\/m\/kwtemplatePage\/index\.html\?id=1157&app=bodianhdzx url reject-dict
;^https?:\/\/h5app\.kuwo\.cn\/m\/bdvipact2205\/index\.html\?fromsrc=huodong url reject-dict
;^https?:\/\/bodianimgcdn\.kuwo\.cn\/images\/0e83c1821cd2681de08e20bec73d1e75 url reject-dict
;^https?:\/\/bodianimgcdn\.kuwo\.cn\/images\/198c0b313fe9e53b03240c7b30b4acc9 url reject-dict

# > 薄荷健康
# hostname = bohe.sfo-tx-shanghai-01.saas.sensorsdata.cn, api.boohee.com
;^https?:\/\/api\.boohee\.com\/shop-interface\/api\/v1\/home\/index url reject-dict
;^https?:\/\/bohe\.sfo-tx-shanghai-01\.saas\.sensorsdata\.cn\/api\/v2\/sfo\/user_popup_configs url reject-dict
;^https?:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/(discover_chosen|page_float_bubbles) url reject-dict
;^https?:\/\/api\.boohee\.com\/app-interface\/v1\/record\/record_tool(_pop)?_ad url reject-dict
;^https?:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/record_index url response-body articles response-body random_body

# >>>>>>>>>>>>>>> ✅ C ✅ <<<<<<<<<<<<<<
# > csdn
# hostname = app-gw.csdn.net, gw.csdn.net
;^https?:\/\/app-gw\.csdn\.net\/silkroad-api\/api\/v\d\/assemble\/list\/pub\/channel\/app_open_screen_ad url reject
;^https?:\/\/app-gw\.csdn\.net\/abtesting\/v2\/getList? url reject
;^https?:\/\/gw\.csdn\.net\/cms-app\/v\d+\/home_page\/open_advertisement url reject

# > 彩云天气
# hostname = *.cyapi.cn, api.caiyunapp.com
^https:\/\/api\.caiyunapp\.com\/v1\/activity\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
^https:\/\/biz\.cyapi\.cn\/(p\/v1\/entries|p\/v1\/trial_card\/info|v2\/product) url reject-dict
^https:\/\/biz\.cyapi\.cn\/(p\/v1\/vip_info|v2\/user) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
^https:\/\/starplucker\.cyapi\.cn\/v3\/(config\/cypage\/\w+\/conditions|notification\/message_center|operation\/homefeatures) url reject-dict
^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
^https:\/\/wrapper\.cyapi\.cn\/v1\/(nafp\/origin_images|satellite)\? url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
# > 车来了
# hostname = pic1.chelaile.net.cn, api.chelaile.net.cn, atrace.chelaile.net.cn, web.chelaile.net.cn, cdn.*.chelaileapp.cn
;^https?:\/\/pic1\.chelaile\.net\.cn\/adv\/ url reject
;^https?:\/\/(api|atrace)\.chelaile\.net\.cn\/adpub\/ url reject
;^https?:\/\/api\.chelaile\.net\.cn\/goocity\/advert\/ url reject
;^https?:\/\/atrace\.chelaile\.net\.cn\/adpub\/ url reject-img
;^https?:\/\/atrace\.chelaile\.net\.cn\/exhibit\?&adv_image url reject-img
;^https?:\/\/web\.chelaile\.net\.cn\/api\/adpub\/ad url reject
;^https?:\/\/cdn\.\w{3}\.chelaileapp\.cn\/(api\/)?adpub url reject

# >>>>>>>>>>>>>>> ✅ D ✅ <<<<<<<<<<<<<<
# > 大师兄
# hostname = sdk.alibaba.com.ailbaba.me, adservice.sigmob.cn
;^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/xgapp\.php\/v\d\/version url reject-200
;^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/xgapp\.php\/v\d\/advert\?position=[^2]+ url reject-200
;^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/xgapp\.php\/v\d\/top_notice\? url reject-200
;^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/(dsx|xgapp)\.php\/v\d\/(top_notice\?|version|advert\?position=[^2]+) url reject-200
;^https?:\/\/adservice\.sigmob\.cn\/extconfig url response-body false response-body true

# > 大众点评
# hostname = img.meituan.net
# 开屏广告
;^https?:\/\/img\.meituan\.net\/dpmobile\/.+93241\.png url reject-dict
;^https?:\/\/img\.meituan\.net\/dpmobile\/.*.(gif|jpg) url reject-200

# > 豆瓣
# hostname = api.douban.com
# 如开启可自行添加主机名 img*.douban.com, frodo.douban.com, erebor.douban.com
;^https?:\/\/api\.douban\.com\/v\d\/app_ads\/ url reject-dict
;^https?:\/\/api\.douban\.com\/b.*\/common_ads\?.* url reject-dict
;^https?:\/\/img\d\.doubanio\.com\/view\/dale-online\/dale_ad\/ url reject
;^https?:\/\/frodo\.douban\.com\/api\/v2\/movie\/banner url reject
;^https?:\/\/erebor\.douban\.com\/count\/\?ad= url reject

# > 钉钉
# hostname = gw.alicdn.com, img.alicdn.com
# 误杀少 解决阿里系的开屏
^https?:\/\/(gw|img)\.alicdn\.com\/imgextra\/.+\/[\w!]+\d+-\d+-.+-\b([8-9]\d{2,}|[1-9]\d{3,})\b-\b([5-9]\d{2,}|[1-9]\d{3,})\b url reject-dict

# > 滴滴出行
# hostname = res.xiaojukeji.com, common.diditaxi.com.cn, hd.xiaojukeji.com, freight.xiaojukeji.com, daijia.kuaidadi.com, ct.xiaojukeji.com, conf.diditaxi.com.cn
;^https?:\/\/hd\.xiaojukeji\.com\/d url reject-dict
;^https?:\/\/ct\.xiaojukeji\.com\/agent\/v3\/feeds url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/freight\.xiaojukeji\.com\/gateway url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/xpget url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/mget url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/conf\.diditaxi\.com\.cn\/homepage\/v\d\/other\/fast url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/conf\.diditaxi\.com\.cn\/homepage\/v\d\/core url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/conf\.diditaxi\.com\.cn\/dynamic\/conf url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/common\.diditaxi\.com\.cn\/common\/v\d\/usercenter\/me url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/daijia\.kuaidadi\.com\/gateway url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/daijia\.kuaidadi\.com:443\/gateway url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Didichuxing.js
;^https?:\/\/common\.diditaxi\.com\.cn\/common\/v5 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/didi/didi.js

# > 得物
# hostname = app.dewu.com, cdn.poizon.com
;^https?:\/\/app\.dewu\.com\/api\/v1\/app\/advertisement url reject
;^https?:\/\/cdn\.poizon\.com\/node-common\/.*.jpg url reject-200

# >>>>>>>>>>>>>>> ✅ E ✅ <<<<<<<<<<<<<<
# > 饿了么
# hostname = elemecdn.com, fuss10.elemecdn.com, cube.elemecdn.com, www1.elecfans.com, nr-op.elemecdn.com
# 开屏广告
;^https?:\/\/elemecdn\.com\/.+\/sitemap url reject
;^https?:\/\/fuss10\.elemecdn\.com\/.+\/w\/640\/h\/\d{3,4} url reject
;^https?:\/\/fuss10\.elemecdn\.com\/.+\/w\/750\/h\/\d{3,4} url reject
;^https?:\/\/fuss10\.elemecdn\.com\/.+?\.mp4 url reject-img
;^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_1\d{3},h_2\d{3}\/format,webp\/ url reject
;^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_6\d{2},h_8\d{2}\/format,webp\/ url reject
;^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{3},h_\d{4}\/format,webp\/ url reject
;^https?:\/\/cube\.elemecdn\.com\/\w\/\w{2}\/\w+mp4\.mp4\? url reject
;^https?:\/\/www1\.elecfans\.com\/www\/delivery\/ url reject
;^https?:\/\/(nr-op|cube)\.elemecdn\.com\/.+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{4,},h_\d{4,}\/($|format,webp\/$) url reject

# >>>>>>>>>>>>>>> ✅ F ✅ <<<<<<<<<<<<<<
# > 粉笔
# hostname = tiku.fenbi.com
# 开屏广告
;^https?:\/\/tiku\.fenbi\.com\/activity\/app\/launcher\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/fenbi.js

# >>>>>>>>>>>>>>> ✅ G ✅ <<<<<<<<<<<<<<
# > 光大银行
# hostname = mobile.cebbank.com, yghsh.cebbank.com
;^https?:\/\/mobile\.cebbank\.com\/cebclient\/ClientNoticeList url reject-200
# > 光大银行 阳光惠生活
;^https?:\/\/yghsh\.cebbank\.com\/static\/picture\/.*.jpg url reject-200

# > 工商银行
# hostname = v.icbc.com.cn
# 如开启可自行添加主机名
;^https?:\/\/v\.icbc\.com\.cn\/userfiles\/Resources\/WAP\/advertisement\/ url reject-200

# > 国家医保服务平台 开屏广告
# hostname = fuwu.nhsa.gov.cn
;^https?:\/\/fuwu\.nhsa\.gov\.cn\/ebus\/fuwu\/api\/base\/cms\/iep\/web\/cms\/hmpgcfg\/queryAppHmpgCfgByApp url reject

# > 网上国网
# hostname = osg-static.sgcc.com.cn
#（倒计时还在）
;^https?:\/\/osg-static\.sgcc\.com\.cn\/omg-static\/.*.jpg url reject-200

# >>>>>>>>>>>>>>> ✅ H ✅ <<<<<<<<<<<<<<
# > 虎扑
# hostname = games.mobileapi.hupu.com, du.hupucdn.com, i*.hoopchina.com.cn, goblin.hupu.com
;^https?:\/\/games\.mobileapi\.hupu\.com\/.+?\/(interfaceAdMonitor|interfaceAd)\/ url reject
;^https?:\/\/games\.mobileapi\.hupu\.com\/.+?\/(search|interfaceAdMonitor|status|hupuBbsPm)/(hotkey|init|hupuBbsPm)\. url reject-img
;^https?:\/\/games\.mobileapi\.hupu\.com\/.+?\/status\/init url reject
;^https?:\/\/games\.mobileapi\.hupu\.com\/\d\/(?:\d\.){2}\d\/status\/init url reject
;^https?:\/\/du\.hupucdn\.com\/\w+h\d{4} url reject-img
;^https?:\/\/i\d\.hoopchina\.com\.cn/blogfile\//d+\//d+\/BbsImg\.(?<=(big.(png|jpg)))$ url reject-img
;^https?:\/\/goblin\.hupu\.com\/.+\/interfaceAd\/getOther url reject
;^https?:\/\/i1\.hoopchina\.com\.cn\/blogfile\/.+_\d{3}x\d{4} url reject-img

# > 航旅纵横
# > hostname = home.umetrip.com, discardrp.umetrip.com, startup.umetrip.com,
;^http?:\/\/(discardrp|startup)\.umetrip\.com\/gateway\/api\/umetrip\/native url reject
;^http?:\/\/(114\.115\.217\.129)|(home\.umetrip\.com)\/gateway\/api\/umetrip\/native$ url script-response-body https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Resource/Script/Umetrip/Umetrip_remove_ads.js

# > 和风天气
# hostname = hfapp-service.qweather.net
;^https?:\/\/hfapp-service\.qweather\.net\/v\d\.\d\/app\/ad\/list\? url reject-dict

# >>>>>>>>>>>>>>> ✅ I ✅ <<<<<<<<<<<<<<
# > IT之家
# hostname = napi.ithome.com
# 移除 轮播图 置顶文章 信息流广告
;^https?:\/\/napi\.ithome\.com\/api\/(news\/index|topmenu\/getfeeds) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/ithome.js

# >>>>>>>>>>>>>>> ✅ J ✅ <<<<<<<<<<<<<<
# > 建行生活
# hostname = yunbusiness.ccb.com, g.alicdn.com, waimai-guide.ele.me
# 首页横幅广告
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A(002|006|009|119|120) url reject-200
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341C147 url reject-200
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB0(3|4|5) url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/ccbLife/ccbLifeAds.js
# 删除首页+金融+我的多个横幅等乱七八糟的广告
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB05 url echo-response application/json echo-response https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/ccbLife/A3341AB05.json
# 我的页面悬浮广告
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\? url response-body "TAG_AD_INFO" response-body "fmz200"
# 内置饿了么
^https?:\/\/g\.alicdn\.com\/.*o2o-ad url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/alicdn.js
^https?:\/\/waimai-guide\.ele\.me\/\w+\/mtop\.alsc\.eleme\.\w+\.trigger\.respond url reject-dict
^https?:\/\/waimai-guide\.ele\.me\/\w+\/mtop\.alsc\.wamai\.store\.detail\.miniapp\.popup url reject
^https?:\/\/waimai-guide\.ele\.me\/\w+\/mtop\.venus\.shopcouponpopupservice\.getshopcouponspopup url reject
^https?:\/\/waimai-guide\.ele\.me\/\w+\/mtop\.venus\.shopresourceservice\.getshopresource url response-body posterList response-body random_body

# > 建设银行
# hostname = image1.ccb.com
^http:\/\/image1\.ccb\.com\/newsinfo\/eBranch\/check\/(nf\/newfin\/activity|po\/poortheme\/activity)\/\w+\.png url reject

# > 京东
# hostname = api.m.jd.com, dns.jd.com

# > 京东极速版
# hostname = img11.360buyimg.com, api.m.jd.com
^https?:\/\/img11\.360buyimg.com\/dl\/jfs\/t1\/195304\/29\/12317\/268480\/60e6fd21E02a8fb2a\/ url reject-200
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising url reject

# > 京喜
# hostname = img14.360buyimg.com, api.m.jd.com
^https?:\/\/img14.360buyimg.com\/mcoss\/jfs\/t1\/183719\/8\/13358\/190450\/60e82bedE10b64e23\/ url reject-200
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising url response-body jdLiteAdvertisingVO response-body random_body
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_SmartPush url response-body pushData response-body random_body
^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/jingxiAd.js

# > 京东金融
# hostname = m.360buyimg.com, api.m.jd.com, bdsp-x.jd.com, dsp-x.jd.com, ms.jr.jd.com, appconf.mail.163.com, support.you.163.com
^https?:\/\/m.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/ url reject-200
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start url reject-img
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ url reject-200
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture url reject
^https?:\/\/appconf\.mail\.163\.com\/mmad\/ url reject
^https?:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json url reject

# >>>>>>>>>>>>>>> ✅ K ✅ <<<<<<<<<<<<<<
# > 夸克
# hostname = open-cms-api.uc.cn, open-cms-api.quark.cn
;^https?:\/\/open-cms-api\.(uc|quark)\.cn\/open-cms url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/quark.js

# > 酷安
# hostname = api.coolapk.com
;^https:\/\/api\.coolapk\.com\/v6\/feed\/(detail|replyList)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
;^https:\/\/api\.coolapk\.com\/v6\/main\/(dataList|indexV8|init) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
;^https:\/\/api\.coolapk\.com\/v6\/page\/dataList\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
;^https:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch url reject-dict

# > 肯德基
# hostname = res.kfc.com.cn
;^https?:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/apphome5\/apphome url reject-200
;^https?:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/apphome6\/\w+\.json\? url reject-dict
;^https?:\/\/res\.kfc\.com.\cn\/advertisement\/ url reject

# >>>>>>>>>>>>>>> ✅ L ✅ <<<<<<<<<<<<<<
# > 练就去更新
# hostname = res.kfc.com.cn
^https:\/\/api\.lianjiu\.fun\/app\/api\/v1\/version\/check url reject-200

  
# >>>>>>>>>>>>>>> ✅ M ✅ <<<<<<<<<<<<<<
# > MIX
# hostname = dispatcher.camera360.com
;^https?:\/\/dispatcher\.camera360\.com\/api\/v\d\/list$ url reject

# > 美团 & 美团外卖
# hostname = img.meituan.net, s3plus.meituan.net, flowplus.meituan.net
^https?:\/\/wmapi\.meituan\.com\/api\/v7\/(loadInfo|openscreen|startpicture)\? url reject-dict
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) url reject-dict
^https?:\/\/img\.meituan\.net\/bizad\/bizad_brandCpt_\d+\.jpg url reject-dict
^https?:\/\/s3plus\.meituan\.net\/ocean-blk-index\/index\/blk_conf_73\.json url reject-dict
^https?:\/\/s3plus\.meituan\.net\/v1\/mss_\w+\/(brandcpt-vedio|waimai-alita)\/\w+\.zip$ url reject-dict
# 美团订单详情页更多推荐
^https?:\/\/apimobile\.meituan\.com\/group\/v1\/recommend\/unity\/recommends url reject-dict

# > 美图秀秀
# hostname = mea.meitudata.com, adui.tg.meitu.com
^https?:\/\/mea\.meitudata\.com\/kaiping url reject
^https?:\/\/adui\.tg\.meitu\.com url reject-dict


# >>>>>>>>>>>>>>> ✅ N ✅ <<<<<<<<<<<<<<
# > 农业银行
# hostname = midc.cdn-static.abchina.com.cn, enjoy.cdn-static.abchina.com
;^https?:\/\/midc\.cdn-static\.abchina\.com\.cn\/distributecenterimg\/file\/download\/(?!bbc2|f015|1655|0992|4678|a194|d8e2|c513|e51c|0ee1|166e|05ca|c882|d5b8|22ed|a0dc|a55a|6f89|3bf9|3c71|52ec|5b62|ve7a|001c|923d|accf|4a10|0bd7|be7a|5b62|5dd6|1f24|006c|775d|bd02|b983|5251|806b|d119|db14|43c9|41d3|8570|2c10|85ea|1435|814e|f422|aec7|738c|d7c8|0538|02b4|fd20|7647|f6ef|07c5|885b|e4cb|685b|30aa|c23b|9603|f27f|eaf8|8011|a5eb|409d|724c|3f2a|e07f|6744|60a6|158c|8ce3) url reject-dict
;^https?:\/\/enjoy\.cdn-static\.abchina\.com\/yx-engine-web\/file\/download\/(?!7dc2|fe96|cea3|06a8|1b11|d57b|6918|61db|2d58|aa23|) url reject-200
;^https?:\/\/firefly\.abchina\.com\.cn\/firefly-collection\/Collect url reject-200

# >>>>>>>>>>>>>>> ✅ O ✅ <<<<<<<<<<<<<<

# >>>>>>>>>>>>>>> ✅ P ✅ <<<<<<<<<<<<<<
# > 拼多多
# hostname = api.pinduoduo.com, api.yangkeduo.com, mobile.yangkeduo.com
;^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash url reject
# 多多买菜
;^https?:\/\/mobile\.yangkeduo\.com\/proxy\/api\/api\/express\/post\/waybill\/red_packet\/goods_list$ url response-body "list":\[.+\] response-body "list":[]

# > 皮皮虾
# hostname = *.pipix.com
# 净化 配合图层效果极佳 首页Tap精简 我的页面去除无用模块
;^https?:\/\/.+\.pipix\.com\/bds\/feed\/channel_list\/ url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/PPX.js
;^https?:\/\/.+\.pipix\.com\/bds\/user\/check_in\/ url script-response-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/PPX.js

# >>>>>>>>>>>>>>> ✅ Q ✅ <<<<<<<<<<<<<<
# > QQ浏览器
# hostname = us.l.qq.com
;^https?:\/\/us\.l\.qq\.com\/exapp\?spsa=\d url reject

# > QQ音乐
# hostname = us.l.qq.com, y.gtimg.cn
;^https?:\/\/us\.l\.qq\.com\/exapp url reject
;^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/t_splash_info\/ url reject
;^https?:\/\/.+?\/music\/common\/upload\/t_splash_info\/ url reject
;^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad/.*?\d{4}\.jpg url reject-img
;^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/targeted_ads url reject-img
;^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/music\/common\/upload\/t_splash_info\/ url reject

# > 全民K歌
# hostname = y.gtimg.cn
#^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad\/.+?\d{3,4}x\d{4} url reject-200

# >>>>>>>>>>>>>>> ✅ R ✅ <<<<<<<<<<<<<<

# >>>>>>>>>>>>>>> ✅ S ✅ <<<<<<<<<<<<<<
# > spotify
# hostname = spclient.wg.spotify.com, api*.musical.ly


# > Soul
# hostname = 47.99.42.29, 47.97.215.55, 120.27.235.201, 47.110.187.87, ssp.soulapp.cn, 8.210.3.170, 47.75.72.47, api-account.soulapp.cn, api-global.soulapp.me, api-a.soulapp.cn, api-pay.soulapp.cn, gateway-mobile-gray.soulapp.cn, api-chat.soulapp.cn, post.soulapp.cn, api-user.soulapp.cn, api-account.soulapp.cn, ssp.soulapp.cn
# 各种广告
;^https?:\/\/ssp\.soulapp\.cn\/api\/q url reject-dict
# 青少年模式弹窗
;^https?:\/\/api-account\.soulapp\.cn\/teenager\/config url reject-dict
;^https?:\/\/api-a\.soulapp\.cn\/v2\/post\/gift\/list url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/api-a\.soulapp\.cn\/official\/scene\/module url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/api-chat\.soulapp\.cn\/chat\/limitInfo url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/api-user\.soulapp\.cn\/furion\/position\/content url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/api-pay\.soulapp\.cn\/vip\/meet\/userInfo url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/api-pay\.soulapp\.cn\/privilege\/supervip\/status url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/post\.soulapp\.cn\/hot\/soul\/rank url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/post\.soulapp\.cn\/v\d\/post\/homepage\/guide\/card url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/gateway-mobile-gray\.soulapp\.cn\/mobile\/app\/version\/queryIos url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
;^https?:\/\/47\.110\.187\.87\/winterfell\/v2\/getIpByDomain url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/soul/soul_ads.js
# 国际版Soul去广告
;https://api-global.soulapp.me/app/open/get url reject

# > 少数派
# hostname = ios.sspai.com
;https://ios.sspai.com/api/v3/recommend/page/get\?ad.*ios_home_modal url reject

# > 识货
# hostname = sh-gateway.shihuo.cn, static.shihuocdn.cn
# 开屏广告
;^https?:\/\/sh-gateway\.shihuo\.cn\/v\d\/services\/sh-adapi\/home\/(screen|ad) url reject
;^https?:\/\/static\.shihuocdn\.cn\/admin\/imgs/202[0-9]{5}\/[a-z0-9]{32}_513x777\.png url reject-200
;^https?:\/\/static\.shihuocdn\.cn\/admin\/imgs/202[0-9]{5}\/[a-z0-9]{32}_750x1624\.png url reject-200

# >>>>>>>>>>>>>>> ✅ T ✅ <<<<<<<<<<<<<<
# > TestFlight
# hostname = testflight.apple.com
# TF账户管理 App更新时提示"APP不可用"问题，解决部分TF兑换错了区域的问题，例如Loon兑换到了国区
;^https?:\/\/testflight\.apple\.com\/v\d\/(app|account|invite)s\/ url script-analyze-echo-response https://raw.githubusercontent.com/NobyDa/Script/master/TestFlight/TestFlightAccount.js

  # > 淘淘阅读
# hostname = bid.adview.cn
;^https?:\/\/bid\.adview\.cn\/agent\/getAd url reject
  
# > 淘宝
# hostname = acs.m.taobao.com, guide-acs.m.taobao.com, poplayer.template.alibaba.com
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimusic\.common\.mobileservice\.startinit url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources url reject-dict
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(volvo\.secondfloor\.getconfig|wireless\.home\.newface\.awesome\.get) url reject-dict
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.(cloudvideo\.video\.query|wireless\.home\.splash\.awesome\.get) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https?:\/\/poplayer\.template\.alibaba\.com\/\w+\.json url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js

# >>>>>>>>>>>>>>> ✅ U ✅ <<<<<<<<<<<<<<

# >>>>>>>>>>>>>>> ✅ V ✅ <<<<<<<<<<<<<<

# >>>>>>>>>>>>>>> ✅ W ✅ <<<<<<<<<<<<<<
# > WPS
# hostname = ios.wps.cn, mobile-pic.cache.iciba.com
^https?:\/\/ios\.wps\.cn\/ad-statistics-service url reject
^https?:\/\/mobile-pic\.cache\.iciba\.com\/feeds_ad\/ url reject-200

# > 微信
# hostname = mp.weixin.qq.com, weixin110.qq.com, security.wechat.com
# 公众号文章下方广告
;^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body advertisement response-body random_body
# 微信跳过中间界面，支付宝链接、被封禁链接进行通知弹窗跳转，在微信中用快照显示被封禁的链接（可选），在微信中进行强制重定向（可选），群聊 / 扫码均可使用，可选项可在脚本 2、3 行更改，也可在 BoxJs 中更改。
;^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? url script-response-body https://raw.githubusercontent.com/zZPiglet/Task/master/asset/UnblockURLinWeChat.js
# 微信公众号去除商品推广
;^https?:\/\/mp\.weixin\.qq\.com\/mp\/cps_product_info\?action url reject-dict

# > 威锋
# hostname = api.wfdata.club
;^https?:\/\/api\.wfdata\.club\/v\d\/yesfeng\/(infoCenterAd|yesList) url reject

# > 唯品会
# hostname = b.appsimg.com, mapi.appvipshop.com
;^https?:\/\/b\.appsimg\.com\/upload\/momin url reject
;^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get url reject-200
;^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/iosAdInfo\/report url reject
# APP+小程序弹窗广告
;^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/layout\/productList\/eventData\/v url reject-200
# 右下角悬浮窗，需手动关闭广告一次
;^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/coupon\/float_entrance\/get\?api_key url reject-200

# >>>>>>>>>>>>>>> ✅ X ✅ <<<<<<<<<<<<<<
# > 下厨房
# hostname = api.xiachufang.com
;^https?:\/\/api\.xiachufang\.com\/v\d\/ad/ url reject

# > 小白学习打印机 开屏广告
# hostname = api.xbxxhz.com
# 捕获试卷脚本：https://raw.githubusercontent.com/Yu9191/Script/main/shijuan.js
;^https?:\/\/api\.xbxxhz\.com\/big_data\/v1\/home_pages url reject

# > 小象超市
# hostname = portal-portm.meituan.com, mall.meituan.com
# 广告下发
;^https?:\/\/portal-portm\.meituan\.com\/horn_ios\/mergeRequest url reject-dict
# 开屏广告
;^https?:\/\/mall\.meituan\.com\/api\/c\/homepage\/splash url reject-dict
# 首页领券悬浮红包
;^https?:\/\/mall\.meituan\.com\/api\/c\/homepage\/bubble\/operate\/info url reject-dict

# > 闲鱼
# hostname = acs.m.goofish.com, g-acs.m.goofish.com, dinamicx.alibabausercontent.com

# >>>>>>>>>>>>>>> ✅ Y ✅ <<<<<<<<<<<<<<
# > 云闪付
# hostname = wallet.95516.com, tysdk.95516.com, ads.95516.com
# 默认关闭,只使用分流去云闪付广告
#^https:\/\/wallet\.95516\.com(:10533)?\/s\/wl\/icon\/large\/1 url reject
#^https?:\/\/wallet\.95516\.com\/s\/wl\/icon\/long url reject
#^https?:\/\/(tysdk|ads)\.95516\.com url reject-dict

# > 一淘
# hostname = acs.m.taobao.com
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject

# >>>>>>>>>>>>>>> ✅ Z ✅ <<<<<<<<<<<<<<
# > 招商银行
# hostname = webappcfg.paas.cmbchina.com
# 开屏广告
;^https?:\/\/webappcfg\.paas\.cmbchina\.com\/v\d\/func\/getmarketconfig url reject-200
# 首页横幅广告
;^https?:\/\/mbmodule-openapi\.paas\.cmbchina\.com\/graphic\/v2\/module\/graphic url reject-dict

# > 中国银行
# hostname = mbs.boc.cn, mlife.jf365.boc.cn
^https?:\/\/mbs\.boc\.cn\/ubas-mgateway-static\/images\/advertType\/.+.jpg url reject-200
# > 中国银行 缤纷生活
^https?:\/\/mlife\.jf365\.boc\.cn\/AppPrj\/FirstPic\.do\?txnId=2PIC000001 url reject-200

# > 中国移动
# hostname = client.app.coc.10086.cn, h.client.app.coc.10086.cn
;^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject-200
;^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/explorePage\/getAdverList url reject
# 多个悬浮窗
;^https?:\/\/(client\.app\.coc|h\.app\.coc|app)\.10086\.cn\/biz-orange\/DN\/emotionMarket url reject

# > 中国联通
# hostname = m.client.10010.com, m1.ad.10010.com, res.mall.10010.cn
;^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/getWelcomeAd url reject-200
;^https?:\/\/m\.client\.10010\.com\/mobileService\/(activity|customer)\/(accountListData|get_client_adv|get_startadv) url reject-img
;^https?:\/\/m\.client\.10010\.com\/mobileService\/customer\/getclientconfig\.htm url reject-dict
;^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/(getHomePageAd|getWelcomeAd) url reject-img
;^https?:\/\/[^(apple|10010)]+\.(com|cn)\/(a|A)d(s|v)?(\/|\.js) url reject-img
;^https?:\/\/m1\.ad\.10010\.com\/noticeMag\/images\/imageUpload\/2\d{3} url reject-img
;^https?:\/\/res\.mall\.10010\.cn\/mall\/common\/js\/fa\.js?referer= url reject-img

# > 中国电信
# hostname = cloud.189.cn, zt-app.go189.cn
;^https?:\/\/cloud\.189\.cn\/include\/splash\/ url reject
;^https?:\/\/zt-app\.go189\.cn\/zt-app\/welcome\/.*?Animation url reject-img

# > 中国广电
# hostname = app.10099.com.cn
^https?:\/\/app\.10099\.com\.cn\/contact-web\/api\/version\/getFlashScreenPage url reject-200

# > 中国知网
# hostname = xyz.cnki.net
;^https?:\/\/xyz\.cnki\.net\/resourcev7\/api\/manualpush\/SlidsList$ url reject-200

# >>>>>>>>>>>>>>> ✅ # ✅ <<<<<<<<<<<<<<
hostname =app.bilibili.com,api.bilibili.com,*.cyapi.cn, api.caiyunapp.com,gw.alicdn.com, img.alicdn.com,yunbusiness.ccb.com, g.alicdn.com,waimai-guide.ele.me,image1.ccb.com,img11.360buyimg.com,m.360buyimg.com,bdsp-x.jd.com, dsp-x.jd.com, ms.jr.jd.com, appconf.mail.163.com, support.you.163.com,img.meituan.net,mea.meitudata.com, adui.tg.meitu.com,acs.m.taobao.com, guide-acs.m.taobao.com, poplayer.template.alibaba.com,ios.wps.cn, mobile-pic.cache.iciba.com,gw.alicdn.com, heic.alicdn.com, asp.cntv.myalicdn.com,mbs.boc.cn, mlife.jf365.boc.cn,app.10099.com.cn,y.gtimg.cn