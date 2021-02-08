/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-17 14:58:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-16 15:12:07
 */
/**
 * @description: 初始化请求
 * @param {type}
 * @return:
 */
var localToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjM4MzQ0Mjk0NjM4OTMxOTcwIiwiaXNzIjoiaS16ZC5uZXQiLCJleHAiOjE1ODQ4NTc3NTEsImlhdCI6MTU4NDMzOTM1MSwidXNlcklkIjoxMjM4MzQ0Mjk0NjM4OTMxOTcwfQ.oCv6oyK0IPrEH54RBpbM7gm21n-35i72niFQPPgiQg8'
var environment = util.getUrlParam('env')
var defaultBaseApi = '10.20.72.73'
var defaultBasePort = '8008'
var baseApi
if (environment === 'dev') {
  baseApi = defaultBaseApi + ':' + defaultBasePort
} else {
  baseApi = window.location.hostname + ':' + defaultBasePort
}
var request = axios.create({
  baseURL: 'http://' + baseApi + '/bizPlatform'
})
var fileRequest = axios.create({
  baseURL: 'http://' + baseApi + '/bizPlatform'
})

function interceptorsReqSuccess (config) {
  // 在请求发送之前做一些处理
  var token = util.cookies.get('token')
  // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  config.headers['token'] = token || localToken
  return config
}

function interceptorsResSuccess (response) {
  // dataAxios 是 axios 返回数据中的 data
  var dataAxios = response.data
  // 这个状态码是和后端约定的
  var code = dataAxios.code
  // 根据 code 进行判断
  if (code === undefined || code === 200) {
    return dataAxios
  } else if (code !== 200) {
    return Promise.reject()
  }
}

function interceptorResError (error) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误'
        break
      case 401:
        error.message = '未授权，请登录'

        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = `请求地址出错`
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      case 501:
        error.message = '服务未实现'
        break
      case 502:
        error.message = '网关错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网关超时'
        break
      case 505:
        error.message = 'HTTP版本不受支持'
        break
      default:
        break
    }
  }
  return Promise.reject(error)
}
// 请求拦截器
fileRequest.interceptors.request.use(interceptorsReqSuccess, function (error) {
  // 发送失败
  Promise.reject(error)
})
// 响应拦截器
fileRequest.interceptors.response.use(
  interceptorsResSuccess,
  interceptorResError
)
request.interceptors.request.use(interceptorsReqSuccess, function (error) {
  // 发送失败
  Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(interceptorsResSuccess, interceptorResError)