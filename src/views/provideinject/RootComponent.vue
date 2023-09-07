<template>
  <p class="comp-name">가장 큰 부모(Big Component)</p>

  <span class="inject-text">provide :
    <span class="inject-value">'inject props'</span>
  </span>

  <FirstComponent name="first" />
</template>

<script>
/**
    provdie/ inject
    - 컴포넌트 계증 구조가 복잡해 지면  부모에서 자식으로 넘기기가 pops 로 계속해서 전달하게 되면 복잡해 - 질수 있는 코드를 양산
    - 부모코드에서는 provide 를 자식 에서는 Inject 옵션을 제공하여 값을 전달 할수 있음
    - 자식 컴포넌트로 전달 하고자 하는 데이터를 provide()에 전달 함

    data() : 자기 자신한테 쓸 키 :value 형식
    props : 자식이 쓸 키 :value 형식
    provide/inject : 자식 또는 자손이 쓸 키 :value 형식

    props vs inject
      공통점 : 둘다 Component로 보내줘야함(<template/> 내부에 기입)
      차이점
        props : <컴포넌트 name:"값">으로 보내줘야함
        provide/inject : 사용하고자 하는 컴포넌트에서 inject로 빼서 사용
 */
import FirstComponent from '@/views/provideinject/FirstComponent.vue'

export default {
  components: { FirstComponent },
  props: {
    name: String
  },
  provide() {
    return {
      injectProps: 'inject value',
      testValue: 'test value',
    }
  }
}
</script>

<style>
.comp {
  text-align: left;
  border: 1px solid #444444;
  padding: 30px;
}
.comp.comp-fcolor {
  background: #f5acac96;
}
.comp.comp-scolor {
  background: #0000ff30;
}
.comp.comp-tcolor {
  background: #ffff0052;
}
.comp-name {
  color: #0020f8;
}
</style>