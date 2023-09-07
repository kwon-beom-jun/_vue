<template>
  
  <!-- <PageTitle/>
  <PageTitle/>
  <pageTitle/>
  <pagetitle/> 카멜 케이스가 아니라서 데이터가 안나옴
  <hr/>
  <Page-title/>
  <page-title/>
  <page-Title/> -->

  <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/><hr/>
  <PageTitle/><hr/>
  <PageTitle :level="2"/><hr/>
  <PageTitle :level="2" :isBool="false"/><hr/>
  <PageTitle :arrNum="[1,2,3,4]"/><hr/>
  <PageTitle :objTitle="{id:2, title:'abcd'}"/>
  
</template>


<!--
    데이터 전송 방식
      자식 -> 부모 : Emit
      부모 -> 자식 : props // 태그 속성을 만드는 것임
        props > title : PageTitle의 title 속성을 만든것임
-->
<script>

/** 파일 이름 짓는 법 (관습)
      1. camel case : Page + Title  : C, Java
      2. snake case : Page_title    : Python
      
    부모(props tag) -> 자식(props) => 데이터 호출
    부모(this.$refs) -> 자식(ref) => 자식의 메소드 호출
 */
import PageTitle from '@/views/compo/PageTitle.vue'

// 컴포넌트 개념 : 자바스크립트 + html
// 컴포넌트 단위 : .vue 파일
export default {
  components:{PageTitle}
};

</script>


<style scoped>
</style>