
function SPAtaskList(){
    fetch("/api/tasks",{
      method: 'GET',
      //Dlaczemu tego nie ma?
      //headers: {
      //  'X-CSRF-TOKEN': token.content,
      //  'Content-Type': "application/json",
      //  accept: "application/json"
      //}
    }).then(function(response){
      return response.json();
    })
    .then(function(data){
        let tasks = data;
        let output = '<ol id="tasklist">';

        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].done){
            output += '<li> <a href="/yoursubtasks/' + tasks[i].id + '" class="tasks" style="text-decoration: line-through;"> Zrobic: ' +
             tasks[i].description +', do dnia: '+ tasks[i].final_date; ' </a> </li>'
          }
          else {
          output += '<li> <a href="/yoursubtasks/' + tasks[i].id + '" class="tasks"> Zrobic: ' + tasks[i].description +', do dnia: '+ tasks[i].final_date; ' </a> </li>'
        }}
        output += '</ol>'
        document.getElementById('taskList').innerHTML = output;
    })
    }
    if (document.getElementById('taskList')){
      SPAtaskList();
    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//wypisywanie listy subtaskow  
function SPAsubTaskList(){
  let token = document.head.querySelector('meta[name="csrf-token"]');
  let urlArray = window.location.href.split('/')
  let mainID = urlArray[urlArray.length - 1];
  const post = {
    id: mainID
  }
  fetch("/api/yoursubs",{
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }

  }).then(function(response){
    return response.json();
  })
  .then(function(data){
    let tasks = data.subtasks;
    let output = '<ol id="tasklist">';
    for(i=0;i<tasks.length;i++){
      if (tasks[i].done){
        output += '<li><p class="tasks" style="text-decoration: line-through;" id="subtask'+tasks[i].id+'"> Zrobic:' + tasks[i].description + ', do dnia: ' + tasks[i].final_date + '</p>' +
        '<button type="button" class="subDoneTasksButtons" id='+ tasks[i].id +'>Done!</button>' +
        '<button type="button" class="subDelTasksButtons" id= '+ tasks[i].id +'>X</button></li>';
      }
      else{
        output += '<li><p class="tasks" id="subtask'+tasks[i].id+'"> Zrobic:' + tasks[i].description + ', do dnia: ' + tasks[i].final_date + '</p>'+
        '<button type="button" class="subDoneTasksButtons" id='+ tasks[i].id +'>Done!</button>' +
        '<button type="button" class="subDelTasksButtons" id= '+ tasks[i].id +'>X</button></li></li>';
      }
    }
    output += '</ol>';
    //Dodawanie listenerow do przyciskow przy subtaskach
    document.getElementById("subtasks").innerHTML = output;
    let subDelButton = document.getElementsByClassName("subDelTasksButtons");
    let subDoneButton = document.getElementsByClassName("subDoneTasksButtons");
    for(i=0; i <subDoneButton.length;i++){
      subDoneButton[i].addEventListener("click",doneTask,false);
      subDelButton[i].addEventListener("click",delSubTasks,false);
  }
  })
  }

  if (document.getElementById("subtasks")){
    SPAsubTaskList();
  }


let APIinputSubmit = document.getElementById("APIinputSubmit");
if(APIinputSubmit){
  APIinputSubmit.addEventListener("click",APIaddTask,false);
}


function APIaddTask(e){
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();
  
  let token = document.head.querySelector('meta[name="csrf-token"]');
  var inpText = document.getElementById("inputTask").value;
  var inpDate = document.getElementById("inputDate").value;
  var inpPar = document.getElementById("inputParent").value;
  
  const post = {
    parent_id: inpPar,
    task: inpText,
    final_date: inpDate
  }
  fetch("/api/yourtasks",{
    method: 'POST', 
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function(response){
    return response.json();
  })
  .then(function(data){

    //Pobieram output
    //usuwam z niego ostatnie 5 znakow
    //dodaje na koncu nowy task
    //podmieniam wartosc innerHTML
    //Czy to dobrze, ze tylko id idzie z daleka, a reszta jest z tej funkcji?
    let output = document.getElementById('taskList').innerHTML;
    output = output.substr(0,output.length-5);
    output += '<li> <a href="/yoursubtasks/' + data.id[0].id + '" class="tasks"> Zrobic: ' + post.task +', do dnia: '+ post.final_date; ' </a> </li></ol>';
    document.getElementById('taskList').innerHTML = output;
          showAlert(1)
        })
  .catch(function(value){
    showAlert(0)
  })
  
}


let APIsubInputSubmit = document.getElementById("subInputSubmit")
APIsubInputSubmit.addEventListener("click",APIaddSubTask, false);

function APIaddSubTask(e){
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();
  let token = document.head.querySelector('meta[name="csrf-token"]');
  var inpText = document.getElementById("inputTask").value;
  var inpDate = document.getElementById("inputDate").value;
  var inpPar = document.getElementById("inputParent").value;
  
  const post = {
    parent_id: inpPar,
    task: inpText,
    final_date: inpDate
  }
  fetch("/api/yoursubtasks",{
    method: 'POST', 
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data.id[0].id);
    //Pobieram output
    //usuwam z niego ostatnie 5 znakow
    //dodaje na koncu nowy task
    //podmieniam wartosc innerHTML
    //Czy to dobrze, ze tylko id idzie z daleka, a reszta jest z tej funkcji?
    let output = document.getElementById('subtasks').innerHTML;
    output = output.substr(0,output.length-5);
    output += '<li><p class="tasks"> Zrobic:' + inpText + ', do dnia: ' + inpDate + '</p>'+
    '<button type="button" class="subDoneTasksButtons" id='+ data.id[0].id +'>Done!</button>' +
    '<button type="button" class="subDelTasksButtons" id= '+ data.id[0].id +'>X</button></li></li></ol>';
    document.getElementById('subtasks').innerHTML = output;
    
    showAlert(1)
        })
    .catch(function(value){
      showAlert(0)
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////

function doneTask(e){
  debugger;
  let token = document.head.querySelector('meta[name="csrf-token"]');
  const post = {
    id: e.target.id
  };
  fetch("/api/yoursubtasks",{
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function(){
    document.getElementById("subtask"+e.target.id).style.textDecoration = "line-through";
  }).catch(function(){
    alert("Cos poszlo nie tak!");
  })
}




let APIdeleteSubmit = document.getElementById('APIdeleteSubmit');
if(APIdeleteSubmit){
  APIdeleteSubmit.addEventListener("click",APIdeleteTask,false);
}



function APIdeleteTask(e){
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();

  let token = document.head.querySelector('meta[name="csrf-token"]');
  let delID=document.getElementById('mainTaskID');
  
  const post = {
    id: delID.value
  };
  fetch("/api/yourtasks",{
    method: 'DELETE', 
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function(){
    showAlert(2);
    window.setTimeout(function(){
      window.location = "/";
    },1000);
  }).catch(function(){
    showAlert(3);
  })


}

//Deleting subtasks

function delSubTasks(e){
  let token = document.head.querySelector('meta[name="csrf-token"]');
  let delID = e.target.id;
  const post = {
    id: delID.value
  };
  fetch("/api/yoursubtasks",{
    method: 'DELETE',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function(){
    showAlert(2);
  }).catch(function(){
    showAlert(3);
  })
}


//show alert after adding new task
function showAlert(){
  let message = document.getElementById("progressMessage");
  let alertClass = document.getElementById("alertok");
  switch(arguments[0]) {
    case 1:
      message.textContent = "Task zostal dodany prawidlowo!";
      alertClass.style.color = "green";
      break;
    case 0:
      message.textContent = "Task nie zostal dodany!";
      alertClass.style.color = "red";
      break;
    case 2:
      message.textContent = "Task zostal usuniety prawidlowo! Odswiez strone.";
      alertClass.style.color = "green";
      break;
    case 3:
      message.textContent = "Task zostal usuniety prawidlowo! Odswiez strone.";
      alertClass.style.color = "red";
      break;
  }
  alertClass.classList.remove('is-invisible');
}




