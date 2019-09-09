import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car.vue'),
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/My.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue'),
    },
    {
      path: '/vantlist',
      name: 'vantlist',
      component: () => import('@/views/VantList.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/Detail.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue'),
    },
  ],
});
