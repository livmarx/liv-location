import Vue from 'vue';
import Router from 'vue-router';
import GMap from '@/components/home/GMap';
import SignUp from '@/components/auth/SignUp.vue';
import LogIn from '@/components/auth/LogIn.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
    },
  ],
});
