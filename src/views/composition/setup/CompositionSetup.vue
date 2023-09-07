<template>
  <div>
    <h1>{{ readersNumber }} {{ book.title }}</h1>
  </div>
  <br>
  <button @click="incresement">incresement</button>
</template>


<!-- 
  순서
  optional -> composition -> composition setup
-->
<!-- Composition Setup API : 스크립트 셋업 -->
<!-- Set Up 함수 - 생성자 느낌? -->
<!--
  <script setup> 최상위 바인딩에 대한 자체 스크립트 범위를 만듬
  그러나 어떤 경우에는 모듈 범위에서 실행되어야 하는 코드가 있음
  이 RFC의 두 가지 구체적인 예는 다음과 같습니다.
    - 명명된 내보내기 선언
    - 한 번만 실행되는 전역 부작용을 만듭니다.
  <script>이와 같은 스크립트 설정과 함께 일반 블록을 추가하면 됩니다 .
-->
<script setup>

  // export default가 없음

  import {ref, reactive} from 'vue'
  
  const readersNumber = ref(0);
  const book = reactive({title:'Script Set Up'})

  const incresement = () => {
    readersNumber.value += 1
  }

  // return이 없음

</script>
