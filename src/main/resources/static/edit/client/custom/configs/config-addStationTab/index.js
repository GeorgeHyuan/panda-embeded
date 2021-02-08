/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-19 11:14:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-02 13:35:18
 */
var stationsExplorer
var stationTree = {}

/**
 * @description: 添加站点tab页
 */
function addStationTab (editor) {
  var pointsTab = new ht.Tab()
  pointsTab.setName('站点')
  editor.leftTopTabView.getTabModel().add(pointsTab, 0)
  pointsTab.setView(createStationExplorer(editor, true))
  return pointsTab
}
function createStationExplorer (editor, draggable) {
  var textIcon = {
    width: 32,
    height: 16,
    comps: [
      {
        type: 'text',
        text: '##.#',
        align: 'center',
        rect: [0, 0, 32, 16]
      }
    ]
  }
  stationsExplorer = new hteditor.Explorer(editor, exportApiName, false)
  request.post('/space/getSpaceTree').then(function (res) {
    var stationList = res.data
    stationTree = parseStationData(stationList)
    stationsExplorer.parse(stationTree)
    addContextMenu(stationsExplorer.tree, editor, 'tree')
    addContextMenu(stationsExplorer.list, editor, 'list')
  })
  /**
   * @description: 点击站点
   */
  stationsExplorer.tree.sm().ms(function (e) {
    var newData = e.datas.get(e.datas.size() - 1)
    if (e.kind === 'set') {
      if (newData && stationsExplorer.oldSel === newData.url) {
        return
      }
      if (newData) {
        stationsExplorer.oldSel = newData.url

        newData.fileType !== 'root' && getDiagramList()
      }
    }
  })
  stationsExplorer.list.mi(function (e) {
    if (e.kind === 'doubleClickData' && e.data.fileType === 'diagram') {
      console.log(e.data, 'event')
      var node = e.data
      editor.openByJSON(
        'display',
        `displays/${node.url}.json`,
        node.getName(),
        node.getAttr('json')
      )
      editor.dm.a({
        uuid: node.getAttr('uuid'),
        spaceUuid: node.getAttr('spaceUuid')
      })
      initDiagramType(node.getAttr('diagramType'))
    }
  })

  if (draggable) {
    stationsExplorer.list.isDroppableToDisplayView = true
    stationsExplorer.list.handleDropToEditView = function (
      view,
      fileNode,
      point,
      event
    ) {
      if (fileNode.getIcon() === textIcon) {
        var text = new ht.Text()
        text.s({
          text: '##.#',
          'text.align': 'center'
        })
        text.setDataBindings({
          s: { text: { id: fileNode.getName() } }
        })
        text.setDisplayName(fileNode.getName())
        text.p(point)
        view.addData(text)
      } else {
        var node = new ht.Node()
        node.setImage(fileNode.getImage())
        node.p(point)
        node.setDisplayName(fileNode.getName())
        view.addData(node)
      }
    }
  }

  return stationsExplorer
}
/**
 * @description: 格式化站点树
 */
function parseStationData (dataList) {
  var res = {}
  dataList.forEach(function (data) {
    if (data.children && data.children.length > 0) {
      res[data.name] = {
        fileType: 'dir',
        attrs: { uuid: data.uuid },
        children: parseStationData(data.children)
      }
    } else {
      res[data.name] = { fileType: 'dir', attrs: { uuid: data.uuid } }
    }
  })
  return res
}
/**
 * @description: 初始化右侧是否主图属性
 * @param {type}
 * @return:
 */
function initDiagramType (value) {
  editor.rightTopBorderPane
    .getCenterView()
    .dataModel.setAttr('diagramType', value)
}
function updateTree (childData) {
  var cuttentDir = editor.dir
  var pathArr = cuttentDir.url.split('/')
  var newTree = _.cloneDeep(stationTree)
  var json = newTree
  pathArr.forEach(function (path, index) {
    if (index === 1) {
      json = json[path]
    } else if (index !== 0 && json.children) {
      json = json.children[path]
    }
  })
  !json.children && (json.children = {})
  childData.forEach(function (child) {
    try {
      let diagram = JSON.parse(child.diagram)
      json.children[child.name] = {
        fileType: 'diagram',
        fileIcon: diagram.icon,
        attrs: {
          spaceUuid: child.spaceUuid,
          uuid: child.uuid,
          diagramType: Number(child.type) || 0,
          json: diagram.json
        }
      }
    } catch (e) {
      json.children[child.name] = {
        fileType: 'diagram',
        attrs: {
          uuid: child.uuid,
          diagramType: Number(child.type) || 0,
          spaceUuid: child.spaceUuid,
          json: child.diagram
        }
      }
    }
  })
  stationsExplorer.parse(newTree)
}
