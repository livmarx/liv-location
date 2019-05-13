<template>
    <div class="signup container">
    <form @submit.prevent="signUp" class="card-panel">
      <h2 class="center deep-purple-text">Sign Up</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias">
      </div>
      <p class="red-text center" v-if="feedback">{{ this.feedback }}</p>
      <div class="field">
        <button class="btn deep-purple">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify';
import db from '@/firebase/init.js';
export default {
  name: 'SighUp',
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
    };
  },
  methods: {
    signUp() {
      // check user has entered alias:
      if (this.alias) {
        // create a slugified version of alias - use as id:
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~,()'"!\-:]/g,
          lower: true,
        });
        // Check if slugified alias is already taken by another user:
        let ref = db.collection('users').doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = 'This alias already exists. Pleasse pick new one.';
          } else {
            // Adds User to firestore
            this.feedback = 'Great Choice!!!!!!!!!!!.';
          }
        });
      } else {
        this.feedback = 'You must enter an alias';
      }
    },
  },
};
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}

.signup h2 {
  font-size: 2.4em;
}

.signup .field {
  margin-bottom: 16px;
}
</style>
