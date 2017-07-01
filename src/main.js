import Vue from 'vue'
import App from './App.vue'

// Components.
import components from './components/components';

new Vue({
    el: '#app',

    render: h => h(App),

    components: {
        ...components
    }
});
