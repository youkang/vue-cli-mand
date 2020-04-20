import Vue from 'vue';
import axios from 'axios';
import querystring from 'querystring';
import { BR, WHITELIST } from '../api/index.js'
import router from '../router/index.js';
import store from '../store/index.js';
import * as type from '../store/type.js';
// let ERROR_TIME = 0;//报错次数

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
})

service.interceptors.request.use(
    config => {
        config.url = BR + config.url;
        // console.log(config.url)
        if(config.method === 'get') {
            config.params = {
                ...config.params,
                _t: Date.parse(new Date()) / 1000
            }
        }

        // if (config.method === 'post') config.data = qs.stringify(config.data)
        // config.transformRequest=[function (data) {
        //     // 对 data 进行任意转换处理
        //     return querystring.stringify(data);
        // }]
        
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


service.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        switch(error.response.status){
            case 500:
                break;
            default:
        }
        return Promise.reject(error);
    }
)

export const post = (url, data) =>{
    return service({
        method: 'post',
        url,
        data: data
    })
}

export const get = (url, data) =>{
    return service({
        method: 'get',
        url,
        params: data
    })
}

// export default axios;
