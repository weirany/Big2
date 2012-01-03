app.views.Settings = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: '設置',
        items: [{
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
        }, {
            xtype:'spacer'
        }, {
            text: '保存',
            ui: 'action',
            listeners: {
                'tap': function () {
                    // data validation
                    this.x2 = parseInt(this.up('panel').items.items[0].getValue());
                    this.x3 = parseInt(this.up('panel').items.items[1].getValue());
                    this.x4 = parseInt(this.up('panel').items.items[2].getValue());
                    var isValid = true;
                    if(this.x4!=0 && (this.x4<=this.x3 || this.x4<=this.x3)) isValid = false;
                    if(this.x3!=0 && this.x3<=this.x2) isValid = false;
                    if(!isValid) {
                        Ext.Msg.alert('提示', '除非禁用，否則必須符合：x4 > x3 > x2', Ext.emptyFn);
                        return;
                    }
                    else {
                        // confirm?
                        Ext.Msg.confirm(
                            '注意',
                            '新設置會對所有牌局生效，包括之前的。確定更改？',
                            function(btn) {
                                if(btn == 'yes') {
                                    Ext.dispatch({
                                        controller: app.controllers.main,
                                        action: 'saveSettings',
                                        config: {
                                            x2 : this.x2,
                                            x3 : this.x3,
                                            x4 : this.x4
                                        }
                                    });
                                }
                            },
                            this
                        );
                    }
                }
            }
        }]
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