app.views.Money = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '當前結算',
        items: [{
            text: '返回',
            ui: 'back',
            listeners: {
                'tap': function () {
                    Ext.dispatch({
                        controller: app.controllers.main,
                        action: 'backFromMoney'
                    });
                }
            }
        }, {
            xtype:'spacer'
        }]
    }],
    layout: 'fit', 
    items:[{
        xtype: 'panel',
        html: ' '
        //listeners: {
        //    'itemTap': function(dataView, index) {
        //        Ext.dispatch({
        //            controller: app.controllers.main,
        //            action: 'goToEditRound', 
        //            roundNum: index + 1
        //        });
        //    }
        //}
    }],
    listeners: {
        'activate': function() {
            this.getBalance = function(index, totalArray) {
                var bal = 0;
                for(var i=0;i<4;i++) {
                    if(i==index) continue;
                    bal += (totalArray[i] - totalArray[index]);
                }
                return bal;
            }
            // get balance
            var p1Balance = 0; 
            var p2Balance = 0; 
            var p3Balance = 0; 
            var p4Balance = 0; 
            if(app.stores.rounds.getCount() > 0) {
                var lastRound = app.stores.rounds.last();
                var totalArray = [lastRound.get('p1Total'), lastRound.get('p2Total'),
                    lastRound.get('p3Total'), lastRound.get('p4Total')];
                p1Balance = this.getBalance(0, totalArray);
                p2Balance = this.getBalance(1, totalArray);
                p3Balance = this.getBalance(2, totalArray);
                p4Balance = this.getBalance(3, totalArray);
            }
            var names = app.stores.playerList.getAt(0);
            var txt = '';
            txt += '<div><div class="moneyName">' + names.get('p1') + '</div>'
                + '<div class="moneyAmount">' + p1Balance + '</div></div>';
            txt += '<div><div class="moneyName">' + names.get('p2') + '</div>'
                + '<div class="moneyAmount">' + p2Balance + '</div></div>';
            txt += '<div><div class="moneyName">' + names.get('p3') + '</div>'
                + '<div class="moneyAmount">' + p3Balance + '</div></div>';
            txt += '<div><div class="moneyName">' + names.get('p4') + '</div>'
                + '<div class="moneyAmount">' + p4Balance + '</div></div>';
            this.items.items[0].el.dom.children[0].innerHTML = txt;
        }
    }
});