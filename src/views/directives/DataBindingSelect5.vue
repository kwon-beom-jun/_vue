<template>
  <div>{{ city }}</div>
  <div>
    <!-- <select onchange="fontSize(this.value)"/> onchange → v-model -->
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주도</option>
      <option value="053">대구</option>
    </select>
  </div>
</template>

<script>
/*
  동적 바인딩시 주의 : v-model 타입 필수 입력
*/
export default{
  data(){
    return{
      city:'064',
    };
  },
};
</script>

<style scoped>

</style>