<template>
  <div class="lingin container">
    <form @submit.prevent="logIn()" class="card-panel">
      <h2 class="center deep-purple-text">Log In</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" class="email" v-model="email">
      </div>
       <div class="field">
        <label for="password">Password:</label>
        <input type="password" class="password" v-model="password">
      </div>
      <p class="feedback red-text center" v-if="feedback">{{ this.feedback }}</p>
      <div class="field">
        <button class="btn deep-purple">
          Log In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    logIn() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style>
</style>


