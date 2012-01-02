app.views.Settings = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '設置',
        items: [
            {
                text: '取消',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: app.controllers.main,
                            action: 'backFromSettings',
                        });
                    }
                }
            },
            {xtype:'spacer'},
            {
                text: '保存',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: app.controllers.main,
                            action: 'saveSettings',
                            config: {
                                x2 : parseInt(this.up('panel').items.items[0].getValue()),
                                x3 : parseInt(this.up('panel').items.items[1].getValue()),
                                x4 : parseInt(this.up('panel').items.items[2].getValue())
                            }
                        });
                    }
                }
            }
        ]
    }], 
    items: [{
        xtype: 'selectfield',
        name: 'x2', 
        label: 'x2(雙炒)',
        options: [{text:'禁用',value:'0'},{text:'1',value:'1'},{text:'2',value:'2'},
                  {text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},
                  {text:'6',value:'6'},{text:'7',value:'7'},{text:'8',value:'8'},
                  {text:'9',value:'9'},{text:'10',value:'10'},{text:'11',value:'11'},
                  {text:'12',value:'12'},{text:'13',value:'13'}]
    },{
        xtype: 'selectfield',
        name: 'x3', 
        label: 'x3(三炒)',
        options: [{text:'禁用',value:'0'},{text:'1',value:'1'},{text:'2',value:'2'},
                  {text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},
                  {text:'6',value:'6'},{text:'7',value:'7'},{text:'8',value:'8'},
                  {text:'9',value:'9'},{text:'10',value:'10'},{text:'11',value:'11'},
                  {text:'12',value:'12'},{text:'13',value:'13'}]
    },{
        xtype: 'selectfield',
        name: 'x4', 
        label: 'x4(四炒)',
        options: [{text:'禁用',value:'0'},{text:'1',value:'1'},{text:'2',value:'2'},
                  {text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},
                  {text:'6',value:'6'},{text:'7',value:'7'},{text:'8',value:'8'},
                  {text:'9',value:'9'},{text:'10',value:'10'},{text:'11',value:'11'},
                  {text:'12',value:'12'},{text:'13',value:'13'}]
    }], 
    listeners: {
        'activate': function() {
            console.log('Settings.js -> activate');
    
            this.updateNum = function(index, value) {
                this.items.items[index].setValue(value);
            }
    
            var config = app.stores.config; 
            this.updateNum(0, config.x2);
            this.updateNum(1, config.x3);
            this.updateNum(2, config.x4);
        }
    }
});