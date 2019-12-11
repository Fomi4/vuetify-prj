import Vue from 'vue';
import Router from 'vue-router';

import SearchBar from '../components/SearchBar.vue';

import Home from '../pages/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'SearchBar',
      component: SearchBar,
    }
  ]
})