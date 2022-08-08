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
<style scoped>
h1,
p {
  text-align: center;
}
.register {
  text-align: center;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 0 auto 15px;
  border: 1px solid skyblue;
}
.register button {
  display: block;
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background: skyblue;
  margin: auto;
  cursor: pointer;
}
</style>
