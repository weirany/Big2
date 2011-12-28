app.controllers.main = new Ext.Controller({
    newScore: function(options) {
        console.log('newScore controller.');
        app.views.enterPlayerNames.getReady();
        app.views.viewport.setActiveItem(app.views.enterPlayerNames);
    }, 
    backFromEnterPlayerNames: function(options) {
        console.log('backFromEnterPlayerNames controller.');
        app.views.viewport.setActiveItem(
            app.views.landingPage,
            {type:'slide', direction:'right'}
        );
    },
    doneFromEnterPlayerNames: function(options) {
        console.log('doneFromEnterPlayerNames controller.');
        var playerList = app.stores.playerList;
        // clean up storage, if any. Then add. 
        while(playerList.data.items.length>0) playerList.removeAt(0);
        playerList.create(options.data);
        app.views.viewport.setActiveItem(app.views.scoreboard);       
    },
    setRoundNumber: function(options) {
        console.log('setRoundNumber controller.');
        var roundNum = app.stores.playerList.data.items.length;
        var toolbar = app.views.scoreboard.getDockedItems()[0];
        toolbar.getComponent('addRound').setText('第 '+roundNum+' 局');
    }    
})