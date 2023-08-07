<template>
  <header>
    <!-- <ul class="list-unstyled components" v-for="(route, index) in router.options.routes" :key="index">
      <li v-for="(child, i) in route.children" :key="i">
        <span>{{ child.meta.title }}</span>
      </li>
    </ul> -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vue 예제</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
            <!-- <li class="nav-item" v-for="(route, index) in router.options.routes" :key="index">
              <router-link class="nav-link active" aria-current="page" :to="route.path"
                >{{ route.meta.title }}
              </router-link>
            </li> -->
            <!-- 
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> -->

            <li class="nav-item dropdown" v-for="(route, index) in router.options.routes" :key="index">
              <router-link
                v-if="route.children"
                class="nav-link dropdown-toggle"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                :to="route.path"
              >
                {{ route.meta.title }}
              </router-link>
              <router-link v-else class="nav-link active" aria-current="page" :to="route.path"
                >{{ route.meta.title }}
              </router-link>

              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown" v-if="route.children">
                <li v-for="child in route.children" :key="child.path">
                  <router-link class="dropdown-item" :to="route.path + '/' + child.path">{{
                    child.meta.title
                  }}</router-link>
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
            </li> -->
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped></style>



