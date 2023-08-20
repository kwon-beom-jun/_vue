<template>
  <div>
    <h2>믹스인이 필요한 사항에 대한 예제 두번째</h2>
    <input type="text" />
    <div>시간:{{ getTime() }}</div>
  </div>
</template>
<script>
export default {
  methods: {
    getTime: function () {
      let date = new Date()
      console.log(date)

      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${date.getHours()}/${date.getMinutes()}`
    }
  }
}
</script>