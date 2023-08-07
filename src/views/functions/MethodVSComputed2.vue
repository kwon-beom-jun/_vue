<template>
  <input type="text" v-model="firstName" />
  <div>
    <h1>full name : {{ fullName }}</h1>
    <h1>full name : {{ getFullName() }}</h1>
  </div>
</template>

<script>
export default {
  /**
   * 궁금점 method()를 부를때는 참조로 불러? computed는 캐시 메모리에서 어떻게 가져오는지?
   */
  data() {
    return {
      firstName : "길동",
      lastName : "홍",
    };
  },
  methods: {
    getFullName() {
      console.log("Method Function 호출");
      return this.firstName + this.lastName;
    },
  },

  // 변화 감지 요인?
  /**
   * data() 안에 내부요소와 무관하게 캐시 메모리에 데이터를 key, value로 저장
   * 그러면 함수에 사용된 data()요소[firstName, lastName]의 데이터를 참조하고있나? 참조된것이 호출되면 재호출되는?
   * 그렇다고 치기에는 변수값이 변경되면 다른것들도 전부 변경(다른 메소드들도 전부 동작함)
   * -> 강사님 얘기는 v-model을 사용하여 데이터 바인딩을 해서 그런다고하심. / v-model 말고 다른 상황 테스트?
   * -> MethodVSWatch3 설명 확인하기
   */
  computed: {
    fullName() {
      console.log("Computed Function 호출");
      return this.firstName + this.lastName;
    },
  },
};
</script>


<style scoped>
</style>