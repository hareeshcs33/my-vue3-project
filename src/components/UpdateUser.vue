<template>
    <div class="add-user">
        <h1>Update User</h1>
        <form class="add-user">
            <input type="text" v-model="userDetail.name" placeholder="Enter Name" />
            <input type="text" v-model="userDetail.email" placeholder="Enter Email" />
            <input type="text" v-model="userDetail.password" placeholder="Enter User Name" />
            <button type="button" @click="updateUser">Update User</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'updateUser',
    data(){
        return {
            userDetail: {
                name: '',
                password: '',
                email: ''
            }
        }
    },
    methods: {
        async updateUser(){
            const result = await axios.put(`http://localhost:3000/users/${this.$route.params.id}`,{
                name: this.userDetail.name,
                email: this.userDetail.email,
                password: this.userDetail.password
            })
            console.log('result',result)
            if(result.status===200) {
                this.$router.push({name:'UserDetails'})
            }
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/users/'+this.$route.params.id)
        console.log(result)
        console.log(this.$route.params.id)
        this.userDetail = result.data;
    }
}
</script>
<style src="../styles/common.css"></style>