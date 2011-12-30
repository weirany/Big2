app.views.Scoreboard = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '記分牌',
        items: [
            {
                id: 'end',
                text: '結束',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        //Ext.dispatch({
                        //    controller: app.controllers.main,
                        //    action: 'doneFromEnterPlayerNames',
                        //    data: this.form.getValues()
                        //});
                    }
                }
            }, 
            {xtype:'spacer'},
            {
                id: 'addRound',
                text: '',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: app.controllers.main,
                            action: 'goToAddRound'
                        });
                    }, 
                    'afterrender': function() {
                        var roundNum = app.stores.playerList.data.items.length;
                        this.setText('第 '+roundNum+' 局');

                    }
                }
            }
        ]
    }]
});