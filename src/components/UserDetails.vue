<template>
    <div>
        <h1>Users Details</h1>
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
            userDetails: []
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
        let result = await axios.get("http://localhost:3000/users");
        this.userDetails = result.data;
        localStorage.setItem('user-info',JSON.stringify(result.data))
    }
}
</script>
<style scoped>
h1 {
    text-align: center;
}
table {
    border-spacing: 0;
    border: 1px solid #ccc;
    margin: 0 auto 40px;
}
table tr th {
    padding: 15px;
    border-bottom: 2px solid #000;
}
table tr td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    text-align: center;
}
</style>