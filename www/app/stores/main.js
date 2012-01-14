app.stores.config = {
    x2: 8,
    x3: 10,
    x4: 13
};

app.stores.playerList = new Ext.data.Store({
    model: 'app.models.PlayerList'
});

app.stores.rounds = new Ext.data.Store({
    model: 'app.models.Round'
});

//// todo: for testing only
//app.stores.rounds.add({
//    p1Num:0,p2Num:2,p3Num:3,p4Num:4,p1Total:0,p2Total:2,p3Total:3,p4Total:4 
//}, {
//    p1Num:2,p2Num:3,p3Num:0,p4Num:5,p1Total:2,p2Total:5,p3Total:3,p4Total:9
//}, {
//    p1Num:0,p2Num:3,p3Num:10,p4Num:5,p1Total:2,p2Total:5,p3Total:3,p4Total:9
//}, {
//    p1Num:2,p2Num:0,p3Num:3,p4Num:1,p1Total:2,p2Total:5,p3Total:3,p4Total:9
//}, {
//    p1Num:2,p2Num:3,p3Num:0,p4Num:5,p1Total:2,p2Total:5,p3Total:3,p4Total:9
//}, {
//    p1Num:4,p2Num:13,p3Num:8,p4Num:0,p1Total:2,p2Total:5,p3Total:3,p4Total:9
//});
//// todo: end

app.stores.rounds.updateTotal = function(startIndex) {
    console.log('round.js -> updateTotal: ' + startIndex);
    
    this.withX = function(num) {
        if(app.stores.config.x4!=0 && num>=app.stores.config.x4) return num*4;
        else if(app.stores.config.x3!=0 && num>=app.stores.config.x3) return num*3;
        else if(app.stores.config.x2!=0 && num>=app.stores.config.x2) return num*2;
        else return num;
    }
    
    var endIndex = app.stores.rounds.getCount() - 1;
    if(endIndex==-1) return;    // skip if no record
    var currentRec = app.stores.rounds.getAt(startIndex);
    // calculate with x2, x3, x4
    var p1RoundFinal = this.withX(currentRec.get('p1Num'));
    var p2RoundFinal = this.withX(currentRec.get('p2Num'));
    var p3RoundFinal = this.withX(currentRec.get('p3Num'));
    var p4RoundFinal = this.withX(currentRec.get('p4Num'));
    
    if(startIndex==0) {
        currentRec.set('p1Total', p1RoundFinal);
        currentRec.set('p2Total', p2RoundFinal);
        currentRec.set('p3Total', p3RoundFinal);
        currentRec.set('p4Total', p4RoundFinal);
    }
    else {
        var prevRec = app.stores.rounds.getAt(startIndex-1);
        currentRec.set('p1Total', p1RoundFinal + prevRec.get('p1Total'));
        currentRec.set('p2Total', p2RoundFinal + prevRec.get('p2Total'));
        currentRec.set('p3Total', p3RoundFinal + prevRec.get('p3Total'));
        currentRec.set('p4Total', p4RoundFinal + prevRec.get('p4Total'));
    }
    // recusive if there are more records
    if(startIndex<endIndex) {
        app.stores.rounds.updateTotal(startIndex+1);
    }
}