app.models.Round = Ext.regModel('app.models.Round', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'p1Cards', type: 'int'},
        {name: 'p2Cards', type: 'int'},
        {name: 'p3Cards', type: 'int'},
        {name: 'p4Cards', type: 'int'}, 
        {name: 'p1CurrentTotal', type: 'int'},
        {name: 'p2CurrentTotal', type: 'int'},
        {name: 'p3CurrentTotal', type: 'int'},
        {name: 'p4CurrentTotal', type: 'int'}
    ],
    proxy: {
        type: 'localstorage',
        id  : 'round'
    }
});

app.stores.rounds = new Ext.data.Store({
    model: 'app.models.Round'
});