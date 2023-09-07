<template>

  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>

  <!-- <div v-for="(item, index) in posts" :key="index">
    <h2>{{ item.id }} {{ item.title }}</h2>
    <p>{{ item.body }}</p>
  </div> -->

</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  // mounted : .vue create 완료 후 화면 부착 시
  mounted() {
    /**
      axios(비동기 통신)
      Server에서 데이터를 받아올때 사용
     */
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      console.log(response.data);
      this.posts = response.data;
    });
  },
};

</script>


<style scoped>
</style>