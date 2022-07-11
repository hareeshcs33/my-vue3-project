<template>
  <div>
    <h1>{{ profile }} Profile</h1>
    <!-- {{userData}} -->
    <div>
      <div v-for="data in userData" :key="data.userId">
        <span>{{ data.userId }}</span> |
        <span>{{ data.id }}</span>
        <h2>{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";

export default {
  name: "Profile-view",
  data() {
    return {
      profile: "",
      userData: null,
    };
  },
  async mounted() {
    const route = useRoute();
    this.profile = route.params.name;
    console.log("route", route.params.name);
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => (this.userData = data));
    console.log("userdata", this.userData);
  },
};
</script>
