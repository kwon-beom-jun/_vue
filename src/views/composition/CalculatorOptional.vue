<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
/**
  vue2(optional api)
    일반적인 data(), mounted() 등을 말함

  vue3(composition api)
    vue2의 상위호환
    vue2보다 javascript 문법을 더 사용
 */
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  methods: {
    plusNumbers() {
      this.result = parseInt(this.num1) + parseInt(this.num2)
    }
  }
}
</script>