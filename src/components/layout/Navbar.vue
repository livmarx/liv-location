<template>
  <div class="navbar">
    <nav class="deep-purple">
      <div class="container">
        <a href="" class="brand-logo left">GeoLiv</a>
        <ul class="right">
          <li>
            <router-link :to="{name: 'SignUp'}">
              Sign Up
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'GMap'}">
              Log In
            </router-link>
          </li>
          <li>
            <a href="" @click="logout">
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
          this.$router.push({ name: 'SignUp' });
        });
    },
  },
};
</script>

<style>
</style>
