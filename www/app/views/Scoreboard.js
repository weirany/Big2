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
                        var nextRoundNumber = app.stores.rounds.getCount() + 1;
                        this.setText('第 '+nextRoundNumber+' 局');

                    }
                }
            }
        ]
    }],
    layout: 'fit', 
    items:[{
        xtype: 'list',
        store: app.stores.rounds,
        itemTpl: [
            '<div style="float:left;width:23%;text-align:center">{p1Total}</div>',
            '<div style="float:left;width:23%;text-align:center">{p2Total}</div>',
            '<div style="float:left;width:23%;text-align:center">{p3Total}</div>',
            '<div style="float:left;width:23%;text-align:center">{p4Total}</div>'
        ]
    }]
});