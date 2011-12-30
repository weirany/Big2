app.controllers.main = new Ext.Controller({
    newScore: function(options) {
        console.log('newScore controller.');
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

        // todo: testing only
        while(playerList.data.items.length>0) playerList.removeAt(0);
        playerList.create({p1:'Weiran',p2:'Jinzi',p3:'Helen',p4:'Peggy'});
        // todo: end
        
        app.views.viewport.setActiveItem(app.views.scoreboard);       
    }, 
    goToAddRound: function(options) {
        console.log('main.js -> goToAddRound');
        app.views.viewport.setActiveItem(app.views.addRound);
    }
})