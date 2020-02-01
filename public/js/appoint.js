var app=document.getElementById('app');
app.addEventListener('click',()=>{
    /*var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var uname=document.getElementById('uname');*/
    //var time=document.getElementById('');
    var dept=document.getElementById('depta');


    db.collection('patients').doc('GrIDdpbg1ect1MFeAXbT').update({
        username: uname.value
    })
    db.collection('patients').doc('GrIDdpbg1ect1MFeAXbT').update({
        time: Date()
    })
    db.collection('patients').doc('GrIDdpbg1ect1MFeAXbT').update({
        department: dept.value
    })
    //var docid=db.collection('patients').docs[0].id;
    document.getElementById('docid').textContent+='GrIDdpbg1ect1MFeAXbT';

});

