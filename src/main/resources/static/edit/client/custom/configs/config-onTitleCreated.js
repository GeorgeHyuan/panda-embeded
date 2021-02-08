/*
 * @description: 模块信息
 * @version: 0.0.1
 * @Author: zhang_xiang
 * @Date: 2019-09-23 16:13:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-16 16:44:48
 */
(function () {

    var isHandling = false;
    window.hteditor_config.onTitleCreated = function (editor, params) {
        if (!isHandling) {
            isHandling = true;
            handleTitleCreated(editor, params);
            isHandling = false;
        }
    };

    function handleTitleCreated (editor, params) {
        var title = params.title;
        var oldTitle = params.oldTitle;
        var inspector = params.inspector;
        if (inspector.type === 'data' && title === 'TitleBasic') {
            addDataProperties(inspector);
        } else if (inspector.type === 'display' && title === 'TitleBasic') {
            addDisplayProperties(inspector);
        }
    }

    function addDataProperties (inspector) {
        var items = [];
        var label = 'HIGHTOPO';
        var toolTip = 'www.hightopo.com';
        var icon = null;
        var count = 0;
        var onClicked = function () {
            button.setLabel('图扑软件' + (count ? (' + ' + count) : ''));
            count++;
        };
        var button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push('彩蛋');
        items.push(button);
        var rowInfo = inspector.addRow(items, [hteditor.config.indent, 0.1]);
        var visibleFunc = function (inspector) {
            var data = inspector.data;
            if (data instanceof ht.Node && !data.s('shape')) {
                if (data.getImage() === 'assets/ht.png' ||
                    data.getImage() === 'assets/ht.svg' ||
                    data.getImage() === 'assets/图扑软件.png') {
                    return true;
                }
            }
            return false;
        };
        rowInfo.visible = visibleFunc;
        rowInfo.onPropertyChanged = function (event, inspector) {
            if (event.property === 'image') {
                inspector.filterPropertiesLater();
            }
        };

        items = [];
        var defaultValues = ['A', 'B', 'C'];
        var getter = function (data) {
            return JSON.stringify(data.a('enum.values') || defaultValues)
        };
        var setter = function (data, value) {
            try {
                data.a('enum.values', JSON.parse(value));
            } catch (e) { }
        };
        inspector.addLabelInput(items, '枚举数组', getter, setter);
        rowInfo = inspector.addDBRow(items, 'a', 'enum.values');
        rowInfo.visible = visibleFunc;

        items = [];
        getter = function (data) {
            return data.a('enum.value')
        };
        setter = function (data, value) {
            data.a('enum.value', value);
        };
        var comboBox = inspector.addLabelComboBox(items, '枚举数值', getter, setter, defaultValues);
        rowInfo = inspector.addDBRow(items, 'a', 'enum.value');
        rowInfo.visible = visibleFunc;

        inspector.addUpdateHandler(function () {
            comboBox.setValues(inspector.getPropertyValue('enum.values') || defaultValues);
        });
    }

    // Try to use display-timer.html to preview the result
    function addDisplayProperties (inspector) {
        var S = hteditor.getString;
        var indent = hteditor.config.indent;

        var dialog = createDialog(inspector);

        var items = [];
        var label = '清除所有图元绑定数据';
        var toolTip = '清除绑定';
        var icon = null;
        var onClicked = function () {
            dialog.show();
        };
        var button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push('清除绑定');
        items.push(button);
        inspector.addRow(items, [indent, 0.1]);
    }

    function updateTimers (inspector, dialog) {
        var timers = inspector.getPropertyValue('timers');
        dialog.tableModel.clear();
        if (timers) {
            timers.forEach(function (timer) {
                var data = new ht.Data();
                data.a('func', timer.func);
                data.a('interval', timer.interval);
                dialog.tableModel.add(data);
            });
        }
    }

    function commitTimers (inspector, dialog) {
        var timers = [];
        dialog.tableModel.each(function (data) {
            timers.push({
                func: data.a('func'),
                interval: data.a('interval')
            });
        });
        inspector.setPropertyValue('timers', timers);
    }

    function createDialog (inspector) {
        var formPane = new ht.widget.FormPane();
        // formPane.addRow([tablePane], [0.1], 0.1)
        formPane.addRow([
            '是否清除所有图元的绑定数据'
        ], [0.2], 0.1);
        var dialog = new ht.widget.Dialog();
        var buttons = [];
        buttons.push({
            label: '确定',
            action: function () {
                var dataModel = inspector.dataModel.getDatas()
                dataModel.forEach(item => {
                    item.setDataBindings() // 清除绑定的数据
                    item.setTag() // 清除添加的标签
                })
                dialog.hide();
            }
        });
        buttons.push({
            label: '取消',
            action: function () {
                dialog.hide();
            }
        });
        dialog.setConfig({
            title: '清除绑定',
            closable: true,
            draggable: true,
            width: 400,
            height: 120,
            contentPadding: 10,
            resizeMode: "wh",
            maximizable: true,
            content: formPane,
            buttons: buttons,
            buttonsAlign: 'right'
        });
        return dialog;
    }
})();