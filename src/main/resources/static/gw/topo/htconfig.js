/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-10 16:22:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-20 16:52:03
 */
window.htconfig = {
  Default: {
    convertURL: function (url) {
      const baseUrl =  VUE_HT_URL
      if (
        url &&
        !/^data:image/.test(url) &&
        !/^http/.test(url) &&
        !/^https/.test(url)
      ) {
        if (/json/.test(url)) {
          return baseUrl + url
        } else if (location.href.indexOf('electric-well')) {
          return baseUrl + url
        } else {
          return url
        }
      }
      return baseUrl + url
    }
  }
}
