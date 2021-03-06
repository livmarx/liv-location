import Vue from 'vue';
import Router from 'vue-router';
import GMap from '@/components/home/GMap';
import SignUp from '@/components/auth/SignUp.vue';
import LogIn from '@/components/auth/LogIn.vue';
import firebase from 'firebase';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true,
      },
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

// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      // User is signed in. Proceed to route
      next();
    } else {
      // No user is signed in. Redirect to login
      next({
        name: 'LogIn',
      });
    }
  } else {
    // if route is not guarded by auth, proceed
    next();
  }
});

export default router;
