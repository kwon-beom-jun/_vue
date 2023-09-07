import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from "axios";
import mixins from './mixins/mixins'
import { createPinia } from 'pinia'
import store from './store'

/**
 *  main.js는 java main과 같이 정해진 파일이므로 명칭을 변경하면 안됌
 *  전역으로 사용하고 싶은 컴포넌트들을 등록
 *  AS-IS : Html 전체적으로 변경
 *  TO-BE : Vue는 변경되는 컴포넌트 교체
 */

// ------------------------------------------------------------------------------

// Java Main Method과 동일하게 npm run serve 하면 실행
// #app : public > index.html <div id="app"></div>
// createApp(App).use(router).mount('#app')

// createApp : Vue 컨테이너 생성
const app = createApp(App)

// ------------------------------------------------------------------------------

// globalProperties : 전역 등록
// [axios / http 통신]
// config global 변수에 $axios 변수로 axios 생성 → 이후 다른곳에서 $axios로 사용가능
// $ : 전역이라는 선언 (붙이지 않아도 사용가능) : AxiosGlobal4.vue 예시
app.config.globalProperties.$axios = axios

// ------------------------------------------------------------------------------

// [라우터 사용 설정]
// router 모듈을 사용하기 위한 설정
app.use(router)

// ------------------------------------------------------------------------------

// [mixin 추가]
app.mixin(mixins)

// ------------------------------------------------------------------------------

//[Vuex, Pinia 사용법]

// 보통 같이 쓰지 않음, 강사님이 주석처리 안하면?
app.use(store)

app.use(createPinia())

// ------------------------------------------------------------------------------

// [main 아이디 : 렌더링 시작점]
app.mount('#app')

// ------------------------------------------------------------------------------

