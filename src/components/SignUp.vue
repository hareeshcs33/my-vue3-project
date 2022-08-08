<template>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
    <p>User login</p>
    <!-- <button @click="this.$router.push('/login')">Login</button> -->
    <router-link to="/login">LogIn</router-link>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          name: this.name,
          email: this.email,
          password: this.password,
        }
      );
      console.log("result : ", result);
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
<style src="../styles/common.css"></style>
