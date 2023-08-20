<template>
  <div>
    <h2>믹스인이 필요한 사항에 대한 예제 첫번째</h2>
    <div>시간:{{ getTime() }}</div>
  </div>
</template>
<script>
// https://velog.io/@bluestragglr/Vue.js-Mixin-%EA%B8%B0%EB%8A%A5-%EB%B0%98%EB%B3%B5-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0
// Mixin 이란?
// - 공통 모듈을 따로 떼내어 만듦.
// - 스프링의 AOP 기능과 유사.

// ## 컴포넌트 VS 믹스인
// -믹스인은 컴포넌트에 들어가는 공통된 모듈(함수)들을 따로 만들어 놓음

export default {
  methods: {
    getTime() {
      let date = new Date()
      console.log(date)

      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${date.getHours()}/${date.getMinutes()}`
    }
  }
}
</script>