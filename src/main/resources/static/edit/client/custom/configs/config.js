/*
 * @description: human
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-10 16:23:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-02 13:38:57
 */
window.isPracticing = window.location.host.indexOf('hightopo') >= 0;
window.hteditor_config = {
    // color_select: '#FF7733',
    // explorerMode: 'accordion',
    locale: 'zh',
    // rotateAsClock: true,
    // filterDisplayViewEnabled: true,
    // filterSymbolViewEnabled: true,
    // mixMaskAndBackground: false,
    // saveSymbolCustomPropertyDefaultValue: true,
    // saveCompCustomPropertyDefaultValue: true,
    // importDataBindingsButtonVisible: false,
    // scenesVisible: true,
    // modelsVisible: true,
    // fitContentForDisplayView: true,
    // fitContentForSymbolView: true,
    // serviceClass: 'MockService',
    componentsVisible: !isPracticing,
    displaysEditable: !isPracticing,
    symbolsEditable: !isPracticing,
    componentsEditable: !isPracticing,
    assetsEditable: !isPracticing,
    locateFileEnabled: !isPracticing,
    serviceClass: 'MockService',
    expandedTitles: {
        TitleExtension: false
    },
    subConfigs: [
        'custom/configs/config-addStationTab/request.js',
        'custom/configs/config-addStationTab/contextmenu.js',
        'custom/configs/config-addStationTab/index.js',

        'custom/configs/config-utils.js',
        'custom/configs/config-inspectorTab.js',
        'custom/configs/config-handleEvent.js',
        'custom/configs/config-valueTypes.js',
        'custom/configs/config-dataBindings.js',
        'custom/configs/config-dataBindingsForSymbol.js',
        'custom/configs/config-connectActions.js',
        'custom/configs/config-inspectorFilter.js',
        'custom/configs/config-customProperties.js',
        'custom/configs/config-onEditorCreated.js',
        'custom/configs/config-onTitleCreating.js',
        'custom/configs/config-onTitleCreated.js',
        'custom/configs/config-onMainToolbarCreated.js',
        'custom/configs/config-onMainMenuCreated.js',
        'custom/configs/config-onRightToolbarCreated.js'
    ],
    libs: [
        'custom/libs/jquery.min.js',
        'custom/libs/bootstrap-treeview.min.js',
        'custom/libs/lodash.js',
        'custom/libs/axios.js',
        'custom/libs/js.cookie.js',
        'custom/libs/util.cookies.js',
        'custom/libs/utils.js',
        'custom/libs/api-config.js',
        'custom/libs/MockService.js',
        'custom/libs/request.js'
    ],
    handleInsertSceneFileToGraphView: function (displayView, fileNode, point) {
        var node = new ht.Node();
        node.a('sceneURL', fileNode.url);
        node.setImage('symbols/html/scene.json')
        if (point) {
            node.p(point.x, point.y);
        }
        else {
            var rect = displayView.graphView.getViewRect();
            if (rect) {
                node.p(rect.x + rect.width / 2, rect.y + rect.height / 2);
            }
        }
        node.setDisplayName(hteditor.fileNameToDisplayName(fileNode.url));
        displayView.addData(node);
    },
    handleInsertModelFileToGraphView: function (displayView, fileNode, point) {
        var node = new ht.Node();
        node.a('modelURL', fileNode.url);
        node.setImage('symbols/html/obj.json')
        if (point) {
            node.p(point.x, point.y);
        }
        else {
            var rect = displayView.graphView.getViewRect();
            if (rect) {
                node.p(rect.x + rect.width / 2, rect.y + rect.height / 2);
            }
        }
        node.setDisplayName(hteditor.fileNameToDisplayName(fileNode.url));
        displayView.addData(node);
    }
};
