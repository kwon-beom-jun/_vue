<template>
  <h5>{{ msg }}</h5>
  <h5>{{ title }}</h5>
  <h5>{{ level }}</h5>
  <h5 v-if="isBool">{{ isBool }}</h5>
  <h5>{{ arrNum }}</h5>
  <h5 v-for="(item, index) in arrNum" :key="index">
    {{ item }}
  </h5>
  <h5>objTitle 객체 : {{ objTitle }}</h5>
  <h5>objTitle 호출 : {{ objTitle.id }} :: {{ objTitle.title }}</h5>
</template>



<script>

export default {
  data() {
    return {
      msg:"메시지 입니다."
    };
  },
  props:{
    title:{
      type:String, // String 태그 정의
      default:'페이지 제목입니다',
    },
    level:{
      type:Number, // Number 태그 정의
      default:1,
    },
    isBool:{
      type:Boolean, // Boolean 태그 정의
      default:true,
    },
    arrNum:{
      type:Array, // Array 태그 정의
      default:function () {
        return [1,2];
      },
    },
    objTitle:{
      type:Object, // Object 태그 정의
      default:function () {
        return {id:1, title:'default'};
      },
    },
  }
};

</script>


<style scoped>
</style>