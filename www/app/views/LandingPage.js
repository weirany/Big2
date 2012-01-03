app.views.LandingPage = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '鋤大D記分助手',
        items: [{
            xtype:'spacer'
        }, {
            text: '開始',
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
        html: '  '
    }]
});