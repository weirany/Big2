app.views.LandingPage = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '鋤大D 記分助手',
        items: [{
            text: '設置',
            ui: 'action',
            listeners: {
                'tap': function() {
                    console.log('LandingPage.js -> setttings tapped');
                    Ext.dispatch({
                        controller: app.controllers.main,
                        action: 'goToSettings'
                    });
                }
            }
        },{
            xtype:'spacer'
        }, {
            text: '開始記分',
            ui: 'action',
            listeners: {
                'tap': function() {
                    console.log('tapped new score card.');
                    Ext.dispatch({
                        controller: app.controllers.main,
                        action: 'newScore'
                    });
                }
            }
        }]
    }],
    layout: 'fit',
    items: [{
        xtype: 'panel',
        html: ' '
    }]
});