/*
 * @description: editor
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-20 13:48:43
 * @LastEditors: dai_zheng
 * @LastEditTime: 2019-09-26 09:44:05
 */
(function() {

    window.hteditor_config.onRightToolbarCreated = function(editor) {

        // Hide some items from right toolbar
        editor.rightToolbar.setItemVisible('zoomIn', false);
        editor.rightToolbar.setItemVisible('zoomOut', false);
        editor.rightToolbar.setItemVisible('toggleBoth', false);

        // Add some items to right toolbar
        editor.rightToolbar.addItem(createFullscreenItem());
    };

    function createFullscreenItem() {
        var id = 'fullScreen';
        var toolTip = hteditor.getString('Fullscreen');
        var iconName = 'custom/rightToolbar/fullscreen.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
            ht.Default.toggleFullscreen(editor.mainPane);
        };
        return item;
    }

})();


