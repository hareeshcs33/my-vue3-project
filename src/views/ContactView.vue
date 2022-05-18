<template>
    <div class="contact">
        <h1>This is Contact Page</h1>
        <CustomInput :label="'Username'" v-model="inputValue" />
        <div>inputValue: {{inputValue}}</div>
        <button @click="submitForm">Submit</button>
    </div>
</template>
<script>
import CustomInput from '../components/CustomInput.vue'

export default {
    data() {
        return {
            inputValue: ''
        }
    },
    components: {
        CustomInput
    },
    methods: {
        submitForm() {
            console.log('submit:-', this.inputValue)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>