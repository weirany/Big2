app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        Ext.apply(app.views, {
            landingPage: new app.views.LandingPage(),
            enterPlayerNames: new app.views.EnterPlayerNames(),
            scoreboard: new app.views.Scoreboard(),
            addRound: new app.views.AddRound(),
            settings: new app.views.Settings()
        });
        Ext.apply(this, {
            items: [
                app.views.landingPage,
                app.views.enterPlayerNames, 
                app.views.scoreboard,
                app.views.addRound,
                app.views.settings
            ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});