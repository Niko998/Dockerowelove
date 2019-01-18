
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

myElement.addEventListener("click",showing, false)
document.addEventListener("click",hiding,false)

function showing(e){
    e.preventDefault();
    myTrueElement.classList.add("is-active");
}

function hiding(e){
    if(e.target.closest('#nav_menu') === null) {
        myTrueElement.classList.remove("is-active");
      }
    
}

function getting(){
    fetch("/api/youtasks").then(response => json())
        .then(body => console.log(body))
}

