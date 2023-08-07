<template>
  <div>
    <div class="container" :class="[activeClass, errorClass]">
    클래스 바인딩
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "active",
      errorClass: "text-red",
    };
  },
};
</script>

<!-- scoped 선언시 파일 내에만 적용 없으면 자식파일들 전부 참조 -->
<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>