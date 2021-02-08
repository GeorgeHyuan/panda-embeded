/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-19 10:23:31
 * @LastEditors: dai_zheng
 * @LastEditTime: 2019-09-19 17:13:59
 */
var util = {
  cookies: cookies
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function(url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'd2admin-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('d2admin-link-temp'))
}
util.getUrlParam = function(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg) //匹配目标参数
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null //返回参数值
}
util.recoveryData = function() {
  var basePath = recoveryDataPath + exportApiName + '/'
  fileRequest
    .post('/diagramFile/getFileNames', {
      filename: basePath
    })
    .then(function(fileListRes) {
      for (var key in fileListRes.data) {
        fileRequest
          .post('/diagramFile/getFileContent', {
            filename: basePath + key
          })
          .then(function(fileRes) {
            var data = fileRes.data[0]
            try {
              data = JSON.parse(data)
              request.post(exportApiAdd, data)
            } catch (e) {}
          })
      }
    })
}
