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
    },
    addRound: function(options) {
        console.log('main.js -> addRound');
        var numOfCards = options.numOfCards;
        //// data validation
        //var numOfWinner = 0;
        //if(numOfCards.p1Num == 0) numOfWinner++;
        //if(numOfCards.p2Num == 0) numOfWinner++;
        //if(numOfCards.p3Num == 0) numOfWinner++;
        //if(numOfCards.p4Num == 0) numOfWinner++;
        //if(numOfWinner!=1) Ext.Msg.alert('提示', '每局只能有一個贏家', Ext.emptyFn);
        //else {
        //    
        //}
        var newIndex = app.stores.rounds.getCount();
        app.stores.rounds.add({
            p1Num : numOfCards.p1Num,
            p2Num : numOfCards.p2Num,
            p3Num : numOfCards.p3Num,
            p4Num : numOfCards.p4Num,
            p1Total : 0,
            p2Total : 0,
            p3Total : 0,
            p4Total : 0            
        });
        app.stores.rounds.updateTotal(newIndex);
        
        app.views.viewport.setActiveItem(app.views.scoreboard);
    }    
})