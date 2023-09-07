<template>
  <div>
    <h2>믹스인을 사용한 에제</h2>
    <input type="text" />
    <strong><div>시간-1 : {{ $callTime() }}</div></strong>
    <strong><div>시간-2 : {{ $callTime() }}</div></strong>
  </div>
</template>
<script>
//https://hdevstudy.tistory.com/191

/**
 * mixin : main.js에서 전역 컴포넌트로 추가함
 *  
 * mixin은 Spring AOP와 비슷하다고 하지만
 * 현재까지는 main.js에 사용하고픈 컴포넌트를 전역변수로 mixin으로 등록하고
 * 사용하고싶은 곳에서 'tihs.$변수이름'으로 빼오는 형식
 * AOP처럼 경로를 가지고 전체적으로 컨트롤하는 느낌이 아님
 */

// @ : src 폴더
// 전역 등록하지 않았을때
// import ApiMixin from '@/mixins/mixins.js'
// export default -> mixins: [ApiMixin]

export default {
  // mixins: [ApiMixin]
  data() {
    return {
      time:''
    }
  },
  mounted() {
    this.time = this.$callTime()
  },
}
</script>