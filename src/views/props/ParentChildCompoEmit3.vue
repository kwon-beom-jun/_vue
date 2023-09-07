<template>
  <div>
    <ChildCompoEmit @send-message="sendMessage"/>
  </div>
</template>

<script>

import ChildCompoEmit from './ChildCompoEmit3.vue';

export default {

  components:{ChildCompoEmit},

  methods: {
    sendMessage(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped></style>