<template>
  <div class="navbar">
    <nav class="deep-purple">
      <div class="container">
        <router-link :to="{name: 'GMap'}" class="brand-logo left">GeoLiv</router-link>
        <ul class="right">
          <li>
            <router-link :to="{name: 'SignUp'}">
              Sign Up
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'LogIn'}">
              Log In
            </router-link>
          </li>
          <li >
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
    return {};
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
};
</script>

<style>
</style>
