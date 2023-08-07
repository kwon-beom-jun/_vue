import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home' },
    component: HomeView,
  },
  
  // 데이타바인딩1
  {
    path: '/data',
    name: 'DataBinding1',
    meta: { title: '데이타바인딩' },
    children:[
      {
        path: 'binding1',
        meta: { title: '데이터바인딩' },
        component: () => import(/* webpackChunkName: "binding1" */ '../views/directives/DataBinding1.vue')
      },{
        path: 'binding2',
        meta: { title: '데이터바인딩(html)' },
        component: () => import(/* webpackChunkName: "binding2" */ '../views/directives/DataBindingHtml2.vue')
      },{
        path: 'binding3',
        meta: { title: '데이터바인딩(inputTest)' },
        component: () => import(/* webpackChunkName: "binding3" */ '../views/directives/DataBindingInputTest3.vue')
      },{
        path: 'binding4',
        meta: { title: '데이터바인딩(TextArea)' },
        component: () => import(/* webpackChunkName: "binding4" */ '../views/directives/DataBindingTextArea4.vue')
      },{
        path: 'binding5',
        meta: { title: '데이터바인딩(Select)' },
        component: () => import(/* webpackChunkName: "binding5" */ '../views/directives/DataBindingSelect5.vue')
      },{
        path: 'binding6',
        meta: { title: '데이터바인딩(CheckBox1)' },
        component: () => import(/* webpackChunkName: "binding6" */ '../views/directives/DataBindingCheckBox6.vue')
      },{
        path: 'binding7',
        meta: { title: '데이터바인딩(CheckBox2)' },
        component: () => import(/* webpackChunkName: "binding7" */ '../views/directives/DataBindingCheckBox7.vue')
      },{
        path: 'binding8',
        meta: { title: '데이터바인딩(Radio)' },
        component: () => import(/* webpackChunkName: "binding8" */ '../views/directives/DataBindingRadio8.vue')
      },
    ]
  },
  
  // 데이타바인딩2
  {
    path: '/vbind',
    meta: { title: '바인딩(v-bind)' },
    children: [
      {
        path: "binding9",
        meta: { title: "데이터바인딩-Att(속성)" },
        component: () =>
          import(/* webpackChunkName: "binding9" */ "../views/vbind/DataBindingAttr9.vue"),
      },{
        path: "binding10",
        meta: { title: "데이터바인딩-Button" },
        component: () =>
          import(/* webpackChunkName: "binding10" */ "../views/vbind/DataBindingButton10.vue"),
      },{
        path: "binding11",
        meta: { title: "데이터바인딩-Class1" },
        component: () =>
          import(/* webpackChunkName: "binding11" */ "../views/vbind/DataBindingClass11.vue"),
      },{
        path: "binding12",
        meta: { title: "데이터바인딩-Class2" },
        component: () =>
          import(/* webpackChunkName: "binding12" */ "../views/vbind/DataBindingClass12.vue"),
      },{
        path: "binding13",
        meta: { title: "데이터바인딩-For" },
        component: () =>
          import(/* webpackChunkName: "binding13" */ "../views/vfor/DataBindingList13.vue"),
      },{
        path: "binding14",
        meta: { title: "데이터바인딩-If" },
        component: () =>
          import(/* webpackChunkName: "binding14" */ "../views/vif/DataBindingIf14.vue"),
      },{
        path: "binding15",
        meta: { title: "이벤트 클릭-On" },
        component: () =>
          import(/* webpackChunkName: "binding15" */ "../views/von/EventClick15.vue"),
      },{
        path: "binding16",
        meta: { title: "이벤트 클릭-Change" },
        component: () =>
          import(/* webpackChunkName: "binding16" */ "../views/von/EventChange16.vue"),
      },{
        path: "binding17",
        meta: { title: "이벤트 클릭-Key" },
        component: () =>
          import(/* webpackChunkName: "binding17" */ "../views/von/EventKey17.vue"),
      },{
        path: "binding18",
        meta: { title: "함수학습-1" },
        component: () =>
          import(/* webpackChunkName: "binding18" */ "../views/functions/MethodVSComputed1.vue"),
      },{
        path: "binding19",
        meta: { title: "함수학습-2(Computed 예제)" },
        component: () =>
          import(/* webpackChunkName: "binding19" */ "../views/functions/MethodVSComputed2.vue"),
      },{
        path: "binding20",
        meta: { title: "함수학습-3(Watch 예제)" },
        component: () =>
          import(/* webpackChunkName: "binding20" */ "../views/functions/MethodVSWatch3.vue"),
      },{
        path: "binding21",
        meta: { title: "라이프 사이클 예제" },
        component: () =>
          import(/* webpackChunkName: "binding21" */ "../views/lifecycle/LifeCycleEvent1.vue"),
      },{
        path: "binding22",
        meta: { title: "Asios Get" },
        component: () =>
          import(/* webpackChunkName: "binding22" */ "../views/axios/AxiosGet1.vue"),
      },{
        path: "binding23",
        meta: { title: "Asios Get2" },
        component: () =>
          import(/* webpackChunkName: "binding23" */ "../views/axios/AxiosGet2.vue"),
      },
    ] 
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

