<template>
  <div>
    <textarea v-model="message"></textarea>
    <div>{{ message }}</div>
  </div>
</template>

<script>
/*
  동적 바인딩시 주의 : v-model 타입 필수 입력
*/
export default{
  data(){
    return{
      message:"여러줄을 입력 할 수 있는 textarea 입니다.",
    };
  },
};
</script>

<style scoped>

</style>