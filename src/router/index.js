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
    name: 'DataBinding2',
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
        meta: { title: "Asios Post2" },
        component: () =>
          import(/* webpackChunkName: "binding23" */ "../views/axios/AxiosPost2.vue"),
      },{
        path: "binding24",
        meta: { title: "Asios html bind Post3" },
        component: () =>
          import(/* webpackChunkName: "binding24" */ "../views/axios/AxiosPost3.vue"),
      },{
        path: "binding25",
        meta: { title: "Asios Static Instance" },
        component: () =>
          import(/* webpackChunkName: "binding25" */ "../views/axios/AxiosGlobal4.vue"),
      },{
        path: "binding26",
        meta: { title: "Asios Sync, Async" },
        component: () =>
          import(/* webpackChunkName: "binding26" */ "../views/axios/AxiosSync5.vue"),
      },{
        path: "binding27",
        meta: { title: "Component 및 부모-자식 개념" },
        component: () =>
          import(/* webpackChunkName: "binding27" */ "../views/compo/ParentComponent.vue"),
      },{
        path: "binding28",
        meta: { title: "Component 부모-자식 이벤트 호출" },
        component: () =>
          import(/* webpackChunkName: "binding28" */ "../views/props/ParentCompo1.vue"),
      },{
        path: "binding29",
        meta: { title: "Component 자식-부모 Emit " },
        component: () =>
          import(/* webpackChunkName: "binding29" */ "../views/props/ParentChildCompoEmit3.vue"),
      },{
        path: "binding30",
        meta: { title: "Slot 기본 개념 " },
        component: () =>
          import(/* webpackChunkName: "binding30" */ "../views/slot/SlotParent.vue"),
      },{
        path: "binding31",
        meta: { title: "Slot 응용 " },
        component: () =>
          import(/* webpackChunkName: "binding31" */ "../views/slot/SlotUseModalLayout.vue"),
      },{
        path: "binding32",
        meta: { title: "provice-inject" },
        component: () =>
          import(/* webpackChunkName: "binding32" */ "../views/provideinject/RootComponent.vue"),
      },{
        path: "binding33",
        meta: { title: "mixin " },
        component: () =>
          import(/* webpackChunkName: "binding33" */ "../views/mixin/UseMixinExample.vue"),
      },{
        path: "binding34",
        meta: { title: "Calculator Optional " },
        component: () =>
          import(/* webpackChunkName: "binding34" */ "../views/composition/CalculatorOptional.vue"),
      },{
        path: "binding35",
        meta: { title: "Calculator Composition " },
        component: () =>
          import(/* webpackChunkName: "binding35" */ "../views/composition/CalculatorComposition1.vue"),
      },
    ] 
  },

  // 데이타바인딩3
  {
    path: "/compo",
    name: "CompositionApi1",
    meta: { title: "컴포지션 API" },
    children: [
      {
        path: "compo1",
        meta: { title: "컴포지션 API - 개념 & 바인딩 & 계산기" },
        component: () =>
          import(
            /* webpackChunkName: "compo1" */ "../views/composition/CalculatorComposition1.vue"
          ),
      },{
        path: "compo2",
        meta: { title: "컴포지션 API - Ref" },
        component: () =>
          import(
            /* webpackChunkName: "compo2" */ "../views/composition/CompositionRef2.vue"
          ),
      },{
        path: "compo3",
        meta: { title: "컴포지션 API - Function" },
        component: () =>
          import(
            /* webpackChunkName: "compo3" */ "../views/composition/CompositionFunction3.vue"
          ),
      },{
        path: "compo4",
        meta: { title: "컴포지션 API - LifeCycle" },
        component: () =>
          import(
            /* webpackChunkName: "compo4" */ "../views/composition/CompositionLifeCycle4.vue"
          ),
      },{
        path: "compo5",
        meta: { title: "컴포지션 API - Props" },
        component: () =>
          import(
            /* webpackChunkName: "compo5" */ "../views/composition/CompositionParent5.vue"
          ),
      },{
        path: "compo6",
        meta: { title: "컴포지션 API - Provide,Injection" },
        component: () =>
          import(
            /* webpackChunkName: "compo6" */ "../views/composition/CompositionProvide6.vue"
          ),
      },{
        path: "compo7",
        meta: { title: "컴포지션 API - Script Setup" },
        component: () =>
          import(
            /* webpackChunkName: "compo7" */ "../views/composition/setup/CompositionSetup.vue"
          ),
      },{
        path: "compo8",
        meta: { title: "Vuex 예제" },
        component: () =>
          import(
            /* webpackChunkName: "compo8" */ "../views/vuex/UsersVuex.vue"
          ),
      },{
        path: "compo9",
        meta: { title: "Pinia 예제" },
        component: () =>
          import(
            /* webpackChunkName: "compo9" */ "../views/pinia/PiniaExample.vue"
          ),
      }
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

