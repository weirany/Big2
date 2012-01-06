app.views.Scoreboard = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '記分牌',
        items: [{
            text: '結束',
            ui: 'back',
            listeners: {
                'tap': function () {
                    // confirm?
                    Ext.Msg.confirm(
                        '注意',
                        '清空之前所有牌局。確定結束？',
                        function(btn) {
                            if(btn == 'yes') {
                                Ext.dispatch({
                                    controller: app.controllers.main,
                                    action: 'end'
                                });
                            }
                        },
                        this
                    );
                }
            }
        }, {
            text: '$',
            ui: 'action',
            listeners: {
                'tap': function () {
                    Ext.dispatch({
                        controller: app.controllers.main,
                        action: 'goToMoney'
                    });
                }
            }
        },{
            xtype:'spacer'
        }, {
            text: '設置',
            ui: 'action',
            listeners: {
                'tap': function() {
                    console.log('Scoreboard.js -> setttings tapped');
                    Ext.dispatch({
                        controller: app.controllers.main,
                        action: 'goToSettings'
                    });
                }
            }
        }, {
            text: '+',
            ui: 'action',
            listeners: {
                'tap': function () {
                    Ext.dispatch({
                        controller: app.controllers.main,
                        action: 'goToAddRound'
                    });
                }
            }
        }]
    }, {
        xtype: 'list',
        store: app.stores.playerList,
        itemTpl: [
            '<div class="roundList">{p1}</div>',
            '<div class="roundList">{p2}</div>',
            '<div class="roundList">{p3}</div>',
            '<div class="roundList">{p4}</div>'
        ]
    }],
    layout: 'fit', 
    items:[{
        xtype: 'list',
        store: app.stores.rounds,
        itemTpl: [
            '<div class="roundList">{p1Total}</div>',
            '<div class="roundList">{p2Total}</div>',
            '<div class="roundList">{p3Total}</div>',
            '<div class="roundList">{p4Total}</div>'
        ], 
        listeners: {
            'itemTap': function(dataView, index) {
                Ext.dispatch({
                    controller: app.controllers.main,
                    action: 'goToEditRound', 
                    roundNum: index + 1
                });
            }
        }
    }]
});