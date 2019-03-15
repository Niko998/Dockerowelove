function SPAtaskList(){
    console.log("siema");
    let request = new XMLHttpRequest();
    request.open('GET', '/api/tasks', true);
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

SPAtaskList();


