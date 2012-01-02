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
        app.views.addRound.getReady(app.stores.rounds.getCount()+1);
        app.views.viewport.setActiveItem(app.views.addRound);
    },
    goToEditRound: function(options) {
        console.log('main.js -> goToEditRound | options.roundNum: ' + options.roundNum);
        app.views.addRound.getReady(options.roundNum);
        app.views.viewport.setActiveItem(app.views.addRound);        
    },
    backFromAddRound: function(options) {
        console.log('main.js -> backFromAddRound');
        app.views.viewport.setActiveItem(
            app.views.scoreboard,
            {type:'slide', direction:'right'}
        );        
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
        //if(numOfWinner!=1) Ext.Msg.alert('提示', '每局只能有一個贏家(剩牌為0)', Ext.emptyFn);
        //else {
        //    
        //}
        var index = options.roundNum - 1;
        console.log('main.js -> addRound | options.roundNum: ' + options.roundNum);
        if(index > app.stores.rounds.getCount()-1) {
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
        }
        else {
            var round = app.stores.rounds.getAt(index);
            round.set('p1Num', numOfCards.p1Num);
            round.set('p2Num', numOfCards.p2Num);
            round.set('p3Num', numOfCards.p3Num);
            round.set('p4Num', numOfCards.p4Num);
            round.set('p1Total', 0);
            round.set('p1Total', 0);
            round.set('p1Total', 0);
            round.set('p1Total', 0);
        }
        app.stores.rounds.updateTotal(index);
        
        app.views.viewport.setActiveItem(app.views.scoreboard);
    },
    end: function(options) {
        console.log('c -> main.js -> end');
        app.views.viewport.setActiveItem(
            app.views.landingPage,
            {type:'slide', direction:'right'}
        );
    },
    goToSettings: function(options) {
        console.log('c -> main.js -> toToSettings');
        app.views.viewport.setActiveItem(app.views.settings);        
    },
    backFromSettings: function(options) {
        console.log('c -> main.js -> backFromSettings');
        app.views.viewport.setActiveItem(
            app.views.landingPage,
            {type:'slide', direction:'right'}
        );
    },
    saveSettings: function(options) {
        console.log('c -> main.js -> backFromSettings');
        var config = app.stores.config;
        config.x2 = options.config.x2;
        config.x3 = options.config.x3;
        config.x4 = options.config.x4;
        app.views.viewport.setActiveItem(app.views.landingPage);        
    }
})