/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-10 16:22:54
 * @LastEditors: dai_zheng
 * @LastEditTime: 2019-09-23 13:58:32
 */
window.htconfig = {
  Default: {
    convertURL: function(url) {
      if (
        url &&
        !/^data:image/.test(url) &&
        !/^http/.test(url) &&
        !/^https/.test(url)
      ) {
        return 'http://'+location.href.split('/')[2] + '/edit/diagramfile/' + url
      }
      return 'http://'+location.href.split('/')[2] + '/edit/diagramfile/' + url
    },
    dialogButtonBackground: '#45c4f9'
  }
}
