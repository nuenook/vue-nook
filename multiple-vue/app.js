Vue.component('greeting', {
    template: '<p>Hey there, I am {{name}} <button v-on:click="changeName"></button></p>',
    data: function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Mario'
        }
    }
})

const one = new Vue({
    el: "#vue-app-one",
    data: {
        title: 'Vue App One'
    },
    methods: {
    },
    computed: {
        greet: function() {
            return 'Hello from app one :)'
        }
    }
});

const two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function(){
            one.title = "change from vue app 2"
        }
    },
    computed: {
        greet: function() {
            return 'Yo dudes this is app two :)'
        }

    }
});

two.title = "Change from outside"