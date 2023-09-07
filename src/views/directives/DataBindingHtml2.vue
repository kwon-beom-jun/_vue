<template>
  <div>
    {{ htmlString }}
  </div>
  <div v-html="htmlString"></div>
</template>

<script>
//html 원시 데이터 바인딩
//v-html 다이렉티브(v-:다이렉티브)를 사용 해야함
//vue 에서는 v- 접두어로 사용됨 - 한마디로 vue 문법 임
//https://velog.io/@kungsboy/Vue-3.0-Directive%EB%94%94%EB%A0%89%ED%8B%B0%EB%B8%8C
export default{
  data(){
    return{
      htmlString:'<p style="color:red">This is a red String.</p>'
    };
  },
};
</script>

<style scoped>

</style>