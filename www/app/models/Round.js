app.models.Round = Ext.regModel('app.models.Round', {
    fields: [
        {name: 'id', type: 'int'}, 
        {name: 'p1Num', type: 'int'},
        {name: 'p2Num', type: 'int'},
        {name: 'p3Num', type: 'int'},
        {name: 'p4Num', type: 'int'}, 
        {name: 'p1Total', type: 'int'},
        {name: 'p2Total', type: 'int'},
        {name: 'p3Total', type: 'int'},
        {name: 'p4Total', type: 'int'}
    ],
    proxy: {
        type: 'localstorage',
        id  : 'round'
    }
});

