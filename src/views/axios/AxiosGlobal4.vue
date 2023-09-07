<template>
  <div v-for="post in postData" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>



<script>
// import axios from "axios"; → main.js 설정

export default {
  data() {
    return {
      postData:{
        posts:[],
        post_test:'test'
      }
    };
  },

  // mounted : 컴포넌트가 vue에 붙착되었을때 실행
  // mounted : vue runtime 내부함수
  //    메소드          객체
  //    메소드명(){}    객체:{}
  //    mounted(){}     methods:{}
  mounted() {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts')
      // CallBack 함수
      .then(Response => {
        console.log(Response);
        this.postData = Response.data;
      })
  },
};

</script>


<style scoped>
</style>