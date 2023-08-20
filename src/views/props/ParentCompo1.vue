<template>
  <div>
    <ChildCompo1 ref="child_component"/>
    <hr/>
    <ChildCompo2 ref="child_component2"/>
  </div>
</template>

<script>
import ChildCompo1 from './ChildCompo1.vue';
import ChildCompo2 from './ChildCompo2.vue';

// 부모컴포넌트에서 자식 컴포넌트 이벤트 직접 발생 시키기
/**
 * 부모(props tag) -> 자식(props) => 데이터 호출
 * 부모(this.$refs) -> 자식(ref) => 자식의 메소드 호출
 */
export default {

  components:{ChildCompo1, ChildCompo2},

  /**
   * ref 속성
   *    vue에서 제공해주는 기능, html태그에서 id 와 비슷한 기능을 함
   *    this.$refs를 통해 ref="id"를 직접 접근
   */
  mounted() {
    console.log('마운트 시작');

    // this는 mounted 되었을때 사용 할 수 있음
    // 객체를 직접적으로 접근하는것이라 좋은 예시는 아니라 하신것 같음
    this.$refs.child_component.$refs.btn.click();
//  this.$refs.child_component == ChildCompo1
//  this.$refs.child_component.$refs.btn.click() == ChildCompo1.$refs.btn.click()
//                             $refs.btn.click() == ChildCompo1.vue → button > ref="btn

    this.$refs.child_component2.callFromParent();

  },
  
};
</script>

<style scoped>
</style>