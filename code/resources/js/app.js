
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
let jsonButton = document.getElementById("responder");
var divJsonButton = document.getElementById("jsonData");
var inpForm = document.getElementById("inputForm");
var inpButton = document.getElementById("inputSubmit");
var subInpButton = document.getElementById("subInputSubmit");
var subDelButton = document.getElementsByClassName("subTasksButtons");
var taskSite = document.getElementById("taskList");




myElement.addEventListener("click",showing, false);
document.addEventListener("click",hiding,false);
if(jsonButton){
  jsonButton.addEventListener("click",hello,false);
}
if (inpButton){
  inpButton.addEventListener("click",addTask,false);
}
//inpForm.addEventListener("submit",addTask,false);
if (subInpButton){
  subInpButton.addEventListener("click",addTask,false);
}
for(i=0; i <subDelButton.length;i++){
  subDelButton[i].addEventListener("click",deleteTask,false);
}
taskSite.addEventListener("load",SPAtaskList,false);

function showing(e){
    e.preventDefault();
    myTrueElement.classList.add("is-active");
}

function hiding(e){
    if(e.target.closest('#nav_menu') === null) {
        myTrueElement.classList.remove("is-active");
      }
    
}
//?????
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
  var inpText = document.getElementById("inputTask").value;
  var inpDate = document.getElementById("inputDate").value;
  var inpPar = document.getElementById("inputParent").value;

  let taskData = new FormData();
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
  switch(arguments[0]) {
    case 1:
      message.textContent = "Task zostal dodany prawidlowo! Odswiez strone.";
      alertClass.style.color = "green";
      break;
    case 0:
      message.textContent = "Task nie zostal dodany! Odswiez strone.";
      alertClass.style.color = "red";
      break;
    case 2:
      message.textContent = "Subtask zostal usuniety prawidlowo! Odswiez strone.";
      alertClass.style.color = "green";
      break;
    case 3:
      message.textContent = "Subtask zostal usuniety prawidlowo! Odswiez strone.";
      alertClass.style.color = "red";
      break;
  }
  alertClass.classList.remove('is-invisible');
}

function deleteTask(e){
  let token = document.head.querySelector('meta[name="csrf-token"]');
  let taskData = new FormData();
  taskData.append("id",e.target.id);
  const post = {id: e.target.id};
  fetch("/deleted",{
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function(value){
    showAlert(2);
  })
  .catch(function(value){
    showAlert(3);
  })

}

function SPAtaskList(e){
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open('GET', '/yourtasks', true);
    request.onload = function () {
      // Convert JSON data to an object
      let tasks = JSON.parse(this.response);

      let output = '';
      for (var i = 0; i < tasks.length; i++) {
        output += '<li>' + tasks[i].description + tasks[i].final_date; '</li>'
      }
      document.getElementById('taskList').innerHTML = output;
    }

  request.send();
}
