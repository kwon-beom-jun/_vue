<template>
  <input type="text" @keydown.tab.prevent="callTab" />
  <p>{{ sampleData }}</p>
</template>



<script>

/**
 * 
 * Vue 라이프사이클
 *  - https://velog.io/@kungsboy/Vue-3.0-%EB%B7%B0-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%9D%BC%EC%9D%B4%ED%94%84-%EC%82%AC%EC%9D%B4%ED%81%B4LifeCyle
 * 
 * Dom
 *  - https://velog.io/@kungsboy/Vue-3.0-Vue.js-%EB%9E%80
 * 
 * 이전에는 Html을 Dom이 객체로 생성했고 우리가 Dom 객체의 값을 직접적(document.*~)으로 지워줬는데
 * Vue를 사용하면 우리가 직접 Dom객체를 직접적으로 지우는것이 아닌 Vue문법을 사용하여 Vue에게 인가
 * .Vue 확장자가 붙은것을 관리
 * 
 * library vs framework
 *  → 제어의 역전이 누구에게 있냐이다.(제어의 흐름, 누가 핸들링을 하는 주체인가) 스프링 프레임워크를 예시
 * 
 * 
 */

// vue 파일들을 vue 인스턴스라고 표현하기도 함 (메모리에 올라가는것을 인스턴스라 표현)

export default {
  components: [],
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {
    console.log('beforeCreate() ..')
  },
  // Vue객체(컨테이너?)가 생성됨
  created() {
    console.log('created() ..')
  },
  beforeMount() {
    console.log('beforeMount() ..')
  },
  // 화면 부착
  mounted() {
    console.log('mounted() ..')
  },
  beforeUpdate() {
    console.log('beforeUpdate() ..')
  },
  // 화면 업데이트
  updated() {
    console.log('updated() ..')
  },
  beforeUnmount() {
    console.log('beforeUnmount() ..')
  },
  unmounted() {
    console.log('unmounted() ..')
  },
  methods: {
    callTab() {
      console.log('tab event')
    }
  }
}
</script>


<style scoped>
</style>