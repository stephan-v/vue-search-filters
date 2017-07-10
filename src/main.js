import Vue from 'vue';
import App from './App.vue';

// Vuex store.
import store from './store';

// Components.
import components from './components/components';

/* eslint-disable no-new */
new Vue({
    el: '#app',

    store,

    render: h => h(App),

    components: {
        ...components
    }
});
