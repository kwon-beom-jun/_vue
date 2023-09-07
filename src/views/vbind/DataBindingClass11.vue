<template>
  <div>
    <!-- text-red 에서 '-' , 띄어쓰기 등등 들어가면 인식을 하지 못해서 '' 붙여줌 -->
    <div class="container" :class="{ active: isActive, 'text-red': hasError }">
      클래스 바인딩
    </div>
    <hr/>
    <!-- text-red → textred 변경하면 괜찮음 -->
    <div class="container" :class="{ active: isActive, 'textred': hasError }">
      클래스 바인딩
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
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

.textred {
  color: red;
}
</style>