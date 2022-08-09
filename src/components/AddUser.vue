<template>
    <div class="add-user">
        <h1>Add User</h1>
        <form class="add-user">
            <input type="text" v-model="userDetail.name" placeholder="Enter Name" />
            <input type="text" v-model="userDetail.email" placeholder="Enter Email" />
            <input type="password" v-model="userDetail.password" placeholder="Enter password" />
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
            try {
                const result = await axios.post('http://localhost:3000/users',this.userDetail)
                if(result.status===201){
                    this.$router.push({name:'UserDetails'})
                }
                console.log('result',result) 
            } catch(e){
                console.error(e);
            }
            
        }
    }
}
</script>
<style src="../styles/common.css"></style>