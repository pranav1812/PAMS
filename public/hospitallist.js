var container=document.getElementsByClassName('contain');
var butt=document.getElementById('btn');
butt.addEventListener('click',showList);

function showList(){
    var city=document.getElementById('city').value;
    var ul=document.createElement('ul');
    db.collection('hospitals').orderBy('add').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            if
            renderCafe(doc);
    });

}