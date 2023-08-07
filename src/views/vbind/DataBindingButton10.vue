<template>
  <div>
    <div>{{ textValue == "" }}</div>
    <div>{{ textValue }}</div>
    <input type="text" v-model="textValue"/>
    <button type="button" v-bind:disabled=" textValue == '' ">Click</button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      textValue:"",
    };
  },
};
</script>

<style scoped>

</style>