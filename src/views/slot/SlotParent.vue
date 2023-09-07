<template>
  <div>
    <!-- 부모가 되는 컴포넌트쪽에서 자식 컴포넌트의 템플릿의 일부를 삽입하는 기능-->
    <SlotChild>
      <h1>부모1 입니다</h1>
      <h1>부모2 입니다</h1>
      <p>{{ testData }}</p> <!-- 안됌 : 여기서 생성되서 보내는것 같음 -->
    </SlotChild>
  </div>
</template>

<script>

import SlotChild from './SlotChild.vue';

/**
    SLOT
      - UI 구현부를 나누어서 각각에 주입 할 수 있다.
      - props만 사용하여 구현하게되면 연관관계가 너무 복잡하게 되어서 나오게 된 기능
        ex) header, footer, main 등 각각을 나누어서 주입 가능

 */

//  ??????? Component를 사용하여 전체 주입하는것과 Slot 주입의 차이는 Slot은 일부 구간을 주입 할 수 있는것 같음

export default {

  components:{SlotChild},

};
</script>

<style scoped>
</style>