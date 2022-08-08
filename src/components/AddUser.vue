<template>
    <div class="add-user">
        <h1>Add User</h1>
        <form class="add-user">
            <input type="text" v-model="userDetail.name" placeholder="Enter Name" />
            <input type="text" v-model="userDetail.email" placeholder="Enter Email" />
            <input type="text" v-model="userDetail.password" placeholder="Enter User Name" />
            <button type="button" @click="addUser">Add User</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'addUser',
    data(){
        return {
            userDetail: {
                name: '',
                password: '',
                email: ''
            },
            userStatus: false
        }
    },
    methods: {
        async addUser(){
            const result = await axios.post('http://localhost:3000/users',this.userDetail)
            if(result.status===201){
                this.$router.push({name:'UserDetails'})
            }
            console.log('result',result)
        }
    }
}
</script>
<style scoped>
h1,
p {
  text-align: center;
}
.add-user {
  text-align: center;
}
.add-user input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 0 auto 15px;
  border: 1px solid skyblue;
}
.add-user button {
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