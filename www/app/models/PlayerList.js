app.models.PlayerList = Ext.regModel('app.models.PlayerList', {
    fields: [
        {name: 'p1', type: 'string'},
        {name: 'p2', type: 'string'},
        {name: 'p3', type: 'string'},
        {name: 'p4', type: 'string'}
    ],
    proxy: {
        type: 'localstorage',
        id  : 'playerList'
    }
});