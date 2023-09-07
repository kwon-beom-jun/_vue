<template>
  <!-- 현재 Tab은 기능 작동안함 -->
  <!-- LifeCycleEvent1 /binding21 확인하고 수정하기 -->
  <!-- 
    키를 눌렀다 뗐을 때
    키를 눌렀을 때
    키를 누르고 있을 때
  -->
  <input
    @keyup="printEvent('keyup')"
    @keydown="printEvent('keydown')"
    @keypress="printEvent('keypress')"
    v-model="name"
  />
  <hr/>
  <!-- 
    tap 키를 눌렀다 뗐을 때
    space 키를 눌렀을 때
    left 키를 누르고 있을 때
  -->
  <input
    @keyup.tab="printEvent('Tab keyup')"
    @keydwon.tab="printEvent('Tab keyup')"
    @keydown.space="printEvent('Space keydown')"
    v-model="name2"
  />
</template>



<script>
export default {
  data() {
    return {
      name:"",
      name2:"",
    };
  },
  methods: {
    printEvent(val){
      console.log(val);
    },
  },
};
</script>


<style scoped>
</style>