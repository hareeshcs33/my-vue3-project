<template>
  <nav class="nav-list">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/user-details">User Details</router-link> |
    <router-link to="/add-user">Add User</router-link> |
    <router-link to="/signup">Sign Up</router-link> |
    <a @click="logout" href="#">LogOut</a>
  </nav>
  <!-- <div>
    <router-link to="/profile/hareesh">Hareesh Profile</router-link> |
    <router-link to="/profile/nivas">Nivas Profile</router-link>
  </div> -->
  <router-view />
</template>
<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({name:'LogIn'})
      console.log('logout')
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  color: #000;
  box-sizing: border-box;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;

  a {
    padding: 5px;
  }
}
</style>
