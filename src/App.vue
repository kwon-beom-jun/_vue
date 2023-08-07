<template>
  <div id="app">
    <main-header></main-header>
    <div class="mt-5">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let children = []
router.options.routes.forEach((route, index) => {
  console.log(route.path + ':' + index)

  if (route && Array.isArray(route.children)) {
    children = route.children
  } else if (route) {
    children = []
  }

  children.forEach((child) => {
    console.log(child.path)
  })
})
</script>

­­­<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
