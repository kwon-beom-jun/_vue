<template>
  <label>
    <input type="radio" v-bind:value="radioValue1" v-model="picked" />
    서울
  </label>
  <label>
    <input type="radio" v-bind:value="radioValue2" v-model="picked" />
    부산
  </label>
  <label>
    <input type="radio" v-bind:value="radioValue3" v-model="picked" />
    제주도
  </label>
  <hr />
  <span>선택한 지역 : {{ picked }}</span>
  <input type="radio" v-model="picked" />
</template>

<script>
export default {
  data() {
    return {
      picked: '',
      radioValue1: 'data.서울',
      radioValue2: 'data.부산',
      radioValue3: 'data.제주',
      checked: [],
    };
  },
};
</script>

<style scoped></style>