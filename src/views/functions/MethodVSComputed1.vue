<template>
  <div>
    <h1 >{{ reverseMessage() }}</h1>
    <h1>{{ reverseMessage() }}</h1>
    <h1>{{ reverseMessage() }}</h1>
    <h1>{{ reverseMessage() }}</h1>
  </div>
  <hr/>
  <div>
    <h1>{{ computedMessage }}</h1>
    <h1>{{ computedMessage }}</h1>
    <h1>{{ computedMessage }}</h1>
    <h1>{{ computedMessage }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Computed",
    };
  },
  methods: {
    reverseMessage() {
      console.log("이것은 reverseMessage메소드 입니다.");
      //split() 메서드는 받은 문자열을 인수에 있는 문자열로 나눠서 배열 - split('') 는 문자 하나하나를 배열로 만들고
      //reverse() 메서드는 배열의 순서를 반대로 만들어 줍니다.
      //join() 메서드는 배열의 값 사이에 인자값을 넣은 문자열을 만들어 줍니다.
      //https://kpbro.tistory.com/3
      return this.msg.split("").reverse().join("");
    },
  },
  /**
   * computed는 데이터로 표현
   * 
   *    문법적으로 method와의 차이
   *      computed는 return값이 있어야함(데이터 처럼 취급)
   *      computed는 파라미터 사용 불가 → 호출시 '괄호()' 사용하지 않음
   *      computed는 Key : Value 값으로 사용
   *        ex) computedMessage : this.msg.split("").reverse().join("");
   *      method는 {{ 함수 }} 에서는 '괄호()' 가 꼭 있어야함 태그 내부에서는 사용때 파라미터가 없을 시 () 없어도 가능
   * 
   *    호출 시기
   *      한번 호출(computedMessage : Hello Computed) → 캐쉬 공간에 저장
   *       → 해당 데이터가 변화가 없으면, 함수를 호출하지 않고 캐쉬의 값을 사용
   *        
   * 
   */
  computed: {
    computedMessage() {
      console.log("이것은 computed메소드 입니다.");
      return this.msg.split("").reverse().join("");
    },
  },
};
</script>


<style scoped>
</style>