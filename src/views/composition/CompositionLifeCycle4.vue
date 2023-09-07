<template>
  <div>

  </div>
</template>
<script>
//https://kyounghwan01.github.io/Vue/vue3/composition-api/#life-cycle

// mounted -> onMounted
// unmounted -> onUnmounted
// updated -> onUpdated

// setup은 컴포넌트 라이프사이은 기존의 beforeCreate created 훅사이에서 실행 됨
// mounted 이전에 실행되므로 setup 함수 내에 this를 사용할수 없다.

import {onMounted, onUpdated, onUnmounted} from 'vue'

// this. : 해당 뷰를 호출한 것
// setup 메모리 업로드 전 : this.* 사용못함
// → onMounted : mounted 이후 this 사용 가능
// → onUpdated → onUnmounted (before등 제외)
export default {
  // 사용할 props를 배열내에 정의합니다.
  setup() {
    console.log('Set up 함수 호출')
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component onUnmounted'))
    onUpdated(() => console.log('component onUpdated'))
    // console.log(props.posts) // 받은 prop 사용가능
  }
}

</script>