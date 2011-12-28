app.views.LandingPage = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '',
        items: [
            {xtype:'spacer'},
            {
                text: '新記分',
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
            }
        ]
    }],
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            html: '鋤大D 記分器'
        }
    ]
});