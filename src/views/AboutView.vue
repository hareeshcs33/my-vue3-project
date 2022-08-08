<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import waysOfObject from '../mixins/ways-of-object'

export default {
  data(){
    return {
      count: 10
    }
  },
  beforeCreate(){
    console.log('beforeCreate hook is called...', this.count)
  },
  created(){
    console.log('created hook called', this.count)
  },
  mixins: [
    waysOfObject
  ]
}

</script>