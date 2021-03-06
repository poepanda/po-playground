import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/Welcome';
import Lab from '@/pages/Lab/router';
import Scrapbook from '@/pages/Scrapbook/router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    ...Lab,
    ...Scrapbook,
  ],
});
