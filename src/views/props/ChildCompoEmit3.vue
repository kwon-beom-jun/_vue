<template>
  <div></div>
</template>

<script>

export default {
  data(){
    return{
      msg:'자식 컴포넌트로 부터 보내는 메시지'
    }
  },

  /**
    $emit 이란 이벤트를 보내는것
    v-on 은 이벤트를 감지 하는것

    .$emit('send-message')
        첫번째 인자는 부모의 커스텀 이벤트
        두번째 파라미터부터는 전달할값
  */
  mounted() {
    /**
     * 부모 <ChildCompoEmit @send-message="sendMessage"/>
     *      "sendMessage" : 부모의 함수
     *      @send-message : 자식의 emit
     * 
     * 자식 this.$emit('send-message',this.msg);
     *      'send-message' : 부모에서 서치 할 값
     *      this.msg : 부모에서 서치한 send-message 이벤트의 함수에 매개변수로 보낼 값
     *                 부모의 함수 "sendMessage"에 매개변수로 보내줌
     */
    // send-message : 부모 @send-message(커스텀 이벤트)
    // send-message : 부모 @send-message(커스텀 이벤트)
    // this.msg : 자식 msg 데이터
    this.$emit('send-message',this.msg);
  }
}
</script>

<style scoped></style>