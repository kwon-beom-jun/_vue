<template>
  <div>
<CompositionChild :posts="posts"></CompositionChild>
  </div>
</template>
<script>
import CompositionChild from './CompositionChild5.vue';
import {ref} from 'vue'

export default {
  components:{CompositionChild},
  setup() {
    const posts = ref([
        { title: '1번 타이틀', body: '1번 제목', id: 1 },
        { title: '2번 타이틀', body: '2번 제목', id: 2 },
      ])
      
      return {posts}
  }
}
</script>