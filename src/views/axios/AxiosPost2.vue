<template>
  <h2>Axios Post 방식 예제</h2>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {

    };
  },

  // Post 방식으로 보낼때
  mounted() {
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      // 서버 데이터 송신
      // 데이터 형식이 정해져있음
      userId:'1',
      title:"Test Title",
      body:"Test Body",
    }).then((response) => {
      console.log(response);
    });
  },
};

</script>


<style scoped>
</style>