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
                <td class="action-block">
                    <router-link :to="'/update-user/'+userDetail.id">Update</router-link>
                    <button @click="deleteUser(userDetail.id)">Delete</button>
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
        async deleteUser(id){
            console.log('Delete user id',id)
            const result = await axios.delete(`http://localhost:3000/users/${id}`)
            console.log(result)
            if(result.status===200){
                this.loadUserData();
            }
        },
        async loadUserData(){
            try {
                // let result = await axios.get("https://jsonplaceholder.typicode.com/users");
                this.userDetailsStatus = true;
                let result = await axios.get("http://localhost:3000/users");
                if(result.data) {
                    this.userDetailsStatus = false;
                    this.userDetails = result.data;
                    localStorage.setItem('user-info',JSON.stringify(result.data))
                }
                console.log(result);
            } catch(e){
                console.error(e);
            }
            
        }
    },
    async mounted(){
        this.loadUserData();
    }
}
</script>
<style src="../styles/common.css"></style>