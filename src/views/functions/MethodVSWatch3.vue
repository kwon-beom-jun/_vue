<template>
  <div>
    <h1>full name : {{ fullName }}</h1>
    <button type="button" @click="changeName" >변경</button>
    <button type="button" @click="changeLastName" >라스트 이름 변경</button>
  </div>
</template>

<script>
/**
 * 
 *  ※ 중요 ※
 *  Computed vs Watch vs Method
 *    - https://negabaro.github.io/archive/vuejs-computed__watch__methods
 * 
 */
export default {
  data() {
    return {
      firstName : "길동",
      lastName : "홍",
      fullName : "홍길동",
    };
  },
  methods: {
    changeName() {
      this.firstName = "Soooooooooooooo";
    },
    changeLastName() {
      this.lastName = "Son";
    },
  },
  // Watch는 감시하고자 하는 data() 요소를 메소드명으로 지정 (리스너 역할)
  watch: {
    firstName() {
      alert('변경 감지 First Name');
      this.fullName = this.firstName + "" + this.lastName;
    },
    lastName() {
      alert('변경 감지 Last Name');
      this.fullName = this.firstName + "" + this.lastName;
    },
  },
};
</script>


<style scoped>
</style>