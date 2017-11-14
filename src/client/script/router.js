import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './vue/routes/home/home.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: home
    }, {
        path: '/a',
        component: {}
    }]
});