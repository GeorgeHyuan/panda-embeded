/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-19 11:20:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-18 14:19:58
 */
/**
 * @description: 获取接线图列表
 */
function getDiagramList () {
  var spaceId = editor.dir.getAttr('uuid')
  request({
    methods: 'get',
    url: `/diagram/getById/${spaceId}`
  })
    .then(function (res) {
      var rows = [res.data]
      rows[0].name = '图纸'
      rows[0].json = res.data.content
      updateTree(rows)
    })
}
function removeDiagram (uuids) {
  request
    .delete(exportApiRemove, {
      params: {
        ids: uuids.toString()
      }
    })
    .then(function (res) {
      getDiagramList()
    })
}
