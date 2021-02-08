/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-10 16:23:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-22 16:09:34
 */
;
(function () {
  /**
   * @description: 隐藏菜单
   */
  function hideMenu (editor) {
    var items = editor.mainToolbar.getItems()
    items.splice(0, 1)
    editor.mainToolbar.setItems(items)
  }
  /**
   * @description: 隐藏图纸
   */
  function hideDisplays (editor) {
    var displayDataID = editor.leftTopTabView
      .getTabModel()
      .getDatas()
      ._as[1].getId()
    editor.leftTopTabView.getTabModel().removeDataById(displayDataID)
  }
  window.hteditor_config.handleEvent = function (editor, type, params) {
    if (type === 'editorCreated') {
      var stationTab = addStationTab(editor)
      hideMenu(editor)
      hideDisplays(editor)
      /**
       * @description: 默认选中站点选项
       */
      editor.leftTopTabView
        .getTabModel()
        .sm()
        .ss(stationTab)
    }
    if (type === 'updateStation') {
      getDiagramList()
    }
    if (
      (type === 'request' && params.cmd === 'EXPLORE') ||
      type === 'response' ||
      type === 'fileChanged'
    ) {
      return
    }
    if (params && params.message) {
      // console.log('[' + type + ']', params.message)
    } else {
      // console.log('[' + type + ']')
    }



    var S = hteditor.getString

    if (type === 'displayViewCreated' || type === 'displayViewOpened') {
      addSkewTranlateItem(
        params.displayView.graphView,
        'editor.displayView.graphView'
      )
      addPrintSelectionItem(
        params.displayView.displayTree,
        'editor.displayTree'
      )
      addPrintSelectionItem(
        params.displayView.graphView,
        'editor.displayView.graphView'
      )
      // params.displayView.graphView.getEditInteractor().setStyle('anchorVisible', false);
      // params.displayView.graphView.getEditInteractor().setStyle('connectGuideVisible', false);
    } else if (type === 'symbolViewCreated' || type === 'symbolViewOpened') {
      addPrintSelectionItem(params.symbolView.symbolList, 'editor.symbolList')
      addPrintSelectionItem(
        params.symbolView.graphView,
        'editor.symbolView.graphView'
      )
    } else if (
      type === 'displayViewSaving' ||
      type === 'displayViewNewNameInputing'
    ) {
      // if (!params.displayView.dm.size()) {
      //     window.alert(S('NothingToBeSaved'));
      //     params.preventDefault = true;
      // }
    } else if (
      type === 'symbolViewSaving' ||
      type === 'symbolViewNewNameInputing'
    ) {
      // if (!params.symbolView.dm.size()) {
      //     window.alert(S('NothingToBeSaved'));
      //     params.preventDefault = true;
      // }
    } else if (type === 'paste') {
      params.datas.forEach(function (data) {
        var dataBindings = data.getDataBindings()
        if (dataBindings) {
          // update attrs
          for (var name in dataBindings.a) {
            var db = dataBindings.a[name]
            db.id = db.id + '_copied'
          }
          // update styles
          for (var name in dataBindings.s) {
            var db = dataBindings.s[name]
            db.id = db.id + '_copied'
          }
          // update properties
          for (var name in dataBindings.p) {
            var db = dataBindings.p[name]
            db.id = db.id + '_copied'
          }
        }
      })
    } else if (
      type === 'fileRenaming' ||
      type === 'fileMoving' ||
      type === 'fileDeleting'
    ) {
      // Prevent some files from being renamed, moved or deleted
      if (
        params.url === 'custom/symbols/basic/ht.json' ||
        params.url === 'custom/symbols/basic' ||
        params.url === 'custom/displays/basic'
      ) {
        params.preventDefault = true
      }
    }
  }
})()