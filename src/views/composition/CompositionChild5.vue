<template>
  <div>
    {{ posts }} <br>
    {{ posts[0].title }}
  </div>
</template>
<script>


export default {
  // 사용할 props를 배열내에 정의합니다.
  props:["posts"], //부모가 쓸수 있는 태그를 만들어줌
  setup(props) {

    console.log(props.posts[0].title); 
    console.log(props.posts[1].title);   
   
  }
}
</script>