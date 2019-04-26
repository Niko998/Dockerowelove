import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Footer from "./components/Footer"
var vue = new Vue({
    el: '#app',
    components: {
        Navigation,
        Home,
        Footer
    },
    data: {
        message: "Hello World"
    },

    template: "<div><navigation></navigation><home></home><footer></footer></div>"
                

})