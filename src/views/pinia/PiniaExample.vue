<template>

  <h2>Hello Pinia!(피니아 예제)</h2>
  <h4>{{ counter.count  }}</h4>
  <h4>더블 카운트 :{{ counter.getDoubleCount  }}</h4>

  <!-- 저장소에 바로 접근 -->
  <button type="button" @click="counter.increment">하나 증가</button>
  
</template>

<script setup>
// import {useCouterStore} from '@/stores/counter' 
import {useCouterStore} from '@/stores/counter'

const counter = useCouterStore()
</script>

<style scoped></style>