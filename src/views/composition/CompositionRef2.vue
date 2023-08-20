<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
    <div>ref에서는 .value를 붙여야 접근할 수 있음. 템플릿 안에서 사용할 때는 붙이지 않아도 됨 {{ num1 }}</div>
    <div>num2: {{ state.num2 }}</div>
  </div>
</template>


<script>
/*
반응형의 의미 : 컴포지션 API에서는 2가지 유형(reactive, ref)의 변경 가능한 반응형 데이터를 만들 수 있습니다.
반응형 데이터는 값이 변경됨에 따라 이를 감지하고 해당 값에 종속된 작업(Side Effect)이 수행됩니다.

ref와 reactive의 차이
1. 타입의 제한
ref에서는 String, Number, Object 등 어떤 타입에서든 사용 가능
reactive에서는 Object, Array, Map, Set과 같은 타입에서만 사용 가능
reactive에서 String, Number의 값을 초기에 지정하여 사용할 경우 원시값에 대해서는 반응형을 가지지 않음

2.접근 방식
ref에서는 .value를 붙여야 접근할 수 있음. <template> 안에서 사용할 때는 붙이지 않아도 됨
reactive는 .value를 붙이지 않아도 접근할 수 있음.

잘 설명된 사이트
https://geundung.dev/108?category=782810

*/
import { ref, reactive } from 'vue'

export default {
  setup() {
    /////////////////////////////////// 변수 선언 ///////////////////////////////////
    let num1 = ref(0)

    let state = reactive({
      //reactive를 이용해서 num1, num2, result를 실시간 변경사항에 대한 반응형 적용
      num2: 0,
      result: 0
    })
    ////////////////////////////////////////////////////////////////////////////////

    // ※ 주의 ※
    // num1은 .value를 붙이고 num2는 state.을 붙여야 한다
    // num1을 html에서 변수 사용 시 num1.value가 아닌 num1로만 기입해서 사용해야한다
    function plusNumbers() {
      let num = parseInt(num1.value) + parseInt(state.num2)
      // state.result = (num == NaN) ? '기입을 제대로 해주세요' : num;
      state.result = isNaN(num) ? '기입을 제대로 해주세요' : num
    }
    
    return {
      num1,
      state,
      plusNumbers
    }
  }
}
</script>