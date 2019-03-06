
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});

var myElement = document.getElementById("navbarDropdown");
var myTrueElement = document.getElementById("nav_menu");
//let jsonButton = document.getElementById("responder");
var divJsonButton = document.getElementById("jsonData");
var inpForm = document.getElementById("inputForm");
var inpButton = document.getElementById("inputSubmit");
var subInpButton = document.getElementById("subInputSubmit");




myElement.addEventListener("click",showing, false);
document.addEventListener("click",hiding,false);
//jsonButton.addEventListener("click",hello,false);
if (inpButton){
  inpButton.addEventListener("click",addTask,false);
}
//inpForm.addEventListener("submit",addTask,false);
subInpButton.addEventListener("click",addTask,false);



function showing(e){
    e.preventDefault();
    myTrueElement.classList.add("is-active");
}

function hiding(e){
    if(e.target.closest('#nav_menu') === null) {
        myTrueElement.classList.remove("is-active");
      }
    
}

function hello(e){
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open('GET', '/api/yourtasks', true);
    request.onload = function () {
      // Convert JSON data to an object
      let users = JSON.parse(this.response);

      let output = '';
      for (var i = 0; i < users.length; i++) {
        output += '<li>' + users[i].description + ' is ' + users[i].final_date + ' years old.'; '</li>'
      }
      document.getElementById('users').innerHTML = output;
    }

  request.send();
}



function addTask(e){
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();
  
  let token = document.head.querySelector('meta[name="csrf-token"]');
  console.log(token);
  var inpText = document.getElementById("inputTask").value;
  var inpDate = document.getElementById("inputDate").value;
  var inpPar = document.getElementById("inputParent").value;

  var taskData = new FormData();
  taskData.append('parent_id',inpPar);
  taskData.append('task', inpText);
  taskData.append('final_date',inpDate);
  
  const post = {
    parent_id: inpPar,
    task: inpText,
    final_date: inpDate
  }

  fetch("/yourtasks",{
    method: 'POST', 
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
    
  }).then(res => res.text())
  .then(function(value){
          console.log(value);
          showAlert(1)
        })
  .catch(function(value){
    showAlert(0)
  })
  
}
//show alert after adding new task
function showAlert(){
  let message = document.getElementById("progressMessage");
  let alertClass = document.getElementById("alertok");
  if(arguments[0]){
    
    message.textContent = "Task zostal dodany prawidlowo!";
    alertClass.style.color = "green";
    alertClass.classList.remove('is-invisible');

  }
  else{
    message.textContent = "Task nie zostal dodany!";
    alertClass.style.color = "red";
    alertClass.classList.remove('is-invisible');
  }
}
