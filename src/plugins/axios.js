// import React from 'react';
import axios from 'axios';
import { createHashHistory } from 'history';
import {Modal} from 'sup-ui';
import store from '../store';

import baseUrl from './baseUrl';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = 'http://192.168.3.137:8080';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 服务端api路径
 * @type {string}
 */
// let baseUrl = "192.168.95.147:18888/";
const history = createHashHistory();
//
const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  baseURL: `http://${baseUrl}`
  // baseURL: "http://127.0.0.1:8080/"
};

const _axios = axios.create(config);

_axios.interceptors.request.use(

  // eslint-disable-next-line no-shadow
  (config) => {
    // Do something before request is sent
    if (config.url.lastIndexOf('msService') === -1 && !config.headers.Authorization && store.tokenStore.isLogin) {
      config.headers.common.authorization = `bearer ${store.tokenStore.tokenData.access_token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    // route.replace("/login");

    return Promise.reject(error);
  }
);

// // 是否正在刷新的标记
// let isRefreshing = false;
//
// // 重试队列，每一项将是一个待执行的函数形式
// let retryRequests = [];
// let alert = false;
// let alertTimeOut = null;

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    // Do something with response data

    return response;
  },
  (error) => {
    // Do something with response error
    if (error.toString().includes('500')) {
      Modal.warning({
        title: '警告！',
        content: '服务器错误'
      });
      return Promise.reject(error);
    }
    // if (error.toString().includes('401') && store.tokenStore.isLogin) {
    //   if (!isRefreshing) {
    //     isRefreshing = true;
    //
    //     new Promise((resolve) => {
    //       store.tokenStore.resToken().then((r) => {
    //         console.log('resToken');
    //         history.go(0);
    //         resolve(r);
    //       });
    //     }).then(() => {
    //       setTimeout(() => {
    //         const reqs = retryRequests;
    //         retryRequests = [];
    //         isRefreshing = false;
    //         reqs.forEach((v) => v());
    //       }, 3000);
    //     });
    //   } else if (error.config.url.endsWith('token')) {
    //     if (store.tokenStore.isLogin) {
    //       if (alertTimeOut == null) {
    //         alertTimeOut = setTimeout(() => {
    //           Modal.confirm({
    //             title: '警告！',
    //             content: '登录已过期',
    //             onOk() {
    //               return new Promise((resolve) => {
    //                 history.push('/ipd/login');
    //                 history.go(0);
    //                 alert = false;
    //                 resolve();
    //               });
    //             },
    //             onCancel() {}
    //           });
    //         }, 1000);
    //       }
    //     }
    //     return Promise.reject(error);
    //   }
    //   console.log('401');
    //   if (error.config.retryCount < 5 || !error.config.retryCount) {
    //     if (!error.config.retryCount) {
    //       error.config.retryCount = 0;
    //     }
    //     // eslint-disable-next-line operator-assignment
    //     error.config.retryCount = error.config.retryCount + 1;
    //
    //     // 正在刷新token，返回一个未执行resolve的promise
    //     return new Promise((resolve) => {
    //       // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
    //       // @ts-ignore
    //
    //       retryRequests.push(() => {
    //         resolve(window.axios(error.config));
    //       });
    //     });
    //   }
    // } else if (error.toString().includes('403') && !alert) {
    //   alert = true;
    //   if (store.tokenStore.isLogin) {
    //     Modal.confirm({
    //       title: '警告！',
    //       content: '权限不足',
    //       onOk() {
    //         return new Promise(() => {
    //           alert = false;
    //         }).catch(() => console.log('Oops errors!'));
    //       },
    //       onCancel() {}
    //     });
    //   }
    // } else if (!store.tokenStore.isLogin) {
    //   if (retryRequests.length === 0) {
    //     if (alertTimeOut == null) {
    //       alertTimeOut = setTimeout(() => {
    //         Modal.confirm({
    //           title: '警告！',
    //           content: '请先登录',
    //           onOk() {
    //             return new Promise((resolve) => {
    //               history.push('/ipd/login');
    //               history.go(0);
    //               alert = false;
    //               resolve();
    //             });
    //           },
    //           onCancel() {}
    //         });
    //       }, 1000);
    //     } else {
    //       window.clearTimeout(alertTimeOut);
    //       alertTimeOut = null;
    //     }
    //   } else {
    //     retryRequests = [];
    //   }
    // }
    return Promise.reject(error);
  }
);

export {history};
export default _axios;
