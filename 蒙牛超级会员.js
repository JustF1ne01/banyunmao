﻿/*
小程序 蒙牛超级会员
变量：mengniu  抓：m.pailifan.com里token
*/
const $ = new Env('蒙牛超级会员');
const axios = require('axios');
let request = require("request");
request = request.defaults({
    jar: true
});
const {
    log
} = console;
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0
let mengniu = ($.isNode() ? process.env.mengniu : $.getdata("mengniu")) || ""
let mengniuArr = [];
let data = '';
let msg = '';
let id = ''
let notice = ''
let Authorization = ''
let activeid = '64faa53e8844970001e64920'
const CryptoJS = createCryptoJS()
let timestamp = Math.round(new Date().getTime() / 1000).toString();
var t = timestampToTime(timestamp)
var iv = md5(t + timestamp + 'tMFw=RXrEF7y^=7QXy2h2C_g_^').toString().substring(8, 24)
iv = CryptoJS.enc.Utf8.parse(iv);
var key = md5('tMFw=RXrEF7y^=7QXy2h2C_g_^' + t + timestamp).toString().substring(8, 24)
key = CryptoJS.enc.Utf8.parse(key);
const USER_AGENTS =
        ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9117',
        'Mozilla/5.0 (Windows; U; Windows NT 5.0) AppleWebKit/534.29.4 (KHTML, like Gecko) Version/5.1 Safari/534.29.4',
        'Mozilla/5.0 (Windows NT 4.0; nds-DE; rv:1.9.2.20) Gecko/2011-03-05 13:13:14 Firefox/3.8',
        'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/5.1)',
        'Mozilla/5.0 (compatible; MSIE 8.0; Windows 98; Win 9x 4.90; Trident/5.1)',
        'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/533.1 (KHTML, like Gecko) Chrome/53.0.857.0 Safari/533.1',
        'Mozilla/5.0 (Windows NT 4.0; ia-FR; rv:1.9.0.20) Gecko/2012-01-23 00:32:34 Firefox/3.8',
        'Mozilla/5.0 (Windows NT 5.0; nl-NL; rv:1.9.1.20) Gecko/2017-12-18 16:56:00 Firefox/3.8',
        'Mozilla/5.0 (Windows; U; Windows NT 6.1) AppleWebKit/532.39.3 (KHTML, like Gecko) Version/5.1 Safari/532.39.3',
        'Mozilla/5.0 (Windows; U; Windows NT 5.01) AppleWebKit/535.14.7 (KHTML, like Gecko) Version/4.1 Safari/535.14.7',
        'Mozilla/5.0 (Windows 98) AppleWebKit/536.2 (KHTML, like Gecko) Chrome/38.0.862.0 Safari/536.2', '',
        'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/531.2 (KHTML, like Gecko) Chrome/35.0.832.0 Safari/531.2',
        'Mozilla/5.0 (Windows 98; Win 9x 4.90) AppleWebKit/536.1 (KHTML, like Gecko) Chrome/52.0.821.0 Safari/536.1',
        'Mozilla/5.0 (Windows; U; Windows NT 5.0) AppleWebKit/534.17.3 (KHTML, like Gecko) Version/5.0.5 Safari/534.17.3',
        'Mozilla/5.0 (Windows; U; Windows 98) AppleWebKit/531.40.6 (KHTML, like Gecko) Version/4.0 Safari/531.40.6',
        'Mozilla/5.0 (Windows; U; Windows CE) AppleWebKit/531.13.2 (KHTML, like Gecko) Version/5.0.3 Safari/531.13.2',
        'Mozilla/5.0 (Windows; U; Windows NT 5.2) AppleWebKit/531.7.6 (KHTML, like Gecko) Version/4.0.5 Safari/531.7.6',
        'Mozilla/5.0 (Windows; U; Windows NT 10.0) AppleWebKit/532.23.7 (KHTML, like Gecko) Version/5.0.5 Safari/532.23.7',
        'Mozilla/5.0 (Windows; U; Windows NT 5.01) AppleWebKit/535.14.7 (KHTML, like Gecko) Version/4.1 Safari/535.14.7',
        'Mozilla/5.0 (Windows 95) AppleWebKit/533.1 (KHTML, like Gecko) Chrome/15.0.822.0 Safari/533.1']
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];
!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite();
    } else {
        if (!(await Envs()))
            return;
        else {

            log(`\n=================== 共找到 ${mengniuArr.length} 个账号 ===================`)
            if (debug) {
                log(`【debug】 这是你的全部账号数组:\n ${mengniuArr}`);
            }
            for (let index = 0; index < mengniuArr.length; index++) {

                let num = index + 1
                addNotifyStr(`\n==== 开始【第 ${num} 个账号】====\n`, true)

                mengniu = mengniuArr[index];            

                await main()

}
            //await SendMsg(msg);
        }
    }
})()
.catch((e) => log(e))
    .finally(() => $.done())

async function main() {

  //  for (const item of MengNiu) {
        token = mengniu;
        userId = 1;
        console.log(`用户：${userId}开始任务`)
        //签到
        console.log("开始签到")
        let sign = await mcommonPost("/xcx/u/signin",encrypt({"token":token,"b":2617,"lat":"","lng":""}))
        if (sign.flag == 40317) {
            $.msg($.name, `用户：${userId}`, `token已过期，请重新获取`);
           
        }
        if (sign.flag == 0 && sign.data.success == 0) {
            console.log(`获得营养值：${sign.data.data.coin}`)
        } else {
            console.log(sign.data.message)
        }
        let taskList = await mcommonPost("/xcx/m/mytask",encrypt({"token":token,"b":2617,"lat":"","lng":""}))
        for (const task of taskList.data) {
            console.log(`任务：${task.title} id：${task.id} 奖励：${task.value}`)
        }
        //快乐连蒙
     /*    console.log("————————————")


        console.log("快乐连蒙")
        let gameLogin = await mcommonPost("/xcx/open/game_login",encrypt({"game_type":"SpeedLinkup","share_params":{"type":"SpeedLinkup"},"open_id":"oSRTN4kuq6xcFgHUHMvdbgaRuF58","token":token,"b":2617,"lng":"118.3471240234375","lat":"32.3110400390625"}))
        const urlStr = gameLogin.data.login_link.split('?')[1];
        let result = {};
        let paramsArr = urlStr.split('&')
        for(let i = 0,len = paramsArr.length;i < len;i++){
            let arr = paramsArr[i].split('=')
            result[arr[0]] = arr[1];
        }
        let Code2 = {"uid":`${userId}`,"lng":"118.3471240234375","lat":"32.3110400390625"}
        let login1 = await commonPost1("/user/login",{"Code":result.code,"Code2":JSON.stringify(Code2),"activeid":activeid,"channel":"40"})
        Authorization = login1.token
        id = login1.id

        console.log("开始游戏")
        login1.serverTime = Date.now()
        let logincheck = await commonPost1("/game/game/local/logincheck",{"activeid":activeid,"info":login1})
        let code = 0
        while (code == 0) {
            let startgame = await commonPost1('/game/game/local/startgame',{"activeId":activeid,"gameId":logincheck.role.gameId})
            //console.log(startgame.singleGameLock)
            let endGameByMengniu = await commonPost1('/game/game/local/endGameByMengniu',{"activeId":activeid,"gameId":logincheck.role.gameId,"singleGameLock":startgame.singleGameLock,"score":14.547999999998833})
            if (endGameByMengniu.code == 0) {
                console.log(`获得：${endGameByMengniu.platInfo.res.awardName}`)
            } else {
                console.log(endGameByMengniu.errMsg)
            }
            code = endGameByMengniu.code
        }
        console.log("开始任务")
        let taskList1 = await commonPost1('/task/user/v1/list',{"roleId":id,"sActiveId":activeid,"taskGroup":1})
        for (const task of taskList1.task) {
            console.log(`任务：${task.name} id：${task.taskId}`)
            if (task.refreshCycles[0].curRefreshValue <= task.refreshCycles[0].maxRefreshTimes && task.taskId == "T201") {
                //let doEventTask = await commonPost('/task/user/v1/doEventTask',{"taskId":"T201","opValue":1,"opType":"add","group":null,"sActiveId":activeid,"roleId":id,"fromClient":true,"judgeValue":null})
                //console.log(doEventTask)
            }
            if (task.refreshCycles[0].curRefreshValue < task.refreshCycles[0].maxRefreshTimes && task.taskId == "T003") {
                for (let i = task.refreshCycles[0].curRefreshValue; i < task.refreshCycles[0].maxRefreshTimes; i++) {
                    let decUserItem = await commonPost1('/item/user/v1/decUserItem',{"sActiveId":activeid,"sUserId":id,"sItemId":"d004","iCount":10,"params":"","negative":false})
                    console.log(decUserItem)
                    let finishTask = await commonPost1('/task/user/v1/finishTask',{"taskId":task.taskId,"sActiveId":activeid,"roleId":id})
                    console.log(finishTask)
                }
            }
        }
        code = 0
        while (code == 0) {
            let startgame = await commonPost1('/game/game/local/startgame',{"activeId":activeid,"gameId":logincheck.role.gameId})
            console.log(startgame.singleGameLock)
            let endGameByMengniu = await commonPost1('/game/game/local/endGameByMengniu',{"activeId":activeid,"gameId":logincheck.role.gameId,"singleGameLock":startgame.singleGameLock,"score":14.547999999998833})
            if (endGameByMengniu.code == 0) {
                console.log(`获得：${endGameByMengniu.platInfo.res.awardName}`)
            } else {
                console.log(endGameByMengniu.errMsg)
            }
            code = endGameByMengniu.code
        }*/
        //画龙领福气
        console.log("————————————")
        console.log("画龙领福气")
        let login = await commonPost("Login",`UID=${userId}`)
        for (let i = 0; i < login.result.GameCount; i++) {
            let login = await commonPost("Login",`UID=${userId}`)
            console.log(login)
            let GameRecord = await commonPost("GameRecord",`UID=${userId}&Difficulty=${Number(login.result.Difficulty) + 1}&IsSuccess=1&ActivityTimeID=106`)
            //console.log(GameRecord)
            let Luckdraw = await commonPost("Luckdraw",`UID=${userId}&ActivityTimeID=106`)
            if (Luckdraw.errcode == 0) {
                console.log(`获得：${Luckdraw.result.PrizeName}`)
            } else {
                console.log(Luckdraw.errmsg)
            }
        }
        //抽奖多一次
        let Luckdraw = await commonPost("Luckdraw",`UID=${userId}&ActivityTimeID=106`)
        if (Luckdraw.errcode == 0) {
            console.log(`获得：${Luckdraw.result.PrizeName}`)
        } else {
            console.log(Luckdraw.errmsg)
        }
        //狂欢派兑
        console.log("————————————")
        console.log("开始狂欢派兑抽奖")
        let flag = 0;
        while(flag == 0) {
            let doLottery = await mcommonPost("/xcx/v2/do_lottery",encrypt({"lottery_id":2405,"token":token,"b":2617,"lat":"32.31101209852431","lng":"118.34711615668402"}))
            if (doLottery.flag == 0) {
                console.log(`抽奖获得：${doLottery.data.name}`)
                if (doLottery.data.type != 22) {
                    $.msg($.name, `用户：${userId}`, `抽奖获得: ${doLottery.data.name}`);
                }
            } else {
                console.log(doLottery.msg)
            }
            flag = doLottery.flag
            await $.wait(2000);
        }
        //提现
        console.log("————————————")
        console.log("开始提现")
        let wallet = await mcommonPost("/xcx/m/wallet",encrypt({"token":token,"b":2617,"lat":"","lng":""}))
        if (wallet.data.total_balance > 0) {
            let withdraw = await mcommonPost("/xcx/u/dowithdraw",encrypt({"amount":wallet.data.total_balance/100,"lng":"","lat":"","is_all_reflect":1,"token":token,"b":2617}))
            if (withdraw.flag == 0) {
                console.log(`提现成功，提现金额：${wallet.data.total_balance/100}元`)
            } else {
                console.log(withdraw.msg)
            }
        } else {
            console.log("无可提现金额")
        }
        //营养值查询
        console.log("————————————")
        console.log("营养值查询")
        let user = await mcommonPost("/xcx/m/user",encrypt({"token":token,"b":2617,"lat":"","lng":""}))
        console.log(`拥有营养值：${user.data.user.proteinBalance}\n`)
        notice += `用户：${userId} 拥有营养值：${user.data.user.proteinBalance}\n`
  //  }
    if (notice) {
        $.msg($.name, '', notice);
    }
}

async function getCookie() {
    const token = $request.headers["token"];
    if (!token) {
        return
    }
    const body = $.toObj($response.body);
    if (!body.data || !body.data.user.id) {
        return
    }
    const newData = {"userId": body.data.user.id, "token": token}
    const index = MengNiu.findIndex(e => e.userId == newData.userId);
    if (index !== -1) {
        if (MengNiu[index].token == newData.token) {
            return
        } else {
            MengNiu[index] = newData;
            console.log(newData.token)
            $.msg($.name, `🎉用户${newData.userId}更新token成功!`, ``);
        }
    } else {
        MengNiu.push(newData)
        console.log(newData.token)
        $.msg($.name, `🎉新增用户${newData.userId}成功!`, ``);
    }
    $.setjson(MengNiu, "MengNiu");
}

async function commonPost1(url,body) {
    return new Promise(resolve => {
        const options = {
            url: `https://hserver.moxigame.cn/istio/grpc-gate${url}`,
            headers: {
                'Accept': '*/*',
                'encode': 'false',
                'uid': id,
                'Authorization': Authorization,
                'sec-fetch-site': 'same-site',
                'accept-language': 'zh-CN,zh-Hans;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                'sec-fetch-mode': 'cors',
                'Content-Type': 'application/json;charset=utf-8',
                'origin': 'https://game-cdn.moxigame.cn',
                'User-Agent': USER_AGENT,
                'Connection': 'keep-alive',
                'Sec-Fetch-Dest': 'empty'
            },
            body: JSON.stringify(body),
        }
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    await $.wait(2000)
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function commonPost(url,body) {
    return new Promise(resolve => {
        const options = {
            url: `https://drawdragon.beats-digital.com/Api/drawdragonApi.ashx?method=${url}`,
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "X-Requested-With": "XMLHttpRequest",
                "Sec-Fetch-Site": "same-origin",
                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                "Accept-Encoding": "gzip, deflate, br",
                "Sec-Fetch-Mode": "cors",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://drawdragon.beats-digital.com",
                "User-Agent": USER_AGENT,
                "Referer": "https://drawdragon.beats-digital.com/?uid=49680260&lng=118.34707763671875&lat=32.31099717881944",
                "Connection": "keep-alive",
                "Sec-Fetch-Dest": "empty"
            },
            body:body
        }
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    await $.wait(2000);
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function mcommonPost(url,encode) {
    return new Promise(resolve => {
        const options = {
            url: `https://m.pailifan.com${url}`,
            headers: {
                "content-type": "application/json",
                "system": "iOS 17.5",
                "version": "2022072802",
                "b": "2617",
                "brand": "iPhone",
                "size": "393,754",
                "token": token,
                "platform": "ios",
                "t": timestamp,
                "deviceOrientation": "portrait",
                "model": "iPhone 14 Pro<iPhone15,2>",
                "Accept-Encoding": "gzip,compress,br,deflate",
                "User-Agent": USER_AGENT,
                "Referer": "https://servicewechat.com/wx2e7a6973da6a1b54/1318/page-frame.html",
                "Connection": "keep-alive"
            },
            body:JSON.stringify({"encode":encode,"t":timestamp,"bd":"2617"})
        }
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    await $.wait(2000);
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}

function encrypt(word) {
    var srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(word));
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
}
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
}

function md5(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}

function createCryptoJS(){function e(t,r,i){function o(n,a){if(!r[n]){if(!t[n]){var s="function"==typeof require&&require;if(!a&&s)return s(n,!0);if(c)return c(n,!0);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}var h=r[n]={exports:{}};t[n][0].call(h.exports,function(e){var r=t[n][1][e];return o(r||e)},h,h.exports,e,t,r,i)}return r[n].exports}let n={};for(var c="function"==typeof require&&require,a=0;a<i.length;a++)Object.assign(n,o(i[a]));return n}const t={1:[function(e,t,r){},{}],2:[function(e,t,r){const i=e("crypto-js");t.exports=i},{"crypto-js":12}],3:[function(e,t,r){var i,o;i=this,o=function(e){return function(){var t=e,r=t.lib,i=r.BlockCipher,o=t.algo,n=[],c=[],a=[],s=[],f=[],h=[],d=[],p=[],u=[],l=[];(function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var r=0,i=0;for(t=0;t<256;t++){var o=i^i<<1^i<<2^i<<3^i<<4;o=o>>>8^255&o^99,n[r]=o,c[o]=r;var y=e[r],v=e[y],_=e[v],g=257*e[o]^16843008*o;a[r]=g<<24|g>>>8,s[r]=g<<16|g>>>16,f[r]=g<<8|g>>>24,h[r]=g;g=16843009*_^65537*v^257*y^16843008*r;d[o]=g<<24|g>>>8,p[o]=g<<16|g>>>16,u[o]=g<<8|g>>>24,l[o]=g,r?(r=y^e[e[e[_^y]]],i^=e[e[i]]):r=i=1}})();var y=[0,1,2,4,8,16,32,64,128,27,54],v=o.AES=i.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,i=this._nRounds=r+6,o=4*(i+1),c=this._keySchedule=[],a=0;a<o;a++)a<r?c[a]=t[a]:(h=c[a-1],a%r?r>6&&a%r==4&&(h=n[h>>>24]<<24|n[h>>>16&255]<<16|n[h>>>8&255]<<8|n[255&h]):(h=h<<8|h>>>24,h=n[h>>>24]<<24|n[h>>>16&255]<<16|n[h>>>8&255]<<8|n[255&h],h^=y[a/r|0]<<24),c[a]=c[a-r]^h);for(var s=this._invKeySchedule=[],f=0;f<o;f++){a=o-f;if(f%4)var h=c[a];else h=c[a-4];s[f]=f<4||a<=4?h:d[n[h>>>24]]^p[n[h>>>16&255]]^u[n[h>>>8&255]]^l[n[255&h]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,a,s,f,h,n)},decryptBlock:function(e,t){var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,d,p,u,l,c);r=e[t+1];e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,i,o,n,c,a){for(var s=this._nRounds,f=e[t]^r[0],h=e[t+1]^r[1],d=e[t+2]^r[2],p=e[t+3]^r[3],u=4,l=1;l<s;l++){var y=i[f>>>24]^o[h>>>16&255]^n[d>>>8&255]^c[255&p]^r[u++],v=i[h>>>24]^o[d>>>16&255]^n[p>>>8&255]^c[255&f]^r[u++],_=i[d>>>24]^o[p>>>16&255]^n[f>>>8&255]^c[255&h]^r[u++],g=i[p>>>24]^o[f>>>16&255]^n[h>>>8&255]^c[255&d]^r[u++];f=y,h=v,d=_,p=g}y=(a[f>>>24]<<24|a[h>>>16&255]<<16|a[d>>>8&255]<<8|a[255&p])^r[u++],v=(a[h>>>24]<<24|a[d>>>16&255]<<16|a[p>>>8&255]<<8|a[255&f])^r[u++],_=(a[d>>>24]<<24|a[p>>>16&255]<<16|a[f>>>8&255]<<8|a[255&h])^r[u++],g=(a[p>>>24]<<24|a[f>>>16&255]<<16|a[h>>>8&255]<<8|a[255&d])^r[u++];e[t]=y,e[t+1]=v,e[t+2]=_,e[t+3]=g},keySize:8});t.AES=i._createHelper(v)}(),e.AES},"object"==typeof r?t.exports=r=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5,"./enc-base64":6,"./evpkdf":9,"./md5":14}],4:[function(e,t,r){var i,o;i=this,o=function(e){e.lib.Cipher||function(t){var r=e,i=r.lib,o=i.Base,n=i.WordArray,c=i.BufferedBlockAlgorithm,a=r.enc,s=(a.Utf8,a.Base64),f=r.algo,h=f.EvpKDF,d=i.Cipher=c.extend({cfg:o.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){c.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?w:b}return function(t){return{encrypt:function(r,i,o){return e(i).encrypt(t,r,i,o)},decrypt:function(r,i,o){return e(i).decrypt(t,r,i,o)}}}}()}),p=(i.StreamCipher=d.extend({_doFinalize:function(){var e=this._process(!0);return e},blockSize:1}),r.mode={}),u=i.BlockCipherMode=o.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),l=p.CBC=function(){function e(e,r,i){var o,n=this._iv;n?(o=n,this._iv=t):o=this._prevBlock;for(var c=0;c<i;c++)e[r+c]^=o[c]}var r=u.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var i=this._cipher,o=i.blockSize;e.call(this,t,r,o),i.encryptBlock(t,r),this._prevBlock=t.slice(r,r+o)}}),r.Decryptor=r.extend({processBlock:function(t,r){var i=this._cipher,o=i.blockSize,n=t.slice(r,r+o);i.decryptBlock(t,r),e.call(this,t,r,o),this._prevBlock=n}}),r}(),y=r.pad={},v=y.Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,o=i<<24|i<<16|i<<8|i,c=[],a=0;a<i;a+=4)c.push(o);var s=n.create(c,i);e.concat(s)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},_=(i.BlockCipher=d.extend({cfg:d.cfg.extend({mode:l,padding:v}),reset:function(){var e;d.reset.call(this);var t=this.cfg,r=t.iv,i=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=i.createEncryptor:(e=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,r&&r.words):(this._mode=e.call(i,this,r&&r.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4}),i.CipherParams=o.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),g=r.format={},m=g.OpenSSL={stringify:function(e){var t,r=e.ciphertext,i=e.salt;return t=i?n.create([1398893684,1701076831]).concat(i).concat(r):r,t.toString(s)},parse:function(e){var t,r=s.parse(e),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(t=n.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),_.create({ciphertext:r,salt:t})}},b=i.SerializableCipher=o.extend({cfg:o.extend({format:m}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var o=e.createEncryptor(r,i),n=o.finalize(t),c=o.cfg;return _.create({ciphertext:n,key:r,iv:c.iv,algorithm:e,mode:c.mode,padding:c.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var o=e.createDecryptor(r,i).finalize(t.ciphertext);return o},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),B=r.kdf={},k=B.OpenSSL={execute:function(e,t,r,i){i||(i=n.random(8));var o=h.create({keySize:t+r}).compute(e,i),c=n.create(o.words.slice(t),4*r);return o.sigBytes=4*t,_.create({key:o,iv:c,salt:i})}},w=i.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:k}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var o=i.kdf.execute(r,e.keySize,e.ivSize);i.iv=o.iv;var n=b.encrypt.call(this,e,t,o.key,i);return n.mixIn(o),n},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var o=i.kdf.execute(r,e.keySize,e.ivSize,t.salt);i.iv=o.iv;var n=b.decrypt.call(this,e,t,o.key,i);return n}})}()},"object"==typeof r?t.exports=r=o(e("./core"),e("./evpkdf")):"function"==typeof define&&define.amd?define(["./core","./evpkdf"],o):o(i.CryptoJS)},{"./core":5,"./evpkdf":9}],5:[function(e,t,r){(function(i){(function(){var o,n;o=this,n=function(){var t=t||function(t,r){var o;if("undefined"!=typeof window&&window.crypto&&(o=window.crypto),"undefined"!=typeof self&&self.crypto&&(o=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(o=globalThis.crypto),!o&&"undefined"!=typeof window&&window.msCrypto&&(o=window.msCrypto),!o&&void 0!==i&&i.crypto&&(o=i.crypto),!o&&"function"==typeof e)try{o=e("crypto")}catch(e){}var n=function(){if(o){if("function"==typeof o.getRandomValues)try{return o.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof o.randomBytes)try{return o.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},c=Object.create||function(){function e(){}return function(t){var r;return e.prototype=t,r=new e,e.prototype=null,r}}(),a={},s=a.lib={},f=s.Base={extend:function(e){var t=c(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},h=s.WordArray=f.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=t!=r?t:4*e.length},toString:function(e){return(e||p).stringify(this)},concat:function(e){var t=this.words,r=e.words,i=this.sigBytes,o=e.sigBytes;if(this.clamp(),i%4)for(var n=0;n<o;n++){var c=r[n>>>2]>>>24-n%4*8&255;t[i+n>>>2]|=c<<24-(i+n)%4*8}else for(var a=0;a<o;a+=4)t[i+a>>>2]=r[a>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var e=f.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],r=0;r<e;r+=4)t.push(n());return new h.init(t,e)}}),d=a.enc={},p=d.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],o=0;o<r;o++){var n=t[o>>>2]>>>24-o%4*8&255;i.push((n>>>4).toString(16)),i.push((15&n).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i+=2)r[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new h.init(r,t/2)}},u=d.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],o=0;o<r;o++){var n=t[o>>>2]>>>24-o%4*8&255;i.push(String.fromCharCode(n))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i++)r[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new h.init(r,t)}},l=d.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},y=s.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var r,i=this._data,o=i.words,n=i.sigBytes,c=this.blockSize,a=4*c,s=n/a;s=e?t.ceil(s):t.max((0|s)-this._minBufferSize,0);var f=s*c,d=t.min(4*f,n);if(f){for(var p=0;p<f;p+=c)this._doProcessBlock(o,p);r=o.splice(0,f),i.sigBytes-=d}return new h.init(r,d)},clone:function(){var e=f.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),v=(s.Hasher=y.extend({cfg:f.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){y.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new v.HMAC.init(e,r).finalize(t)}}}),a.algo={});return a}(Math);return t},"object"==typeof r?t.exports=r=n():"function"==typeof define&&define.amd?define([],n):o.CryptoJS=n()}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{crypto:1}],6:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(e,t,r){for(var i=[],n=0,c=0;c<t;c++)if(c%4){var a=r[e.charCodeAt(c-1)]<<c%4*2,s=r[e.charCodeAt(c)]>>>6-c%4*2,f=a|s;i[n>>>2]|=f<<24-n%4*8,n++}return o.create(i,n)}var r=e,i=r.lib,o=i.WordArray,n=r.enc;n.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,i=this._map;e.clamp();for(var o=[],n=0;n<r;n+=3)for(var c=t[n>>>2]>>>24-n%4*8&255,a=t[n+1>>>2]>>>24-(n+1)%4*8&255,s=t[n+2>>>2]>>>24-(n+2)%4*8&255,f=c<<16|a<<8|s,h=0;h<4&&n+.75*h<r;h++)o.push(i.charAt(f>>>6*(3-h)&63));var d=i.charAt(64);if(d)for(;o.length%4;)o.push(d);return o.join("")},parse:function(e){var r=e.length,i=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var n=0;n<i.length;n++)o[i.charCodeAt(n)]=n}var c=i.charAt(64);if(c){var a=e.indexOf(c);-1!==a&&(r=a)}return t(e,r,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],7:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(e,t,r){for(var i=[],n=0,c=0;c<t;c++)if(c%4){var a=r[e.charCodeAt(c-1)]<<c%4*2,s=r[e.charCodeAt(c)]>>>6-c%4*2,f=a|s;i[n>>>2]|=f<<24-n%4*8,n++}return o.create(i,n)}var r=e,i=r.lib,o=i.WordArray,n=r.enc;n.Base64url={stringify:function(e,t=!0){var r=e.words,i=e.sigBytes,o=t?this._safe_map:this._map;e.clamp();for(var n=[],c=0;c<i;c+=3)for(var a=r[c>>>2]>>>24-c%4*8&255,s=r[c+1>>>2]>>>24-(c+1)%4*8&255,f=r[c+2>>>2]>>>24-(c+2)%4*8&255,h=a<<16|s<<8|f,d=0;d<4&&c+.75*d<i;d++)n.push(o.charAt(h>>>6*(3-d)&63));var p=o.charAt(64);if(p)for(;n.length%4;)n.push(p);return n.join("")},parse:function(e,r=!0){var i=e.length,o=r?this._safe_map:this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var c=0;c<o.length;c++)n[o.charCodeAt(c)]=c}var a=o.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(i=s)}return t(e,i,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"}}(),e.enc.Base64url},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],8:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(e){return e<<8&4278255360|e>>>8&16711935}var r=e,i=r.lib,o=i.WordArray,n=r.enc;n.Utf16=n.Utf16BE={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],o=0;o<r;o+=2){var n=t[o>>>2]>>>16-o%4*8&65535;i.push(String.fromCharCode(n))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i++)r[i>>>1]|=e.charCodeAt(i)<<16-i%2*16;return o.create(r,2*t)}};n.Utf16LE={stringify:function(e){for(var r=e.words,i=e.sigBytes,o=[],n=0;n<i;n+=2){var c=t(r[n>>>2]>>>16-n%4*8&65535);o.push(String.fromCharCode(c))}return o.join("")},parse:function(e){for(var r=e.length,i=[],n=0;n<r;n++)i[n>>>1]|=t(e.charCodeAt(n)<<16-n%2*16);return o.create(i,2*r)}}}(),e.enc.Utf16},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],9:[function(e,t,r){var i,o;i=this,o=function(e){var t,r,i,o,n,c,a;return t=e,r=t.lib,i=r.Base,o=r.WordArray,n=t.algo,c=n.MD5,a=n.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:c,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r,i=this.cfg,n=i.hasher.create(),c=o.create(),a=c.words,s=i.keySize,f=i.iterations;a.length<s;){r&&n.update(r),r=n.update(e).finalize(t),n.reset();for(var h=1;h<f;h++)r=n.finalize(r),n.reset();c.concat(r)}return c.sigBytes=4*s,c}}),t.EvpKDF=function(e,t,r){return a.create(r).compute(e,t)},e.EvpKDF},"object"==typeof r?t.exports=r=o(e("./core"),e("./sha1"),e("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],o):o(i.CryptoJS)},{"./core":5,"./hmac":11,"./sha1":30}],10:[function(e,t,r){var i,o;i=this,o=function(e){var t,r,i,o,n,c;return t=e,r=t.lib,i=r.CipherParams,o=t.enc,n=o.Hex,c=t.format,c.Hex={stringify:function(e){return e.ciphertext.toString(n)},parse:function(e){var t=n.parse(e);return i.create({ciphertext:t})}},e.format.Hex},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],11:[function(e,t,r){var i,o;i=this,o=function(e){var t,r,i,o,n,c;t=e,r=t.lib,i=r.Base,o=t.enc,n=o.Utf8,c=t.algo,c.HMAC=i.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=n.parse(t));var r=e.blockSize,i=4*r;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var o=this._oKey=t.clone(),c=this._iKey=t.clone(),a=o.words,s=c.words,f=0;f<r;f++)a[f]^=1549556828,s[f]^=909522486;o.sigBytes=c.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,r=t.finalize(e);t.reset();var i=t.finalize(this._oKey.clone().concat(r));return i}})},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],12:[function(e,t,r){var i,o;i=this,o=function(e){return e},"object"==typeof r?t.exports=r=o(e("./core"),e("./x64-core"),e("./lib-typedarrays"),e("./enc-utf16"),e("./enc-base64"),e("./enc-base64url"),e("./md5"),e("./sha1"),e("./sha256"),e("./sha224"),e("./sha512"),e("./sha384"),e("./sha3"),e("./ripemd160"),e("./hmac"),e("./pbkdf2"),e("./evpkdf"),e("./cipher-core"),e("./mode-cfb"),e("./mode-ctr"),e("./mode-ctr-gladman"),e("./mode-ofb"),e("./mode-ecb"),e("./pad-ansix923"),e("./pad-iso10126"),e("./pad-iso97971"),e("./pad-zeropadding"),e("./pad-nopadding"),e("./format-hex"),e("./aes"),e("./tripledes"),e("./rc4"),e("./rabbit"),e("./rabbit-legacy")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./lib-typedarrays","./enc-utf16","./enc-base64","./enc-base64url","./md5","./sha1","./sha256","./sha224","./sha512","./sha384","./sha3","./ripemd160","./hmac","./pbkdf2","./evpkdf","./cipher-core","./mode-cfb","./mode-ctr","./mode-ctr-gladman","./mode-ofb","./mode-ecb","./pad-ansix923","./pad-iso10126","./pad-iso97971","./pad-zeropadding","./pad-nopadding","./format-hex","./aes","./tripledes","./rc4","./rabbit","./rabbit-legacy"],o):i.CryptoJS=o(i.CryptoJS)},{"./aes":3,"./cipher-core":4,"./core":5,"./enc-base64":6,"./enc-base64url":7,"./enc-utf16":8,"./evpkdf":9,"./format-hex":10,"./hmac":11,"./lib-typedarrays":13,"./md5":14,"./mode-cfb":15,"./mode-ctr":17,"./mode-ctr-gladman":16,"./mode-ecb":18,"./mode-ofb":19,"./pad-ansix923":20,"./pad-iso10126":21,"./pad-iso97971":22,"./pad-nopadding":23,"./pad-zeropadding":24,"./pbkdf2":25,"./rabbit":27,"./rabbit-legacy":26,"./rc4":28,"./ripemd160":29,"./sha1":30,"./sha224":31,"./sha256":32,"./sha3":33,"./sha384":34,"./sha512":35,"./tripledes":36,"./x64-core":37}],13:[function(e,t,r){var i,o;i=this,o=function(e){return function(){if("function"==typeof ArrayBuffer){var t=e,r=t.lib,i=r.WordArray,o=i.init,n=i.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,r=[],i=0;i<t;i++)r[i>>>2]|=e[i]<<24-i%4*8;o.call(this,r,t)}else o.apply(this,arguments)};n.prototype=i}}(),e.lib.WordArray},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],14:[function(e,t,r){var i,o;i=this,o=function(e){return function(t){function r(e,t,r,i,o,n,c){var a=e+(t&r|~t&i)+o+c;return(a<<n|a>>>32-n)+t}function i(e,t,r,i,o,n,c){var a=e+(t&i|r&~i)+o+c;return(a<<n|a>>>32-n)+t}function o(e,t,r,i,o,n,c){var a=e+(t^r^i)+o+c;return(a<<n|a>>>32-n)+t}function n(e,t,r,i,o,n,c){var a=e+(r^(t|~i))+o+c;return(a<<n|a>>>32-n)+t}var c=e,a=c.lib,s=a.WordArray,f=a.Hasher,h=c.algo,d=[];(function(){for(var e=0;e<64;e++)d[e]=4294967296*t.abs(t.sin(e+1))|0})();var p=h.MD5=f.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var c=0;c<16;c++){var a=t+c,s=e[a];e[a]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}var f=this._hash.words,h=e[t+0],p=e[t+1],u=e[t+2],l=e[t+3],y=e[t+4],v=e[t+5],_=e[t+6],g=e[t+7],m=e[t+8],b=e[t+9],B=e[t+10],k=e[t+11],w=e[t+12],x=e[t+13],S=e[t+14],C=e[t+15],A=f[0],H=f[1],z=f[2],D=f[3];A=r(A,H,z,D,h,7,d[0]),D=r(D,A,H,z,p,12,d[1]),z=r(z,D,A,H,u,17,d[2]),H=r(H,z,D,A,l,22,d[3]),A=r(A,H,z,D,y,7,d[4]),D=r(D,A,H,z,v,12,d[5]),z=r(z,D,A,H,_,17,d[6]),H=r(H,z,D,A,g,22,d[7]),A=r(A,H,z,D,m,7,d[8]),D=r(D,A,H,z,b,12,d[9]),z=r(z,D,A,H,B,17,d[10]),H=r(H,z,D,A,k,22,d[11]),A=r(A,H,z,D,w,7,d[12]),D=r(D,A,H,z,x,12,d[13]),z=r(z,D,A,H,S,17,d[14]),H=r(H,z,D,A,C,22,d[15]),A=i(A,H,z,D,p,5,d[16]),D=i(D,A,H,z,_,9,d[17]),z=i(z,D,A,H,k,14,d[18]),H=i(H,z,D,A,h,20,d[19]),A=i(A,H,z,D,v,5,d[20]),D=i(D,A,H,z,B,9,d[21]),z=i(z,D,A,H,C,14,d[22]),H=i(H,z,D,A,y,20,d[23]),A=i(A,H,z,D,b,5,d[24]),D=i(D,A,H,z,S,9,d[25]),z=i(z,D,A,H,l,14,d[26]),H=i(H,z,D,A,m,20,d[27]),A=i(A,H,z,D,x,5,d[28]),D=i(D,A,H,z,u,9,d[29]),z=i(z,D,A,H,g,14,d[30]),H=i(H,z,D,A,w,20,d[31]),A=o(A,H,z,D,v,4,d[32]),D=o(D,A,H,z,m,11,d[33]),z=o(z,D,A,H,k,16,d[34]),H=o(H,z,D,A,S,23,d[35]),A=o(A,H,z,D,p,4,d[36]),D=o(D,A,H,z,y,11,d[37]),z=o(z,D,A,H,g,16,d[38]),H=o(H,z,D,A,B,23,d[39]),A=o(A,H,z,D,x,4,d[40]),D=o(D,A,H,z,h,11,d[41]),z=o(z,D,A,H,l,16,d[42]),H=o(H,z,D,A,_,23,d[43]),A=o(A,H,z,D,b,4,d[44]),D=o(D,A,H,z,w,11,d[45]),z=o(z,D,A,H,C,16,d[46]),H=o(H,z,D,A,u,23,d[47]),A=n(A,H,z,D,h,6,d[48]),D=n(D,A,H,z,g,10,d[49]),z=n(z,D,A,H,S,15,d[50]),H=n(H,z,D,A,v,21,d[51]),A=n(A,H,z,D,w,6,d[52]),D=n(D,A,H,z,l,10,d[53]),z=n(z,D,A,H,B,15,d[54]),H=n(H,z,D,A,p,21,d[55]),A=n(A,H,z,D,m,6,d[56]),D=n(D,A,H,z,C,10,d[57]),z=n(z,D,A,H,_,15,d[58]),H=n(H,z,D,A,x,21,d[59]),A=n(A,H,z,D,y,6,d[60]),D=n(D,A,H,z,k,10,d[61]),z=n(z,D,A,H,u,15,d[62]),H=n(H,z,D,A,b,21,d[63]),f[0]=f[0]+A|0,f[1]=f[1]+H|0,f[2]=f[2]+z|0,f[3]=f[3]+D|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;r[o>>>5]|=128<<24-o%32;var n=t.floor(i/4294967296),c=i;r[15+(o+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),r[14+(o+64>>>9<<4)]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),e.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,s=a.words,f=0;f<4;f++){var h=s[f];s[f]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}return a},clone:function(){var e=f.clone.call(this);return e._hash=this._hash.clone(),e}});c.MD5=f._createHelper(p),c.HmacMD5=f._createHmacHelper(p)}(Math),e.MD5},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],15:[function(e,t,r){var i,o;i=this,o=function(e){return e.mode.CFB=function(){function t(e,t,r,i){var o,n=this._iv;n?(o=n.slice(0),this._iv=void 0):o=this._prevBlock,i.encryptBlock(o,0);for(var c=0;c<r;c++)e[t+c]^=o[c]}var r=e.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(e,r){var i=this._cipher,o=i.blockSize;t.call(this,e,r,o,i),this._prevBlock=e.slice(r,r+o)}}),r.Decryptor=r.extend({processBlock:function(e,r){var i=this._cipher,o=i.blockSize,n=e.slice(r,r+o);t.call(this,e,r,o,i),this._prevBlock=n}}),r}(),e.mode.CFB},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],16:[function(e,t,r){var i,o;i=this,o=function(e){return e.mode.CTRGladman=function(){function t(e){if(255==(e>>24&255)){var t=e>>16&255,r=e>>8&255,i=255&e;255===t?(t=0,255===r?(r=0,255===i?i=0:++i):++r):++t,e=0,e+=t<<16,e+=r<<8,e+=i}else e+=1<<24;return e}function r(e){return 0===(e[0]=t(e[0]))&&(e[1]=t(e[1])),e}var i=e.lib.BlockCipherMode.extend(),o=i.Encryptor=i.extend({processBlock:function(e,t){var i=this._cipher,o=i.blockSize,n=this._iv,c=this._counter;n&&(c=this._counter=n.slice(0),this._iv=void 0),r(c);var a=c.slice(0);i.encryptBlock(a,0);for(var s=0;s<o;s++)e[t+s]^=a[s]}});return i.Decryptor=o,i}(),e.mode.CTRGladman},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],17:[function(e,t,r){var i,o;i=this,o=function(e){var t,r;return e.mode.CTR=(t=e.lib.BlockCipherMode.extend(),r=t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,o=this._iv,n=this._counter;o&&(n=this._counter=o.slice(0),this._iv=void 0);var c=n.slice(0);r.encryptBlock(c,0),n[i-1]=n[i-1]+1|0;for(var a=0;a<i;a++)e[t+a]^=c[a]}}),t.Decryptor=r,t),e.mode.CTR},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],18:[function(e,t,r){var i,o;i=this,o=function(e){var t;return e.mode.ECB=(t=e.lib.BlockCipherMode.extend(),t.Encryptor=t.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),t.Decryptor=t.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),t),e.mode.ECB},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],19:[function(e,t,r){var i,o;i=this,o=function(e){var t,r;return e.mode.OFB=(t=e.lib.BlockCipherMode.extend(),r=t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,o=this._iv,n=this._keystream;o&&(n=this._keystream=o.slice(0),this._iv=void 0),r.encryptBlock(n,0);for(var c=0;c<i;c++)e[t+c]^=n[c]}}),t.Decryptor=r,t),e.mode.OFB},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],20:[function(e,t,r){var i,o;i=this,o=function(e){return e.pad.AnsiX923={pad:function(e,t){var r=e.sigBytes,i=4*t,o=i-r%i,n=r+o-1;e.clamp(),e.words[n>>>2]|=o<<24-n%4*8,e.sigBytes+=o},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},e.pad.Ansix923},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],21:[function(e,t,r){var i,o;i=this,o=function(e){return e.pad.Iso10126={pad:function(t,r){var i=4*r,o=i-t.sigBytes%i;t.concat(e.lib.WordArray.random(o-1)).concat(e.lib.WordArray.create([o<<24],1))},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},e.pad.Iso10126},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],22:[function(e,t,r){var i,o;i=this,o=function(e){return e.pad.Iso97971={pad:function(t,r){t.concat(e.lib.WordArray.create([2147483648],1)),e.pad.ZeroPadding.pad(t,r)},unpad:function(t){e.pad.ZeroPadding.unpad(t),t.sigBytes--}},e.pad.Iso97971},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],23:[function(e,t,r){var i,o;i=this,o=function(e){return e.pad.NoPadding={pad:function(){},unpad:function(){}},e.pad.NoPadding},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],24:[function(e,t,r){var i,o;i=this,o=function(e){return e.pad.ZeroPadding={pad:function(e,t){var r=4*t;e.clamp(),e.sigBytes+=r-(e.sigBytes%r||r)},unpad:function(e){var t=e.words,r=e.sigBytes-1;for(r=e.sigBytes-1;r>=0;r--)if(t[r>>>2]>>>24-r%4*8&255){e.sigBytes=r+1;break}}},e.pad.ZeroPadding},"object"==typeof r?t.exports=r=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5}],25:[function(e,t,r){var i,o;i=this,o=function(e){var t,r,i,o,n,c,a,s;return t=e,r=t.lib,i=r.Base,o=r.WordArray,n=t.algo,c=n.SHA1,a=n.HMAC,s=n.PBKDF2=i.extend({cfg:i.extend({keySize:4,hasher:c,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,i=a.create(r.hasher,e),n=o.create(),c=o.create([1]),s=n.words,f=c.words,h=r.keySize,d=r.iterations;s.length<h;){var p=i.update(t).finalize(c);i.reset();for(var u=p.words,l=u.length,y=p,v=1;v<d;v++){y=i.finalize(y),i.reset();for(var _=y.words,g=0;g<l;g++)u[g]^=_[g]}n.concat(p),f[0]++}return n.sigBytes=4*h,n}}),t.PBKDF2=function(e,t,r){return s.create(r).compute(e,t)},e.PBKDF2},"object"==typeof r?t.exports=r=o(e("./core"),e("./sha1"),e("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],o):o(i.CryptoJS)},{"./core":5,"./hmac":11,"./sha1":30}],26:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(){for(var e=this._X,t=this._C,r=0;r<8;r++)a[r]=t[r];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<a[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<a[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<a[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<a[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<a[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<a[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<a[6]>>>0?1:0)|0,this._b=t[7]>>>0<a[7]>>>0?1:0;for(r=0;r<8;r++){var i=e[r]+t[r],o=65535&i,n=i>>>16,c=((o*o>>>17)+o*n>>>15)+n*n,f=((4294901760&i)*i|0)+((65535&i)*i|0);s[r]=c^f}e[0]=s[0]+(s[7]<<16|s[7]>>>16)+(s[6]<<16|s[6]>>>16)|0,e[1]=s[1]+(s[0]<<8|s[0]>>>24)+s[7]|0,e[2]=s[2]+(s[1]<<16|s[1]>>>16)+(s[0]<<16|s[0]>>>16)|0,e[3]=s[3]+(s[2]<<8|s[2]>>>24)+s[1]|0,e[4]=s[4]+(s[3]<<16|s[3]>>>16)+(s[2]<<16|s[2]>>>16)|0,e[5]=s[5]+(s[4]<<8|s[4]>>>24)+s[3]|0,e[6]=s[6]+(s[5]<<16|s[5]>>>16)+(s[4]<<16|s[4]>>>16)|0,e[7]=s[7]+(s[6]<<8|s[6]>>>24)+s[5]|0}var r=e,i=r.lib,o=i.StreamCipher,n=r.algo,c=[],a=[],s=[],f=n.RabbitLegacy=o.extend({_doReset:function(){var e=this._key.words,r=this.cfg.iv,i=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],o=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(var n=0;n<4;n++)t.call(this);for(n=0;n<8;n++)o[n]^=i[n+4&7];if(r){var c=r.words,a=c[0],s=c[1],f=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),h=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),d=f>>>16|4294901760&h,p=h<<16|65535&f;o[0]^=f,o[1]^=d,o[2]^=h,o[3]^=p,o[4]^=f,o[5]^=d,o[6]^=h,o[7]^=p;for(n=0;n<4;n++)t.call(this)}},_doProcessBlock:function(e,r){var i=this._X;t.call(this),c[0]=i[0]^i[5]>>>16^i[3]<<16,c[1]=i[2]^i[7]>>>16^i[5]<<16,c[2]=i[4]^i[1]>>>16^i[7]<<16,c[3]=i[6]^i[3]>>>16^i[1]<<16;for(var o=0;o<4;o++)c[o]=16711935&(c[o]<<8|c[o]>>>24)|4278255360&(c[o]<<24|c[o]>>>8),e[r+o]^=c[o]},blockSize:4,ivSize:2});r.RabbitLegacy=o._createHelper(f)}(),e.RabbitLegacy},"object"==typeof r?t.exports=r=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5,"./enc-base64":6,"./evpkdf":9,"./md5":14}],27:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(){for(var e=this._X,t=this._C,r=0;r<8;r++)a[r]=t[r];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<a[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<a[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<a[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<a[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<a[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<a[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<a[6]>>>0?1:0)|0,this._b=t[7]>>>0<a[7]>>>0?1:0;for(r=0;r<8;r++){var i=e[r]+t[r],o=65535&i,n=i>>>16,c=((o*o>>>17)+o*n>>>15)+n*n,f=((4294901760&i)*i|0)+((65535&i)*i|0);s[r]=c^f}e[0]=s[0]+(s[7]<<16|s[7]>>>16)+(s[6]<<16|s[6]>>>16)|0,e[1]=s[1]+(s[0]<<8|s[0]>>>24)+s[7]|0,e[2]=s[2]+(s[1]<<16|s[1]>>>16)+(s[0]<<16|s[0]>>>16)|0,e[3]=s[3]+(s[2]<<8|s[2]>>>24)+s[1]|0,e[4]=s[4]+(s[3]<<16|s[3]>>>16)+(s[2]<<16|s[2]>>>16)|0,
        e[5]=s[5]+(s[4]<<8|s[4]>>>24)+s[3]|0,e[6]=s[6]+(s[5]<<16|s[5]>>>16)+(s[4]<<16|s[4]>>>16)|0,e[7]=s[7]+(s[6]<<8|s[6]>>>24)+s[5]|0}var r=e,i=r.lib,o=i.StreamCipher,n=r.algo,c=[],a=[],s=[],f=n.Rabbit=o.extend({_doReset:function(){for(var e=this._key.words,r=this.cfg.iv,i=0;i<4;i++)e[i]=16711935&(e[i]<<8|e[i]>>>24)|4278255360&(e[i]<<24|e[i]>>>8);var o=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],n=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(i=0;i<4;i++)t.call(this);for(i=0;i<8;i++)n[i]^=o[i+4&7];if(r){var c=r.words,a=c[0],s=c[1],f=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),h=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),d=f>>>16|4294901760&h,p=h<<16|65535&f;n[0]^=f,n[1]^=d,n[2]^=h,n[3]^=p,n[4]^=f,n[5]^=d,n[6]^=h,n[7]^=p;for(i=0;i<4;i++)t.call(this)}},_doProcessBlock:function(e,r){var i=this._X;t.call(this),c[0]=i[0]^i[5]>>>16^i[3]<<16,c[1]=i[2]^i[7]>>>16^i[5]<<16,c[2]=i[4]^i[1]>>>16^i[7]<<16,c[3]=i[6]^i[3]>>>16^i[1]<<16;for(var o=0;o<4;o++)c[o]=16711935&(c[o]<<8|c[o]>>>24)|4278255360&(c[o]<<24|c[o]>>>8),e[r+o]^=c[o]},blockSize:4,ivSize:2});r.Rabbit=o._createHelper(f)}(),e.Rabbit},"object"==typeof r?t.exports=r=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5,"./enc-base64":6,"./evpkdf":9,"./md5":14}],28:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(){for(var e=this._S,t=this._i,r=this._j,i=0,o=0;o<4;o++){t=(t+1)%256,r=(r+e[t])%256;var n=e[t];e[t]=e[r],e[r]=n,i|=e[(e[t]+e[r])%256]<<24-8*o}return this._i=t,this._j=r,i}var r=e,i=r.lib,o=i.StreamCipher,n=r.algo,c=n.RC4=o.extend({_doReset:function(){for(var e=this._key,t=e.words,r=e.sigBytes,i=this._S=[],o=0;o<256;o++)i[o]=o;o=0;for(var n=0;o<256;o++){var c=o%r,a=t[c>>>2]>>>24-c%4*8&255;n=(n+i[o]+a)%256;var s=i[o];i[o]=i[n],i[n]=s}this._i=this._j=0},_doProcessBlock:function(e,r){e[r]^=t.call(this)},keySize:8,ivSize:0});r.RC4=o._createHelper(c);var a=n.RC4Drop=c.extend({cfg:c.cfg.extend({drop:192}),_doReset:function(){c._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)t.call(this)}});r.RC4Drop=o._createHelper(a)}(),e.RC4},"object"==typeof r?t.exports=r=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5,"./enc-base64":6,"./evpkdf":9,"./md5":14}],29:[function(e,t,r){var i,o;i=this,o=function(e){return function(t){function r(e,t,r){return e^t^r}function i(e,t,r){return e&t|~e&r}function o(e,t,r){return(e|~t)^r}function n(e,t,r){return e&r|t&~r}function c(e,t,r){return e^(t|~r)}function a(e,t){return e<<t|e>>>32-t}var s=e,f=s.lib,h=f.WordArray,d=f.Hasher,p=s.algo,u=h.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),l=h.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),y=h.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),v=h.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),_=h.create([0,1518500249,1859775393,2400959708,2840853838]),g=h.create([1352829926,1548603684,1836072691,2053994217,0]),m=p.RIPEMD160=d.extend({_doReset:function(){this._hash=h.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var s=0;s<16;s++){var f=t+s,h=e[f];e[f]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}var d,p,m,b,B,k,w,x,S,C,A,H=this._hash.words,z=_.words,D=g.words,E=u.words,R=l.words,j=y.words,M=v.words;k=d=H[0],w=p=H[1],x=m=H[2],S=b=H[3],C=B=H[4];for(s=0;s<80;s+=1)A=d+e[t+E[s]]|0,A+=s<16?r(p,m,b)+z[0]:s<32?i(p,m,b)+z[1]:s<48?o(p,m,b)+z[2]:s<64?n(p,m,b)+z[3]:c(p,m,b)+z[4],A|=0,A=a(A,j[s]),A=A+B|0,d=B,B=b,b=a(m,10),m=p,p=A,A=k+e[t+R[s]]|0,A+=s<16?c(w,x,S)+D[0]:s<32?n(w,x,S)+D[1]:s<48?o(w,x,S)+D[2]:s<64?i(w,x,S)+D[3]:r(w,x,S)+D[4],A|=0,A=a(A,M[s]),A=A+C|0,k=C,C=S,S=a(x,10),x=w,w=A;A=H[1]+m+S|0,H[1]=H[2]+b+C|0,H[2]=H[3]+B+k|0,H[3]=H[4]+d+w|0,H[4]=H[0]+p+x|0,H[0]=A},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(t.length+1),this._process();for(var o=this._hash,n=o.words,c=0;c<5;c++){var a=n[c];n[c]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}return o},clone:function(){var e=d.clone.call(this);return e._hash=this._hash.clone(),e}});s.RIPEMD160=d._createHelper(m),s.HmacRIPEMD160=d._createHmacHelper(m)}(Math),e.RIPEMD160},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],30:[function(e,t,r){var i,o;i=this,o=function(e){var t,r,i,o,n,c,a;return t=e,r=t.lib,i=r.WordArray,o=r.Hasher,n=t.algo,c=[],a=n.SHA1=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],o=r[1],n=r[2],a=r[3],s=r[4],f=0;f<80;f++){if(f<16)c[f]=0|e[t+f];else{var h=c[f-3]^c[f-8]^c[f-14]^c[f-16];c[f]=h<<1|h>>>31}var d=(i<<5|i>>>27)+s+c[f];d+=f<20?1518500249+(o&n|~o&a):f<40?1859775393+(o^n^a):f<60?(o&n|o&a|n&a)-1894007588:(o^n^a)-899497514,s=a,a=n,n=o<<30|o>>>2,o=i,i=d}r[0]=r[0]+i|0,r[1]=r[1]+o|0,r[2]=r[2]+n|0,r[3]=r[3]+a|0,r[4]=r[4]+s|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=Math.floor(r/4294967296),t[15+(i+64>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}}),t.SHA1=o._createHelper(a),t.HmacSHA1=o._createHmacHelper(a),e.SHA1},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],31:[function(e,t,r){var i,o;i=this,o=function(e){var t,r,i,o,n,c;return t=e,r=t.lib,i=r.WordArray,o=t.algo,n=o.SHA256,c=o.SHA224=n.extend({_doReset:function(){this._hash=new i.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var e=n._doFinalize.call(this);return e.sigBytes-=4,e}}),t.SHA224=n._createHelper(c),t.HmacSHA224=n._createHmacHelper(c),e.SHA224},"object"==typeof r?t.exports=r=o(e("./core"),e("./sha256")):"function"==typeof define&&define.amd?define(["./core","./sha256"],o):o(i.CryptoJS)},{"./core":5,"./sha256":32}],32:[function(e,t,r){var i,o;i=this,o=function(e){return function(t){var r=e,i=r.lib,o=i.WordArray,n=i.Hasher,c=r.algo,a=[],s=[];(function(){function e(e){for(var r=t.sqrt(e),i=2;i<=r;i++)if(!(e%i))return!1;return!0}function r(e){return 4294967296*(e-(0|e))|0}for(var i=2,o=0;o<64;)e(i)&&(o<8&&(a[o]=r(t.pow(i,.5))),s[o]=r(t.pow(i,1/3)),o++),i++})();var f=[],h=c.SHA256=n.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],o=r[1],n=r[2],c=r[3],a=r[4],h=r[5],d=r[6],p=r[7],u=0;u<64;u++){if(u<16)f[u]=0|e[t+u];else{var l=f[u-15],y=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,v=f[u-2],_=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;f[u]=y+f[u-7]+_+f[u-16]}var g=a&h^~a&d,m=i&o^i&n^o&n,b=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),B=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),k=p+B+g+s[u]+f[u],w=b+m;p=d,d=h,h=a,a=c+k|0,c=n,n=o,o=i,i=k+w|0}r[0]=r[0]+i|0,r[1]=r[1]+o|0,r[2]=r[2]+n|0,r[3]=r[3]+c|0,r[4]=r[4]+a|0,r[5]=r[5]+h|0,r[6]=r[6]+d|0,r[7]=r[7]+p|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;return r[o>>>5]|=128<<24-o%32,r[14+(o+64>>>9<<4)]=t.floor(i/4294967296),r[15+(o+64>>>9<<4)]=i,e.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}});r.SHA256=n._createHelper(h),r.HmacSHA256=n._createHmacHelper(h)}(Math),e.SHA256},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}],33:[function(e,t,r){var i,o;i=this,o=function(e){return function(t){var r=e,i=r.lib,o=i.WordArray,n=i.Hasher,c=r.x64,a=c.Word,s=r.algo,f=[],h=[],d=[];(function(){for(var e=1,t=0,r=0;r<24;r++){f[e+5*t]=(r+1)*(r+2)/2%64;var i=t%5,o=(2*e+3*t)%5;e=i,t=o}for(e=0;e<5;e++)for(t=0;t<5;t++)h[e+5*t]=t+(2*e+3*t)%5*5;for(var n=1,c=0;c<24;c++){for(var s=0,p=0,u=0;u<7;u++){if(1&n){var l=(1<<u)-1;l<32?p^=1<<l:s^=1<<l-32}128&n?n=n<<1^113:n<<=1}d[c]=a.create(s,p)}})();var p=[];(function(){for(var e=0;e<25;e++)p[e]=a.create()})();var u=s.SHA3=n.extend({cfg:n.cfg.extend({outputLength:512}),_doReset:function(){for(var e=this._state=[],t=0;t<25;t++)e[t]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(e,t){for(var r=this._state,i=this.blockSize/2,o=0;o<i;o++){var n=e[t+2*o],c=e[t+2*o+1];n=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),c=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8);var a=r[o];a.high^=c,a.low^=n}for(var s=0;s<24;s++){for(var u=0;u<5;u++){for(var l=0,y=0,v=0;v<5;v++){a=r[u+5*v];l^=a.high,y^=a.low}var _=p[u];_.high=l,_.low=y}for(u=0;u<5;u++){var g=p[(u+4)%5],m=p[(u+1)%5],b=m.high,B=m.low;for(l=g.high^(b<<1|B>>>31),y=g.low^(B<<1|b>>>31),v=0;v<5;v++){a=r[u+5*v];a.high^=l,a.low^=y}}for(var k=1;k<25;k++){a=r[k];var w=a.high,x=a.low,S=f[k];S<32?(l=w<<S|x>>>32-S,y=x<<S|w>>>32-S):(l=x<<S-32|w>>>64-S,y=w<<S-32|x>>>64-S);var C=p[h[k]];C.high=l,C.low=y}var A=p[0],H=r[0];A.high=H.high,A.low=H.low;for(u=0;u<5;u++)for(v=0;v<5;v++){k=u+5*v,a=r[k];var z=p[k],D=p[(u+1)%5+5*v],E=p[(u+2)%5+5*v];a.high=z.high^~D.high&E.high,a.low=z.low^~D.low&E.low}a=r[0];var R=d[s];a.high^=R.high,a.low^=R.low}},_doFinalize:function(){var e=this._data,r=e.words,i=(this._nDataBytes,8*e.sigBytes),n=32*this.blockSize;r[i>>>5]|=1<<24-i%32,r[(t.ceil((i+1)/n)*n>>>5)-1]|=128,e.sigBytes=4*r.length,this._process();for(var c=this._state,a=this.cfg.outputLength/8,s=a/8,f=[],h=0;h<s;h++){var d=c[h],p=d.high,u=d.low;p=16711935&(p<<8|p>>>24)|4278255360&(p<<24|p>>>8),u=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8),f.push(u),f.push(p)}return new o.init(f,a)},clone:function(){for(var e=n.clone.call(this),t=e._state=this._state.slice(0),r=0;r<25;r++)t[r]=t[r].clone();return e}});r.SHA3=n._createHelper(u),r.HmacSHA3=n._createHmacHelper(u)}(Math),e.SHA3},"object"==typeof r?t.exports=r=o(e("./core"),e("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],o):o(i.CryptoJS)},{"./core":5,"./x64-core":37}],34:[function(e,t,r){var i,o;i=this,o=function(e){var t,r,i,o,n,c,a;return t=e,r=t.x64,i=r.Word,o=r.WordArray,n=t.algo,c=n.SHA512,a=n.SHA384=c.extend({_doReset:function(){this._hash=new o.init([new i.init(3418070365,3238371032),new i.init(1654270250,914150663),new i.init(2438529370,812702999),new i.init(355462360,4144912697),new i.init(1731405415,4290775857),new i.init(2394180231,1750603025),new i.init(3675008525,1694076839),new i.init(1203062813,3204075428)])},_doFinalize:function(){var e=c._doFinalize.call(this);return e.sigBytes-=16,e}}),t.SHA384=c._createHelper(a),t.HmacSHA384=c._createHmacHelper(a),e.SHA384},"object"==typeof r?t.exports=r=o(e("./core"),e("./x64-core"),e("./sha512")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./sha512"],o):o(i.CryptoJS)},{"./core":5,"./sha512":35,"./x64-core":37}],35:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(){return c.create.apply(c,arguments)}var r=e,i=r.lib,o=i.Hasher,n=r.x64,c=n.Word,a=n.WordArray,s=r.algo,f=[t(1116352408,3609767458),t(1899447441,602891725),t(3049323471,3964484399),t(3921009573,2173295548),t(961987163,4081628472),t(1508970993,3053834265),t(2453635748,2937671579),t(2870763221,3664609560),t(3624381080,2734883394),t(310598401,1164996542),t(607225278,1323610764),t(1426881987,3590304994),t(1925078388,4068182383),t(2162078206,991336113),t(2614888103,633803317),t(3248222580,3479774868),t(3835390401,2666613458),t(4022224774,944711139),t(264347078,2341262773),t(604807628,2007800933),t(770255983,1495990901),t(1249150122,1856431235),t(1555081692,3175218132),t(1996064986,2198950837),t(2554220882,3999719339),t(2821834349,766784016),t(2952996808,2566594879),t(3210313671,3203337956),t(3336571891,1034457026),t(3584528711,2466948901),t(113926993,3758326383),t(338241895,168717936),t(666307205,1188179964),t(773529912,1546045734),t(1294757372,1522805485),t(1396182291,2643833823),t(1695183700,2343527390),t(1986661051,1014477480),t(2177026350,1206759142),t(2456956037,344077627),t(2730485921,1290863460),t(2820302411,3158454273),t(3259730800,3505952657),t(3345764771,106217008),t(3516065817,3606008344),t(3600352804,1432725776),t(4094571909,1467031594),t(275423344,851169720),t(430227734,3100823752),t(506948616,1363258195),t(659060556,3750685593),t(883997877,3785050280),t(958139571,3318307427),t(1322822218,3812723403),t(1537002063,2003034995),t(1747873779,3602036899),t(1955562222,1575990012),t(2024104815,1125592928),t(2227730452,2716904306),t(2361852424,442776044),t(2428436474,593698344),t(2756734187,3733110249),t(3204031479,2999351573),t(3329325298,3815920427),t(3391569614,3928383900),t(3515267271,566280711),t(3940187606,3454069534),t(4118630271,4000239992),t(116418474,1914138554),t(174292421,2731055270),t(289380356,3203993006),t(460393269,320620315),t(685471733,587496836),t(852142971,1086792851),t(1017036298,365543100),t(1126000580,2618297676),t(1288033470,3409855158),t(1501505948,4234509866),t(1607167915,987167468),t(1816402316,1246189591)],h=[];(function(){for(var e=0;e<80;e++)h[e]=t()})();var d=s.SHA512=o.extend({_doReset:function(){this._hash=new a.init([new c.init(1779033703,4089235720),new c.init(3144134277,2227873595),new c.init(1013904242,4271175723),new c.init(2773480762,1595750129),new c.init(1359893119,2917565137),new c.init(2600822924,725511199),new c.init(528734635,4215389547),new c.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],o=r[1],n=r[2],c=r[3],a=r[4],s=r[5],d=r[6],p=r[7],u=i.high,l=i.low,y=o.high,v=o.low,_=n.high,g=n.low,m=c.high,b=c.low,B=a.high,k=a.low,w=s.high,x=s.low,S=d.high,C=d.low,A=p.high,H=p.low,z=u,D=l,E=y,R=v,j=_,M=g,J=m,F=b,P=B,O=k,W=w,I=x,U=S,K=C,X=A,L=H,T=0;T<80;T++){var N,q,Z=h[T];if(T<16)q=Z.high=0|e[t+2*T],N=Z.low=0|e[t+2*T+1];else{var G=h[T-15],V=G.high,Q=G.low,Y=(V>>>1|Q<<31)^(V>>>8|Q<<24)^V>>>7,$=(Q>>>1|V<<31)^(Q>>>8|V<<24)^(Q>>>7|V<<25),ee=h[T-2],te=ee.high,re=ee.low,ie=(te>>>19|re<<13)^(te<<3|re>>>29)^te>>>6,oe=(re>>>19|te<<13)^(re<<3|te>>>29)^(re>>>6|te<<26),ne=h[T-7],ce=ne.high,ae=ne.low,se=h[T-16],fe=se.high,he=se.low;N=$+ae,q=Y+ce+(N>>>0<$>>>0?1:0),N+=oe,q=q+ie+(N>>>0<oe>>>0?1:0),N+=he,q=q+fe+(N>>>0<he>>>0?1:0),Z.high=q,Z.low=N}var de=P&W^~P&U,pe=O&I^~O&K,ue=z&E^z&j^E&j,le=D&R^D&M^R&M,ye=(z>>>28|D<<4)^(z<<30|D>>>2)^(z<<25|D>>>7),ve=(D>>>28|z<<4)^(D<<30|z>>>2)^(D<<25|z>>>7),_e=(P>>>14|O<<18)^(P>>>18|O<<14)^(P<<23|O>>>9),ge=(O>>>14|P<<18)^(O>>>18|P<<14)^(O<<23|P>>>9),me=f[T],be=me.high,Be=me.low,ke=L+ge,we=X+_e+(ke>>>0<L>>>0?1:0),xe=(ke=ke+pe,we=we+de+(ke>>>0<pe>>>0?1:0),ke=ke+Be,we=we+be+(ke>>>0<Be>>>0?1:0),ke=ke+N,we=we+q+(ke>>>0<N>>>0?1:0),ve+le),Se=ye+ue+(xe>>>0<ve>>>0?1:0);X=U,L=K,U=W,K=I,W=P,I=O,O=F+ke|0,P=J+we+(O>>>0<F>>>0?1:0)|0,J=j,F=M,j=E,M=R,E=z,R=D,D=ke+xe|0,z=we+Se+(D>>>0<ke>>>0?1:0)|0}l=i.low=l+D,i.high=u+z+(l>>>0<D>>>0?1:0),v=o.low=v+R,o.high=y+E+(v>>>0<R>>>0?1:0),g=n.low=g+M,n.high=_+j+(g>>>0<M>>>0?1:0),b=c.low=b+F,c.high=m+J+(b>>>0<F>>>0?1:0),k=a.low=k+O,a.high=B+P+(k>>>0<O>>>0?1:0),x=s.low=x+I,s.high=w+W+(x>>>0<I>>>0?1:0),C=d.low=C+K,d.high=S+U+(C>>>0<K>>>0?1:0),H=p.low=H+L,p.high=A+X+(H>>>0<L>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;t[i>>>5]|=128<<24-i%32,t[30+(i+128>>>10<<5)]=Math.floor(r/4294967296),t[31+(i+128>>>10<<5)]=r,e.sigBytes=4*t.length,this._process();var o=this._hash.toX32();return o},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});r.SHA512=o._createHelper(d),r.HmacSHA512=o._createHmacHelper(d)}(),e.SHA512},"object"==typeof r?t.exports=r=o(e("./core"),e("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],o):o(i.CryptoJS)},{"./core":5,"./x64-core":37}],36:[function(e,t,r){var i,o;i=this,o=function(e){return function(){function t(e,t){var r=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=r,this._lBlock^=r<<e}function r(e,t){var r=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=r,this._rBlock^=r<<e}var i=e,o=i.lib,n=o.WordArray,c=o.BlockCipher,a=i.algo,s=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],f=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],h=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],d=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],p=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],u=a.DES=c.extend({_doReset:function(){for(var e=this._key,t=e.words,r=[],i=0;i<56;i++){var o=s[i]-1;r[i]=t[o>>>5]>>>31-o%32&1}for(var n=this._subKeys=[],c=0;c<16;c++){var a=n[c]=[],d=h[c];for(i=0;i<24;i++)a[i/6|0]|=r[(f[i]-1+d)%28]<<31-i%6,a[4+(i/6|0)]|=r[28+(f[i+24]-1+d)%28]<<31-i%6;a[0]=a[0]<<1|a[0]>>>31;for(i=1;i<7;i++)a[i]=a[i]>>>4*(i-1)+3;a[7]=a[7]<<5|a[7]>>>27}var p=this._invSubKeys=[];for(i=0;i<16;i++)p[i]=n[15-i]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,i,o){this._lBlock=e[i],this._rBlock=e[i+1],t.call(this,4,252645135),t.call(this,16,65535),r.call(this,2,858993459),r.call(this,8,16711935),t.call(this,1,1431655765);for(var n=0;n<16;n++){for(var c=o[n],a=this._lBlock,s=this._rBlock,f=0,h=0;h<8;h++)f|=d[h][((s^c[h])&p[h])>>>0];this._lBlock=s,this._rBlock=a^f}var u=this._lBlock;this._lBlock=this._rBlock,this._rBlock=u,t.call(this,1,1431655765),r.call(this,8,16711935),r.call(this,2,858993459),t.call(this,16,65535),t.call(this,4,252645135),e[i]=this._lBlock,e[i+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});i.DES=c._createHelper(u);var l=a.TripleDES=c.extend({_doReset:function(){var e=this._key,t=e.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var r=t.slice(0,2),i=t.length<4?t.slice(0,2):t.slice(2,4),o=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=u.createEncryptor(n.create(r)),this._des2=u.createEncryptor(n.create(i)),this._des3=u.createEncryptor(n.create(o))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:6,ivSize:2,blockSize:2});i.TripleDES=c._createHelper(l)}(),e.TripleDES},"object"==typeof r?t.exports=r=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(i.CryptoJS)},{"./cipher-core":4,"./core":5,"./enc-base64":6,"./evpkdf":9,"./md5":14}],37:[function(e,t,r){var i,o;i=this,o=function(e){return function(t){var r=e,i=r.lib,o=i.Base,n=i.WordArray,c=r.x64={};c.Word=o.extend({init:function(e,t){this.high=e,this.low=t}}),c.WordArray=o.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=r!=t?r:8*e.length},toX32:function(){for(var e=this.words,t=e.length,r=[],i=0;i<t;i++){var o=e[i];r.push(o.high),r.push(o.low)}return n.create(r,this.sigBytes)},clone:function(){for(var e=o.clone.call(this),t=e.words=this.words.slice(0),r=t.length,i=0;i<r;i++)t[i]=t[i].clone();return e}})}(),e},"object"==typeof r?t.exports=r=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)},{"./core":5}]};return e(t,{},[2])}


async function Envs() {
    if (mengniu) {
        if (mengniu.indexOf("@") != -1) {
            mengniu.split("@").forEach((item) => {

                mengniuArr.push(item);
            });
        } else if (mengniu.indexOf("\n") != -1) {
            mengniu.split("\n").forEach((item) => {
                mengniuArr.push(item);
            });
        } else {
            mengniuArr.push(mengniu);
        }
    } else {
        log(`\n 【${$.name}】：未填写变量 mengniu`)
        return;
    }

    return true;
}
function addNotifyStr(str, is_log = true) {
    if (is_log) {
        log(`${str}\n`)
    }
    msg += `${str}\n`
}

// ============================================发送消息============================================ \\
async function SendMsg(message) {
    if (!message)
        return;

    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require('./sendNotify');
            await notify.sendNotify($.name, message);
        } else {
            $.msg(message);
        }
    } else {
        log(message);
    }
}
var MD5=function(string){function RotateLeft(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));}function AddUnsigned(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}}function F(x,y,z){return(x&y)|((~x)&z);}function G(x,y,z){return(x&z)|(y&(~z));}function H(x,y,z){return(x^y^z);}function I(x,y,z){return(y^(x|(~z)));}function FF(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function GG(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function HH(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function II(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function ConvertToWordArray(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;}function WordToHex(lValue){var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);}return WordToHexValue;}function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}return utftext;}var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=Utf8Encode(string);x=ConvertToWordArray(string);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],S11,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],S11,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],S41,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],S41,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],S41,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD);}var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return temp.toLowerCase();}
function randomString(m) {
    for (var e = m > 0 && void 0 !== m ? m : 21, t = ""; t.length < e;) t += Math.random().toString(36).slice(2);
    return t.slice(0, e)
}
function randomnum(e) {
    e = e || 32;
    var t = "1234567890",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}   