<template>
  <div>
    <!-- <img alt="액박1" v-bind:src="imgSrc2" /> -->
    <img :alt="altStr" v-bind:src="imgSrc2" />
    <hr/>
    <img :alt="altStr2" :src="imgSrc" />
  </div>
</template>

<script>
// v-bind는 제이쿼리의 attr과 비슷한 역할
// html의 속성인 id,class, style 등에 model data와 연결
export default {
  data() {
    return {
      imgSrc2:'https://kr.vuejs.org/images/logo.png',
      imgSrc:'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg',
      altStr:"잘못된 주소입니다.",
      altStr2:"경로를 확인해 주세요",
    };
  },
};
</script>

<style scoped></style>