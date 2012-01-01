app.views.AddRound = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '本局輸贏',
        items: [
            {
                id: 'cancel',
                text: '取消',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        //Ext.dispatch({
                        //    controller: app.controllers.main,
                        //    action: 'backFromEnterPlayerNames',
                        //});
                    }
                }
            },
            {xtype:'spacer'},
            {
                id: 'addRoundApply',
                text: '保存',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        console.log('AddRound.js -> addRoundApply button dispatch');
                        Ext.dispatch({
                            controller: app.controllers.main,
                            action: 'addRound',
                            numOfCards: {
                                p1Num : parseInt(Ext.getCmp('p1Num').getValue()),
                                p2Num : parseInt(Ext.getCmp('p2Num').getValue()),
                                p3Num : parseInt(Ext.getCmp('p3Num').getValue()),
                                p4Num : parseInt(Ext.getCmp('p4Num').getValue())                                
                            }, 
                            roundNum: this.roundNum
                        });
                    }
                }
            }
        ]
    }],
    items: [
        {
            id: 'p1Num', 
            xtype: 'selectfield',
            name: 'p1Num', 
            label: 'p1',
            options: [{text:'0',value:'0'},{text:'1',value:'1'},{text:'2',value:'2'},
                      {text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},
                      {text:'6',value:'6'},{text:'7',value:'7'},{text:'8',value:'8'},
                      {text:'9',value:'9'},{text:'10',value:'10'},{text:'11',value:'11'},
                      {text:'12',value:'12'},{text:'13',value:'13'}]
        },
        {
            id: 'p2Num', 
            xtype: 'selectfield',
            name: 'p2Num', 
            label: 'p2',
            options: [{text:'0',value:'0'},{text:'1',value:'1'},{text:'2',value:'2'},
                      {text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},
                      {text:'6',value:'6'},{text:'7',value:'7'},{text:'8',value:'8'},
                      {text:'9',value:'9'},{text:'10',value:'10'},{text:'11',value:'11'},
                      {text:'12',value:'12'},{text:'13',value:'13'}]
        },
        {
            id: 'p3Num', 
            xtype: 'selectfield',
            name: 'p3Num', 
            label: 'p3',
            options: [{text:'0',value:'0'},{text:'1',value:'1'},{text:'2',value:'2'},
                      {text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},
                      {text:'6',value:'6'},{text:'7',value:'7'},{text:'8',value:'8'},
                      {text:'9',value:'9'},{text:'10',value:'10'},{text:'11',value:'11'},
                      {text:'12',value:'12'},{text:'13',value:'13'}]
        },
        {
            id: 'p4Num', 
            xtype: 'selectfield',
            name: 'p4Num', 
            label: 'p4',
            options: [{text:'0',value:'0'},{text:'1',value:'1'},{text:'2',value:'2'},
                      {text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},
                      {text:'6',value:'6'},{text:'7',value:'7'},{text:'8',value:'8'},
                      {text:'9',value:'9'},{text:'10',value:'10'},{text:'11',value:'11'},
                      {text:'12',value:'12'},{text:'13',value:'13'}]
        }    
    ], 
    listeners: {
        'activate': function() {
            console.log('addRound.js -> activate');

            var updateLabel = function(selectfieldId, newText) {
                Ext.getCmp(selectfieldId).labelEl.dom.children[0].innerHTML = newText;
            }; 

            var updateNum = function(selectfieldId, numOfCards) {
                Ext.getCmp(selectfieldId).setValue(numOfCards);
            }

            var names = app.stores.playerList; 
            updateLabel('p1Num', names.data.items[0].data.p1);
            updateLabel('p2Num', names.data.items[0].data.p2);
            updateLabel('p3Num', names.data.items[0].data.p3);
            updateLabel('p4Num', names.data.items[0].data.p4);
            if(!this.isAdd) {
                var round = app.stores.rounds.getAt(this.roundNum-1);
                updateNum('p1Num', round.get('p1Num'));
                updateNum('p2Num', round.get('p2Num'));
                updateNum('p3Num', round.get('p3Num'));
                updateNum('p4Num', round.get('p4Num'));
            }
            else {
                updateNum('p1Num', 0);
                updateNum('p2Num', 0);
                updateNum('p3Num', 0);
                updateNum('p4Num', 0);
            }
            
            var toolbar = this.getDockedItems()[0];
            toolbar.getComponent('addRoundApply').roundNum = this.roundNum;
        }
    }, 
    getReady: function(roundNum) {
        console.log('AddRound.js -> getReady: ' + roundNum);
        this.roundNum = roundNum;
        // add or edit?
        if(roundNum > app.stores.rounds.getCount()) this.isAdd = true;
        else this.isAdd = false;
    }
});