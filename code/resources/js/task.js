
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
if (document.getElementById('taskList')){
  SPAtaskList();
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

    console.log(data.id[0].id);
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
  console.log(delID.value);
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




