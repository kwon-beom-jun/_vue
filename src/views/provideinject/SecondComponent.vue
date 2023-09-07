<template>
  <div class="comp comp-tcolor">
    <p class="comp-name">Second Component</p>
    <p>props : {{ name }}</p>
    <ThirdComponent :name="name"/>
  </div>
</template>

<script>
import ThirdComponent from './ThirdComponent.vue';

export default {
  components:{
    ThirdComponent,
  },
  props: {
    name: String
  },
}
</script>

<style>
</style>