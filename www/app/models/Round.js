app.models.Round = Ext.regModel('app.models.Round', {
    fields: [
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

app.stores.rounds = new Ext.data.Store({
    model: 'app.models.Round'
});

app.stores.rounds.updateTotal = function(startIndex) {
    console.log('round.js -> updateTotal: ' + startIndex);
    var endIndex = app.stores.rounds.getCount() - 1;
    if(endIndex==-1) return;    // skip if no record
    var currentRec = app.stores.rounds.getAt(startIndex);
    if(startIndex==0) {
        currentRec.set('p1Total', currentRec.get('p1Num'));
        currentRec.set('p2Total', currentRec.get('p2Num'));
        currentRec.set('p3Total', currentRec.get('p3Num'));
        currentRec.set('p4Total', currentRec.get('p4Num'));
    }
    else {
        var prevRec = app.stores.rounds.getAt(startIndex-1);
        currentRec.set('p1Total', currentRec.get('p1Num') + prevRec.get('p1Total'));
        currentRec.set('p2Total', currentRec.get('p2Num') + prevRec.get('p2Total'));
        currentRec.set('p3Total', currentRec.get('p3Num') + prevRec.get('p3Total'));
        currentRec.set('p4Total', currentRec.get('p4Num') + prevRec.get('p4Total'));
    }
    // recusive if there are more records
    if(startIndex<endIndex) {
        app.stores.rounds.updateTotal(startIndex+1);
    }
}