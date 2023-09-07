<template>
  <div>
      <h1>{{ msg }}</h1>

      <h1> getters 함수에 의한 호출</h1>
      <div v-for="user in getUsers" :key="user.id">
        {{ user.id }}  :{{ user.name }} : {{ user.address }}
      </div>

      <h1> state를 그대로 접근(읽기)  state 변수는 직접 변경 못함</h1>
      <div v-for="user in users" :key="user.id">
        {{ user.id }} {{ user.name }} {{ user.address }}
      </div>

  </div>
</template>



<script setup>

import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore(); // 메모리에 올라간 내가 만든 vuex(index.js) createStore 저장소를 끌고옴
const msg = ref('뷰 예제 샘플')

const getUsers = computed( () => {
  console.log('함수 : getUsers 전')

  // getter 함수 접근
  // return store.getters.getUsers
  
  // 바로 접근 가능함(getter 사용 이유는 다른 어떠한 작업을 하고 되돌려 주기 위해 주로 사용)
  return store.state.users
  
})

const users = computed( () => {
  return store.state.users
})

// $store.dispatch()은 actions에 부탁하는 것이고, $store.commit은 mutations에 부탁한다.
// 처음 mount 할 때 값 주입
onMounted(() => {
  console.log('온마운트 함수 호출')
  store.dispatch('fetchUsers')
})

</script>