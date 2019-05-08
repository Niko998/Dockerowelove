import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Login from "./components/Login"

var vue = new Vue({
    el: '#app',
    components: {
        Navigation,
        Home,
        Footer,
        Login
    },
    data: function () {
        return {
        seen: false
        }
    },
        

    template: '<div><navigation @seen="seen = !seen"/><login :seen="seen"/><home></home><Footer></Footer></div>'
                
})
