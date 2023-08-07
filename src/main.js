import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


// Java Main Method과 동일하게 npm run serve 하면 실행
// #app : public > index.html <div id="app"></div>
createApp(App).use(router).mount('#app')
