/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/task.js":
/*!******************************!*\
  !*** ./resources/js/task.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function SPAtaskList() {
  fetch("/api/tasks", {
    method: 'GET' //Dlaczemu tego nie ma?
    //headers: {
    //  'X-CSRF-TOKEN': token.content,
    //  'Content-Type': "application/json",
    //  accept: "application/json"
    //}

  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var tasks = data;
    var output = '<ol id="tasklist">';

    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].done) {
        output += '<li> <a href="/yoursubtasks/' + tasks[i].id + '" class="tasks" style="text-decoration: line-through;"> Zrobic: ' + tasks[i].description + ', do dnia: ' + tasks[i].final_date;
        ' </a> </li>';
      } else {
        output += '<li> <a href="/yoursubtasks/' + tasks[i].id + '" class="tasks"> Zrobic: ' + tasks[i].description + ', do dnia: ' + tasks[i].final_date;
        ' </a> </li>';
      }
    }

    output += '</ol>';
    document.getElementById('taskList').innerHTML = output;
  });
}

if (document.getElementById('taskList')) {
  SPAtaskList();
}

function SPAsubTaskList() {
  var token = document.head.querySelector('meta[name="csrf-token"]');
  var urlArray = window.location.href.split('/');
  var mainID = urlArray[urlArray.length - 1];
  var post = {
    id: mainID
  };
  fetch("/api/yoursubs", {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var tasks = data.subtasks;
    var output = '<ol id="tasklist">';

    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].done) {
        output += '<li><p class="tasks" style="text-decoration: line-through;"> Zrobic:' + tasks[i].description + ', do dnia: ' + tasks[i].final_date + '</p>' + '<button type="button" class="subDoneTasksButtons" id=' + tasks[i].id + '>Done!</button>' + '<button type="button" class="subDelTasksButtons" id= ' + tasks[i].id + '>X</button></li>';
      } else {
        output += '<li><p class="tasks"> Zrobic:' + tasks[i].description + ', do dnia: ' + tasks[i].final_date + '</p>' + '<button type="button" class="subDoneTasksButtons" id=' + tasks[i].id + '>Done!</button>' + '<button type="button" class="subDelTasksButtons" id= ' + tasks[i].id + '>X</button></li></li>';
      }
    }

    output += '</ol>';
    document.getElementById("subtasks").innerHTML = output;
  });
}

if (document.getElementById("subtasks")) {
  SPAsubTaskList();
}

var APIinputSubmit = document.getElementById("APIinputSubmit");

if (APIinputSubmit) {
  APIinputSubmit.addEventListener("click", APIaddTask, false);
}

function APIaddTask(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();
  var token = document.head.querySelector('meta[name="csrf-token"]');
  var inpText = document.getElementById("inputTask").value;
  var inpDate = document.getElementById("inputDate").value;
  var inpPar = document.getElementById("inputParent").value;
  var post = {
    parent_id: inpPar,
    task: inpText,
    final_date: inpDate
  };
  fetch("/api/yourtasks", {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //Pobieram output
    //usuwam z niego ostatnie 5 znakow
    //dodaje na koncu nowy task
    //podmieniam wartosc innerHTML
    //Czy to dobrze, ze tylko id idzie z daleka, a reszta jest z tej funkcji?
    var output = document.getElementById('taskList').innerHTML;
    output = output.substr(0, output.length - 5);
    output += '<li> <a href="/yoursubtasks/' + data.id[0].id + '" class="tasks"> Zrobic: ' + post.task + ', do dnia: ' + post.final_date;
    ' </a> </li></ol>';
    document.getElementById('taskList').innerHTML = output;
    showAlert(1);
  }).catch(function (value) {
    showAlert(0);
  });
}

var APIsubInputSubmit = document.getElementById("subInputSubmit");
APIsubInputSubmit.addEventListener("click", APIaddSubTask, false);

function APIaddSubTask(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();
  var token = document.head.querySelector('meta[name="csrf-token"]');
  var inpText = document.getElementById("inputTask").value;
  var inpDate = document.getElementById("inputDate").value;
  var inpPar = document.getElementById("inputParent").value;
  var post = {
    parent_id: inpPar,
    task: inpText,
    final_date: inpDate
  };
  fetch("/api/yoursubtasks", {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data.id[0].id); //Pobieram output
    //usuwam z niego ostatnie 5 znakow
    //dodaje na koncu nowy task
    //podmieniam wartosc innerHTML
    //Czy to dobrze, ze tylko id idzie z daleka, a reszta jest z tej funkcji?

    var output = document.getElementById('subtasks').innerHTML;
    output += '<li><p class="tasks"> Zrobic:' + post.task + ', do dnia: ' + post.final_date + '</p>' + '<button type="button" class="subDoneTasksButtons" id=' + data.id[0].id + '>Done!</button>' + '<button type="button" class="subDelTasksButtons" id= ' + tasks.id[0].id + '>X</button></li></li>';
    document.getElementById('newSubtasks').innerHTML = output;
    showAlert(1);
  }).catch(function (value) {
    showAlert(0);
  });
}

var subDoneButton = document.getElementsByClassName("subDoneTasksButtons");

for (i = 0; i < subDoneButton.length; i++) {
  subDoneButton[i].addEventListener("click", doneTask, false);
}

function doneTask(e) {
  var token = document.head.querySelector('meta[name="csrf-token"]');
  var post = {
    id: e.target.id
  };
  fetch("/api/yoursubtasks", {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function () {
    document.getElementById("subtask" + e.target.id).style.textDecoration = "line-through";
  }).catch(function () {
    alert("Cos poszlo nie tak!");
  });
}

var APIdeleteSubmit = document.getElementById('APIdeleteSubmit');

if (APIdeleteSubmit) {
  APIdeleteSubmit.addEventListener("click", APIdeleteTask, false);
}

function APIdeleteTask(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();
  var token = document.head.querySelector('meta[name="csrf-token"]');
  var delID = document.getElementById('mainTaskID');
  var post = {
    id: delID.value
  };
  fetch("/api/yourtasks", {
    method: 'DELETE',
    body: JSON.stringify(post),
    headers: {
      'X-CSRF-TOKEN': token.content,
      'Content-Type': "application/json",
      accept: "application/json"
    }
  }).then(function () {
    showAlert(2);
    window.setTimeout(function () {
      window.location = "/";
    }, 1000);
  }).catch(function () {
    showAlert(3);
  });
} //show alert after adding new task


function showAlert() {
  var message = document.getElementById("progressMessage");
  var alertClass = document.getElementById("alertok");

  switch (arguments[0]) {
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

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/task.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nikodem007/Desktop/Dockerowelove/code/resources/js/task.js */"./resources/js/task.js");


/***/ })

/******/ });