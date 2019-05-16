<template>
  <div class="navbar">
    <nav class="deep-purple">
      <div class="container">
        <router-link :to="{name: 'GMap'}" class="brand-logo left">GeoLiv</router-link>
        <ul class="right">
          <li v-if="!user">
            <router-link :to="{name: 'SignUp'}">
              Sign Up
            </router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{name: 'LogIn'}">
              Log In
            </router-link>
          </li>
          <li v-if="user">
            <a @click="logout">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Navbar',
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'LogIn' });
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style>
</style>
