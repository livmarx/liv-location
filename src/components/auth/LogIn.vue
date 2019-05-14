<template>
  <div class="login container">
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
import firebase from 'firebase';
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
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user);
            this.$router.push({ name: 'GMap' });
          })
          .catch(err => {
            console.error(err);
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = 'Please fill in both fields';
      }
    },
  },
};
</script>

<style>
.login {
  max-width: 400px;
  margin-top: 60px;
}

.login h2 {
  font-size: 2.4em;
}
.login .field {
  margin-bottom: 16px;
}
</style>


