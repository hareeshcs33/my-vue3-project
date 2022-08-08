<template>
  <h1>Log In</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="LogIn">LogIn</button>
    <p>Create Account</p>
    <!-- <button @click="this.$router.push('/signup')">SignUp</button> -->
    <router-link to="/signup">SignUp</router-link>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'LogIn',
  data() {
    return {
      name: '',
      password: '',
      email: '',
    }
  },
  methods: {
    async LogIn() {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/users?email=${this.email}&name=${this.name}`,
      )
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]))
        this.$router.push({ name: 'home' })
      }
      console.log('result', result)
    },
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (user) {
      this.$router.push({ name: 'home' })
    }
  },
}
</script>
<style src="../styles/common.css"></style>
