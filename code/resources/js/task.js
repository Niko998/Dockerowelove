
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
        let output = '';

        for (var i = 0; i < tasks.length; i++) {
          output += '<li> <a href="/yoursubtasks/{{ $tasks[i].id }}" class="tasks"> Zrobic: ' + tasks[i].description +', do dnia: '+ tasks[i].final_date; ' </a> </li>'
        }
        document.getElementById('taskList').innerHTML = output;
    })
}

SPAtaskList();


