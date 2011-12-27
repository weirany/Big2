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
                    }
                }
            }
        ]
    }],
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            html: '鋤大二 記分器'
        }
    ]
});