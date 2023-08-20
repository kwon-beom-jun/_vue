<template>
  <section>
    <!-- event.preventDefault()[@submit.prevent]
        일반 자바스크립트에서 form의 기본 동작 이벤트(새로고침)를 하지 않도록 제어하는 
        이벤트. Vue에서는 대신에 v-on:submit.prevent 를 사용 -->
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">UserID:</label>
        <input type="text" id="userId" v-model="postData.userId" />
      </div>
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="postData.title" />
      </div>
      <div>
        <label for="body">Body: </label>
        <textarea id="body" rows="6" cols="22" v-model="postData.body"></textarea>
      </div>
      <button>Create Post</button>
    </form>
  </section>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      postData:{
        userId:'',
        title:'',
        bod:''
      }
    };
  },

  // Post 방식으로 보낼때
  methods: {
    createPost(){
      axios.post('https://jsonplaceholder.typicode.com/posts', this.postData)
        .then(Response => console.log(Response))
    }
  },
};

</script>


<style scoped>
</style>