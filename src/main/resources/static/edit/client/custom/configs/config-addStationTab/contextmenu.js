/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-19 11:18:52
 * @LastEditors: dai_zheng
 * @LastEditTime: 2019-09-19 14:25:15
 */
function addContextMenu(view, editor, type) {
  var jsonDir = [
    {
      label: '添加图纸',
      type: 'add',
      action: function(item, e) {
        var select
        if (type === 'tree') {
          select = editor.dir
        } else {
          select = editor.file.fileType === 'dir' ? editor.file : editor.dir
        }
        if (item.type === 'add') {
          editor.newDisplayView()
          editor.dm.a({
            spaceUuid: select.getAttr('uuid')
          })
          editor.save()
        }
      }
    }
  ]
  var jsonDiagram = jsonDir.concat([
    {
      label: '删除',
      type: 'remove',
      action: function(item, e) {
        var select
        if (type === 'tree') {
          select = editor.dir
        } else {
          select = editor.file
        }
        if (item.type === 'remove') {
          var uuids = editor.explorer.list
            .getSelectionModel()
            .getSelection()
            ._as.map(function(model) {
              return model.getAttr('uuid')
            })
          removeDiagram(uuids)
        }
      }
    }
  ])
  // var graphView = new ht.graph.GraphView()
  var contextmenu = new ht.widget.ContextMenu()
  //重写beforeShow，动态设置菜单项
  contextmenu.beforeShow = function(e) {
    var select
    if (type === 'tree') {
      select = editor.dir
    } else {
      select = editor.file
    }
    if (!select) {
      this.setItems(null)
    } else if (select.fileType === 'root') {
      this.setItems(null)
    } else if (select.fileType === 'dir') {
      this.setItems(jsonDir)
    } else {
      this.setItems(jsonDiagram)
    }
  }
  contextmenu.addTo(view.getView())
}
