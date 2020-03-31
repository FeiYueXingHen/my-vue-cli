import Vue from 'vue'
import router from './router'

const App = r => require.ensure([], () => r(require('./App.vue')), 'app');
new Vue({
    el: "#app",
    router,
    render:h=>h(App)
});
