/*
 * @description: 公用全局配置
 * @version: 0.0.1
 * @Author: sun_yilin
 * @Date: 2019-08-20 10:19:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-21 16:50:46
 */
// 物联网项目的应用id
var VUE_APP_TYPE = 'many_station'
var VUE_APP_TITLE = 'iPCS变电站智能巡检系统'
// var VUE_APP_TITLE = '配网锁控智能化系统'
var VUE_APP_HOME_PATH = '/overview' // 立体巡检
// var VUE_APP_HOME_PATH = '/intelligent-locks'  // 锁具
// 请求接口与浏览器地址的IP
// var serverIp_app = '192.168.10.111' // 公司服务器
var serverIp_app = location.href.split('/')[2]// 黄斌
// 请求接口
var VUE_APP_URL = 'http://' + serverIp_app
// 除登陆接口外的接口
var VUE_APP_API = VUE_APP_URL
var VUE_APP_API_STATION = VUE_APP_URL
// ht 图片请求地址
var VUE_HT_URL = 'http://' + serverIp_app + '/edit/diagramfile/'
// 请求接口的端口
var PORT_CODE = ':10240'

// 摄像头webrtcIP
// var serverIp_app_live = '192.168.10.135'// 刘恒源sd
var serverIp_app_live = '192.168.1.8'// 刘恒源sd
// 浏览器地址的端口
var VUE_APP_DUAN_KOU = ':9090'

// websocket 端口
var webSocketDK = ':15566'

// webSocket请求接口
var VUE_SOCKET_URL = 'ws://' + serverIp_app + webSocketDK
// 编辑器的浏览器请求地址 ip加端口
var SERVER_ADDR = 'http://' + serverIp_app + VUE_APP_DUAN_KOU

var VUE_APP_API_LIVE = VUE_APP_URL + '/live'
var VUE_APP_API_LIVE_KONG = 'http://' + serverIp_app + ':1985/api/v1/gb28181'
// 登陆接口
var VUE_APP_API_LOGIN = VUE_APP_URL + '/authc'
// 图片回显
var VUE_APP_IMAGE = VUE_APP_API + '/common/imagePreview?imgUrl='
// 文件下载地址
var VUE_APP_DOWNLOADFILE = VUE_APP_API + '/common/imagePreview/downloadFile?fileUrl='
// # 离线地图瓦片服务器 （天津已下载高德（10-17）层级，最高可支持17级）
// var VUE_APP_API_MAP = SERVER_ADDR + '/taizhou_gaode_map/jiangsu_google'
// 卫星图
var VUE_APP_API_MAP = SERVER_ADDR + '/map/china'
// var VUE_APP_API_MAP = 'http://192.168.0.101/map/jiangsu_gaode_weixing_13'
// # 图片地址上传
var VUE_APP_API_IMAGE = VUE_APP_API + '/file/upload'
// # 文档地址上传
var VUE_APP_API_WORDUPLOAD = VUE_APP_API + '/spaceThreePartsTimeDate/fileUpload'
// mqtt 配置参数
var MQTT_OBJ = {
  host: '10.20.72.182', // hostname or IP address
  port: 8083,
  addtopic: '/sys/room1/thing/stream',
  useTLS: false,
  username: 'admin',
  password: 'public',
  cleansession: false
}
// # 告警小视频回显
var VUE_APP_API_PLAYER =
  'http://' + serverIp_app + ':6008' + '/video/videoData/'
// 遥控开关
var VUE_BROKER_ADDR = serverIp_app + ':8083'
// 这是rtmp地址
var VUE_LIVE_ADDR = serverIp_app + ':9062'
// 前端播放的地址
var VUE_LIVE_PLAYER = SERVER_ADDR + '/videos/'

// 报表服务地址
var VUE_APP_REPORT = 'http://' + serverIp_app + ':1011'
// # 首页无人机智能巡检任务饼图访问地址
var VUE_APP_API_WURENJIECHARTS = 'http://172.23.192.204:8090'
// # 无人机巡检访问地址
var VUE_APP_API_WURENJI = 'http://24.46.11.84:81/uav/sysUserinfo/login'
// 作为站房里跳转到物联网的地址
var WULIAN_URL = 'http://' + serverIp_app + VUE_APP_DUAN_KOU + '/iot'

var socketURI = 'wss://127.0.0.1:12656' // 锁具websocket服务

// var VUE_HT_URL = '/edit/diagramfile/'
// 单站项目树id写成固定的
var VUE_TREE_ONE_ID = '1341208217543249922' // 现场的
// var VUE_TREE_ONE_ID = '1330825010587111425' // 幼儿园的
