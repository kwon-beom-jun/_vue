<template>
  <div class="comp comp-tcolor">
    <p class="comp-name">First Component</p>
    <p>props : {{ name }}</p>
    <SecondComponent :name="name"/>
  </div>
</template>

<script>
import SecondComponent from './SecondComponent.vue';

export default {
  components:{
    SecondComponent,
  },
  props: {
    name: String
  },
}
</script>

<style>
.comp {
  text-align: left;
  border: 1px solid #444444;
  padding: 30px;
}
.comp.comp-fcolor {
  background: #f5acac96;
}
.comp.comp-scolor {
  background: #0000ff30;
}
.comp.comp-tcolor {
  background: #ffff0052;
}
.comp-name {
  color: #0020f8;
}
</style>