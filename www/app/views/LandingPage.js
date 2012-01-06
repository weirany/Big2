app.views.LandingPage = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: ' ',
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
    }, {
        xtype: 'panel',
        dock: 'bottom', 
        html: '<div class="landingSmall">報告錯誤及建議 <a href="mailto:big2iphone@ifudream.com?subject=Big 2 for iPhone User Feedback">@&spades;2</a></div>'
    }],
    layout: 'fit',
    items: [{
        xtype: 'panel',
        html: '<div class="landingTitle">鋤大D<br/>記分助手</div>'
            + '<div class="landingSubTitle">鋤大弟，或稱大老二、階級鬥爭、步步高昇（臺灣早期稱呼）、粤语为鋤弟，有時稱做「中國撲克」，是一個在大中華地區（尤其是廣東、馬來西亞、新加坡、香港、澳門及臺灣）流行的撲克牌遊戲。</div>'
    }]
});