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
                id: 'apply',
                text: '保存',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: app.controllers.main,
                            action: 'addRound',
                            numOfCards: {
                                p1Num : parseInt(Ext.getCmp('p1Num').getValue()),
                                p2Num : parseInt(Ext.getCmp('p2Num').getValue()),
                                p3Num : parseInt(Ext.getCmp('p3Num').getValue()),
                                p4Num : parseInt(Ext.getCmp('p4Num').getValue())                                
                            }
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
            var updateLabel = function(labelEl, newText) {
                labelEl.dom.children[0].innerHTML = newText;
            }
            // set text labels
            names = app.stores.playerList; 
            updateLabel(Ext.getCmp('p1Num').labelEl, names.data.items[0].data.p1);
            updateLabel(Ext.getCmp('p2Num').labelEl, names.data.items[0].data.p2);
            updateLabel(Ext.getCmp('p3Num').labelEl, names.data.items[0].data.p3);
            updateLabel(Ext.getCmp('p4Num').labelEl, names.data.items[0].data.p4);
        }
    }
});