/**
 * http.js
 * 基于fly.js封装的请求库
 * xxh 20200520
 * 注：修改flyio源码: node_modules-flyio-dist-npm-fly.js=>line:648 if (status >= 200 && status < 300 || status === 304 || status === 401)
 */

import router from '@/router'
import Fly from 'flyio/dist/npm/fly'
import httpFlyConfig from './httpConfig'
let fly = new Fly();

class HttpFly {
    
    /**
     * 
     * @param {请求参数} reqdata 
     * @param {请求地址} url 
     * @param {成功回调} callBack 
     * @param {异常回调} errorBack 
     */
    post(reqdata, url, callBack, errorBack) {

        let _this = this;

        this._post(reqdata, url)
            .then(function (response) {
                if (callBack) {
                    callBack(response);
                }
            })
            .catch(function (error) {
                if (errorBack) {
                    errorBack(error);
                } else {
                    _this._error(error);
                }
            });
    }


    get(url, callBack, errorBack) {

        let _this = this;

        this._get(url)
            .then(function (response) {
                if (callBack) {
                    callBack(response);
                }
            })
            .catch(function (error) {
                if (errorBack) {
                    errorBack(error);
                } else {
                    this._error(error);
                }
            });
    }

    _error(err) {
        console.log(err);
        let msg = "网络异常";
        if (err.status === 400) {
            let contentType = err.response && err.response.headers && err.response.headers['content-type'] ? err.response.headers['content-type'] : '';
            if (contentType && contentType.length && contentType[0].indexOf('text/html') > -1) {
                msg = "服务器内部错误"
            } else {
                msg = "参数请求错误";
            }
        } else if (err.message.indexOf("timeout") > -1) {
            msg = "请求超时,请稍后重试"
        } else if (err.response) {
            msg = err.response.data.Message;
        }
    }

    /**
     * 
     * @param {请求参数} reqData 
     * @param {请求地址} url
     * @param {请求头} headers 
     */
    _post(reqData, url, headers) {

        if (headers) {
            this._headerSet(headers);
        }

        let _url = httpFlyConfig.baseURL + url;

        return fly.post(_url, JSON.stringify(reqData), httpFlyConfig);
    };

    /**
     * 
     * @param {请求参数} reqData 
     * @param {请求地址} url
     * @param {请求头} headers 
     */
    _get( url, headers) {

        if (headers) {
            this._headerSet(headers);
        }

        let _url = httpFlyConfig.baseURL + url;
        // let _url = url
        return fly.get(_url);
    }

    /**
     * 
     * @param {增加请求头} headers 
     */
    _headerSet(headers) {

        // 原始请求头和准备添加的请求头
        let originHeaders = httpFlyConfig.headers;
        let appendHeaders = headers;

        // 请求头合并
        if (appendHeaders) {
            for (let key in appendHeaders) {
                originHeaders[key] = appendHeaders[key]
            }
        }
    }
}

/**
 * 拦截器
 */
class interceptors {

    request() {
        //添加请求拦截器
        fly.interceptors.request.use((request) => {
            //给所有请求添加自定义header
            request.headers["X-Tag"] = "FLM158V2";
            //打印出请求体
            let token = localStorage.getItem('token') || '';

            if (token) {
                request.headers["Authorization"] = 'Bearer ' + token;
            } 
            // request.url = request.url + '?id=123';  // url添加参数

            //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
            return request;
        })
    }

    response() {

        //添加响应拦截器，响应拦截器会在then/catch处理之前执行
        fly.interceptors.response.use(
            async (response) => {                
                if (response.status === 401 && response.data.Message === "身份验证错误") {                    
                
                    if (!localStorage.getItem('refreshToken')) {
                        toLogin();
                    } else {
                        fly.lock();
                        // async & await 异步转同步,解决先执行.then处理再ReFreshToken()的bug
                        return await ReFreshToken(response)                    
                    }
                } else {
                    //只将请求结果的data字段返回
                    // console.log(response);
                    return response.data;
                }
            },
            (err) => {
                // console.log('err');                
                //发生网络错误后会走到这里
                //return Promise.resolve("ssss")
            }
        )
    }

}
function toLogin() {
    router.push({
        path: '/login',
        query: { source: router.history.current.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    });
}
function ReFreshToken(response) {
    return new Fly().post(
        httpFlyConfig.baseURL + '/Account/RefreshAccessToken', 
        JSON.stringify({RefreshToken: localStorage.getItem('refreshToken')}),
        httpFlyConfig)
        .then(res => {
            if (res && res.data && res.data.Result && res.data.Result.Token) {
                localStorage.setItem('token', res.data.Result.Token.AccessToken)
                localStorage.setItem('refreshToken', res.data.Result.Token.RefreshToken)
                return res.data.Result.Token.AccessToken;
            } else {
                promise.resolve("fake data")
            }
        })
        .catch(error => {
            promise.resolve("fake data")
     
        })
        .finally(() => fly.unlock())
        .then((newToken) => {       
            // response.request.headers.Authorization = 'Bearer ' + newToken;
            return fly.request(response.request);
        }) .catch(err => {
            toLogin();
        });
}
let flyInterceptors = new interceptors();

flyInterceptors.request();
flyInterceptors.response();

export default new HttpFly();