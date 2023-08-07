<template>
  <h1>안녕하세요</h1>
  <h1>제목 : {{ title }}</h1>
  <h1>이름 : {{ name }}</h1>
  <h1>나이 : {{ age }}</h1>
</template>

<script>
// 문자열 바인딩 예제
// html에 텍스트 바인딩시 {{ }} 이중 괄호를 이용
export default{
  data(){
    return{
      title:"world",
      name:"홍길동",
      age:29,
    };
  },
};
</script>

<style scoped>

</style>