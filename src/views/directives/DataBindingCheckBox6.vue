<template>
  <div>{{ checked }}</div>
  <div>
    <input v-model="checked" type="checkbox" true-value="남" false-value="여"/>
  </div>
</template>

<script>
/*
  동적 바인딩시 주의 : v-model 타입 필수 입력
*/
export default{
  data(){
    return{
      checked:true,
    };
  },
};
</script>

<style scoped>

</style>