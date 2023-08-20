<template>
  <div>
    <button class="btn btn-primary" @click="testMethod1">비동기 예제 버튼</button>  
    <button class="btn btn-primary" @click="testMethod2">동기 예제 테스트버튼</button>
  </div>
</template>



<script>

export default {
  data() {
    return {
      data1:[],
      data2:{}, // ??? : 배열 순서대로 나오는것을 객체로 하면 다르게 나온다 하심
      data3:[],
      data4:[],
    };
  },

  /**
   * ???
   *    1. 동기 통신 : 엄청 빠르게 버튼 연속클릭시 async, await가 먹히지 않는 이유
   *    2. 비동기 통신 : 강사님과 내 코드가 다르게 콘솔에 나오는 이유
   *    3. data() data2를 객체로 변경한 이유
   */
  methods:{

    // TEST : 엄청 빠르게 비동기 예제 버튼 연속클릭
    // 비동기 통신
    /** 
    testMethod1(){ // 내 코드
      this.data1 = this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data1 결과')
        console.log(res)
      })
      this.data2 = this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data2 결과')
        console.log(res)
      })
      this.data3 = this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data3 결과')
        console.log(res)
      })
      this.data4 = this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data4 결과')
        console.log(res)
      })
      console.log('======================================')
    }, */
    testMethod1(){ // 강사님 코드
      this.data1 = this.$axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        console.log("data1 결과")
        console.log(res)
      })
      this.data2 = this.$axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
        console.log("data2 결과")
        console.log(res)
      })
      this.data3 = this.$axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then(res => {
        console.log("data3 결과")
        console.log(res)
      })
      this.data4 = this.$axios.get("https://jsonplaceholder.typicode.com/comments?postId=1").then(res => {
        console.log("data4 결과")
        console.log(res)
      })
      console.log("============================")
    },


    // 동기 통신
    // async & await
    //  - 가장 최근에 나온 비동기 처리 패턴, 기존의 콜백함수와 프로미스의 단점을 보안한 문법
    //  - javascript 문법
    //  - async : 내부에 await을 붙이고자 하는 외부 함수 앞에 선언
    //  - await : async 내부의 동기화 하고자 하는 함수앞에 선언, 해당 함수가 끝날때까지 대기
    /** async testMethod2(){ // 내 코드
      this.data1 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data1 결과')
        console.log(res)
      })
      this.data2 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data2 결과')
        console.log(res)
      })
      this.data3 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data3 결과')
        console.log(res)
      })
      this.data4 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data4 결과')
        console.log(res)
      })
      await console.log('======================================')
    } */
    async testMethod2(){ // 강사님 코드
      this.data1 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data1 결과')
        console.log(res)
      })
      this.data2 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data2 결과')
        console.log(res)
      })
      this.data3 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data3 결과')
        console.log(res)
      })
      this.data4 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data4 결과')
        console.log(res)
      })
      console.log("============================")
    }


  }
};

</script>


<style scoped>
</style>