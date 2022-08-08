<template>
    <div>
        <h1>Users Details</h1>
        <h1 v-if="userDetailsStatus">Loading...</h1>
        <table class="table">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
            </tr>
            <tr v-for="userDetail in userDetails" :key="userDetail.id">
                <td>{{userDetail.id}}</td>
                <td>{{userDetail.name}}</td>
                <td>{{userDetail.email}}</td>
                <td>{{userDetail.password}}</td>
                <td>
                    <router-link :to="'/update-user/'+userDetail.id">Update</router-link>
                    <!-- <button @click="deleteUser">Delete</button> -->
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'UserDetails',
    data(){
        return {
            userDetails: [],
            userDetailsStatus: false
        }
    },
    methods: {
        // updateUser(){
        //     // this.$router.push()
        //     console.log('Update')
        // },
        // deleteUser(){
        //     console.log('Delete')
        // }
    },
    async mounted(){
        // let result = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.userDetailsStatus = true;
        let result = await axios.get("http://localhost:3000/users");
        if(result.data) {
            this.userDetailsStatus = false;
            this.userDetails = result.data;
            localStorage.setItem('user-info',JSON.stringify(result.data))
        }
        console.log(result)
    }
}
</script>
<style src="../styles/common.css"></style>