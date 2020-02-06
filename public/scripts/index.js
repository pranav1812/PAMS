// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const latpres = document.querySelector('.account-latpres');
const medhis = document.querySelector('.account-medhis');
const city = document.querySelector('.container1');
const trial=document.querySelector('.trial');
const selct=document.getElementById('selct');



M.AutoInit();
const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Logged in as ${user.email}</div>
        <br>


        <div>Name:    ${doc.data().Name}</div>


        <div>Address:  ${doc.data().Address}</div>


      `;
      const pres = `
      <div>${doc.data().pres}</div>

      `;
      const med = `
      <div>${doc.data().bio}</div>

      `;

      accountDetails.innerHTML = html;
      medhis.innerHTML=med;
      latpres.innerHTML=pres;
    });
    selct.addEventListener('change',showlist);
    function showlist(){
      var selectedCity=selct.value;
      db.collection(selectedCity).get().then(snap=>{

        snap.docs.forEach(hos=>{
          var li=document.createElement('li');
          var link=document.createElement('a');
          link.href=hos.data().name;
          link.innerHTML=hos.data().name;
          li.appendChild(link);
          trial.appendChild(li);
        })
      })



    }



    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// setup guides

const setupGuides = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();

    });
    guideList.innerHTML = html
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to check Profile</h5>';
  }


};


// setup materialize components

document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
});
