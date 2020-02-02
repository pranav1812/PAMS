const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');

    let token_id = document.createElement('span');
    let status = document.createElement('span');
    let link=document.createElement('a');
    let pres=document.createElement('textarea');


    let name = document.createElement('span');
    let  urgency= document.createElement('span');
    let time = document.createElement('span');
    link.href=doc.data().url;

    var link_text=document.createTextNode('view medical history');
    link.appendChild(link_text);


    let btn=document.createElement('button');

    var text=document.createTextNode('update');
    li.setAttribute('data-id', doc.id);
    token_id.textContent = 'Location:    '+doc.data().token_id;
    name.textContent = 'name:   '+doc.data().username;
    urgency.textContent ='Urgency:  '+ doc.data().urgency;
    time.textContent = 'Time:   '+doc.data().time;



    var select=document.createElement('select');
    var opt=document.createElement('option');
    var txt=document.createTextNode('waiting');
    opt.append(txt);
    select.append(opt);
    var opt=document.createElement('option');
    var txt=document.createTextNode('Not seen');
    opt.append(txt);
    select.append(opt);
    var opt=document.createElement('option');
    var txt=document.createTextNode('Resolved');
    opt.append(txt);
    select.append(opt);

    select.style.height=35;





    status.textContent = 'Status:   '+doc.data().status;
    btn.append(text);
    btn.style.height='35';


    li.appendChild(token_id);
    li.appendChild(status);
    li.appendChild(select);
    li.appendChild(btn);
    li.appendChild(name);
    li.appendChild(urgency);
    li.appendChild(time);
    li.appendChild(link);
    li.appendChild(pres);


    btn.addEventListener('click',function(){
        db.collection('patients').doc(doc.id).update({
            status: select.value,
            prescription: pres.value

        })
    });


    cafeList.appendChild(li);
}

//getting data
db.collection('patients').orderBy('time').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
});
});