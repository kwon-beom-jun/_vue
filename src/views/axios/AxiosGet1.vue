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
      ???? https://jsonplaceholder.typicode.com/posts 해당 사이트 들어가면 JSON 데이터가 있음. → 이것은 사이트에 있는것이지 사이트에서 보내주는것이 아님
      강사님왈 : 다시 뷰 페이지로 보내주는 로직이 있다함 (그러면 왔던곳으로 다시 보내주는 맵핑은 어떻게 하는지??)
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