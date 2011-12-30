app.views.EnterPlayerNames = Ext.extend(Ext.form.FormPanel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '玩家名稱',
        items: [
            {
                id: 'cancel',
                text: '返回',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: app.controllers.main,
                            action: 'backFromEnterPlayerNames',
                        });
                    }
                }
            },
            {xtype:'spacer'},
            {
                id: 'apply',
                text: '開始',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: app.controllers.main,
                            action: 'doneFromEnterPlayerNames',
                            data: this.form.getValues()
                        });
                    }
                }
            }
        ]
    }],
    submitOnAction: false,
    items: [{
        name : 'p1',
        label: '玩家一',
        xtype: 'textfield'
    }, {
        name : 'p2',
        label: '玩家二',
        xtype: 'textfield'
    }, {
        name : 'p3',
        label: '玩家三',
        xtype: 'textfield'
    }, {
        name : 'p4',
        label: '玩家四',
        xtype: 'textfield'
    }], 
    listeners: {
        'activate': function() {
            console.log('EnterPlayerNames.js -> activate');
            var toolbar = this.getDockedItems()[0];
            toolbar.getComponent('apply').form = this;
        }
    }
});