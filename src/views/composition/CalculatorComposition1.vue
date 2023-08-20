<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
  <hr/>
  
  <!-- Binding 예제 -->
  <div>
    <strong>컴포지션에서의 바인딩 : {{ num }}</strong>

  </div>
</template>


<script>
/**
  vue2(optional api)
    일반적인 data(), mounted() 등을 말함

  vue3(composition api)
    vue2의 상위호환
    vue2보다 javascript 문법을 더 사용

  Composition API 와 setup 함수의 등장
    컴포지션 API에서 첫번째 특징이 setup() 함수 이다.

  setup() 함수에 관하여
    - setup 함수는, Vue 3 에서 새로 나온 Composition API 이다.
    - 기존에 data, methods 등으로 흩어져있던것을, 하나의 장소로 모으게 해준다.
    - template 에서 사용하고자하는 변수, 함수등을 정의한뒤,
    - 객체에 하나씩 골라담아, return 해주면 template 에서 해당 변수와 함수를 접근할수있다
  
  Optional | Composition 차이
    Optional은 주로 Vue문법을 사용하였고 Composition은 Javscript문법을 주로 사용
    ex) data() vue문법 → let 변수 = reactive({}) javascript 문법

  Composition API로 변경되는 이유
    - avasciprt와 별개로 vue를 다시 공부해야되는 절차를 가져야 하므로 javascript만으로도 쉽게 접근하도록 변경
    - javascript를 사용하면 시장성도 증가함
  
 */

// 반응형 함수 제공 (바인딩)
import {reactive, ref} from 'vue'

export default {
  setup() {

//  let state = {} 원래 javascript 함수 : 바인딩 X
//  reactive 사용하여 바인딩 시켜줌
    let state = reactive({
      num1:0,
      num2:0,
      result:0
    })

    function plusNumbers() {
      state.result = parseInt(state.num1) + parseInt(state.num2)
    }

    // Binding 예제
    const num = ref(1);


    // reactive로 선언된 state와 plusNumbers 함수를 반환
    // 기존 data, methods 옵션 처럼 사용이 가능해짐
    // binding 시키고자 하는 함수는 선언해줘야함
    return { 
      state,
      plusNumbers,
      num,
    }
  }
}
</script>