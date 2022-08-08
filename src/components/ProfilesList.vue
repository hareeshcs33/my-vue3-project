<template>
    <h1>Profile Page</h1>
    <input type="text" v-model="name" placeholder="Profile name" />
    <button @click="searchProfile">Search</button>
</template>
<script>
export default {
    name: 'ProfilesList',
    data(){
        return {
            name:''
        }
    },
    methods: {
        searchProfile(){
            console.log('searchProfile');
            if(this.name && this.name.length > 2){
                this.$router.push(`/profile/${this.name}`)
            }
        }
    }
}
</script>