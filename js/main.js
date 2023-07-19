"use strict"

const app = Vue.createApp({
    data(){
        return {
            messaggio: "FIRST VUE TITLE",
            para: "WELCOME",
            user: "STRANGER",
            centerText: "text-center mt-4",
            spacingText: "py-3",
            image: "./img/card-1.png",
            visibility: "d-none"
        }
    },
    methods: {
        salutoIniziale(){
            this.para = this.para + " " + this.user;
            this.visibility = "d-block"
        }
    }

})

app.mount("#app");