<template>
  <div>
    <div class="home">
      <input type="text" v-model="search" />
      <p>{{ search }}</p>
      <div v-for="name in matchingNames" :key="name">
        {{ name }}
      </div>
      <div>{{ searchNames }}</div>
    </div>
  </div>
</template>


<script>
/*
  Vue 제공 함수 : method, computed, watch
*/
// import { ref, reactive, computed, watch } from 'vue'
import {  computed, ref, watch, onMounted, onUnmounted, onUpdated } from 'vue'

export default {
  setup() {

    const search = ref('default');
    const names = ref(['abc','def','aaa','ghi'])
    
    // computed(콜백함수) 예제
    const matchingNames = computed(() => {
     return names.value.filter((name) => name.includes(search.value))
    })
    const searchNames = computed(() => {
     return search;
    })

    // watch(변수, 콜백함수)
    // search 값이 변동될때마다 console 로그를 찍어줌
    watch(search, () => console.log("와치함수 실행"))

    // mounted method
    onMounted(() => console.log("Composition Mount Method"));
    onUnmounted(() => console.log("Composition onUnmounted"));
    onUpdated(() => console.log("Composition onUpdated"));
    console.log("Life Cycle 확인");

    return {
      search,
      names,
      matchingNames,
      searchNames,
    }
  },

  mounted() {
    console.log("Optional Mount Method")
  }
}
</script>