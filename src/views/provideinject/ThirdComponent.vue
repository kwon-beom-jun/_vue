<template>
  <div class="comp comp-tcolor">
    <p class="comp-name">Third Component</p>
    <p>props : {{ name }}</p>

    <span class="inject-text">third inject props :<br/>
      &nbsp;&nbsp;<span class="inject-value">{{ injectProps }}</span><br/>
      &nbsp;&nbsp;<span class="">{{ testValue }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  inject: ['injectProps', 'testValue']
}
</script>

<style>
.inject-text {
  font-weight: bold;
}

.inject-value {
  color: red;
}
</style>