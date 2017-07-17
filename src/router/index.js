import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: resolve => require(['../components/common/index.vue'], resolve),
        },
        {
            path: '/taxi',
            component: resolve => require(['../components/page/taxi.vue'], resolve)
        },
        {
            path: '/bus',
            component: resolve => require(['../components/page/bus.vue'], resolve)
        },
        {
            path: '/subway',
            component: resolve => require(['../components/page/subway.vue'], resolve)
        },
        {
            path: '/parkinglot',
            component: resolve => require(['../components/page/parkinglot.vue'], resolve)
        },
        {
            path: '/shuttleBus',
            component: resolve => require(['../components/page/shuttleBus.vue'], resolve)
        },
        {
            path: '/carRental',
            component: resolve => require(['../components/page/carRental.vue'], resolve)
        },
        {
            path: '/airportBus',
            component: resolve => require(['../components/page/airportBus.vue'], resolve)
        },
        {
            path: '/airportItem',
            component: resolve => require(['../components/page/airportItem.vue'], resolve)
        },       
        {
            path: '/busItem',
            component: resolve => require(['../components/page/busItem.vue'], resolve)
        },
        {
            path: '/provinBusItem',
            component: resolve => require(['../components/page/provinBusItem.vue'], resolve)
        }   
    ]
})
