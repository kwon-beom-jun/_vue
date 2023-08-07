<template>
  <div><button type="button" @click="one()">클릭 이벤트</button></div><hr/>
  <div><button type="button" v-on:click="one(),two()">여러개 함수 호출</button></div>

  <hr/>
  <!-- 파라미터가 없으면 () 생략 가능 -->
  <div>
    <p>The Counter is : {{ counter }}</p>
    <button type="button" v-on:click="increaseCounter">Add ++1</button>
  </div>

  <hr/>
  <!-- 파라미터 전달 하고 싶을때 -->
  <div>
    <p>The Count is : {{ count }}</p>
    <button type="button" @:click="setCount(7)">Set 7</button>
    <button type="button" @:click="setCount(0)">Set 0</button>
  </div>

</template>



<script>
//클릭 이벤트
//v-on:click 또는 @click="메소드명"
export default {
  data() {
    return {
      counter:0,
      count:0,
    };
  },
  methods: {
    increaseCounter(){
      this.counter = this.counter+1;
    },
    setCount(count){
      this.count = count;
    },
    one(){
      alert("1 입니다.");
    },
    two(){
      alert("2 입니다.");
    },
  },
};
</script>


<style scoped>
</style>