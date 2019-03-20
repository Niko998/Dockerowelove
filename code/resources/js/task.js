
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
          output += '<li> <a href="/yoursubtasks/' + tasks[i].id + '" class="tasks"> Zrobic: ' + tasks[i].description +', do dnia: '+ tasks[i].final_date; ' </a> </li>'
        }
        output += '</ol>'
        document.getElementById('taskList').innerHTML = output;
    })
}

let APIinputSubmit = document.getElementById("APIinputSubmit");
APIinputSubmit.addEventListener("click",APIaddTask,false);

function APIaddTask(e){
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
    
  }).then(function(response){
    debugger;
    console.log(response.json());
    return response.json();
  })
  .then(function(task){
    console.log(task);
    let output = '';
    output = '<li> <a href="/yoursubtasks/' + task.id + '" class="tasks"> Zrobic: ' + task.description +', do dnia: '+ task.final_date; ' </a> </li>';
    console.log(output);
    document.getElementById('taskList').innerHTML += output;
          showAlert(1)
        })
  .catch(function(value){
    debugger;
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

SPAtaskList();


