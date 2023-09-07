import { defineStore } from "pinia";

// counter : 전역 저장소 이름
// defineStore(저장소 이름, {객체})
// vuex의 mutations가 없음
export const useCouterStore = defineStore('counter',{

  state:() => ({count:0}),

  actions:{
    increment(){
      this.count++
    }
  },

  getters:{
    getDoubleCount(state){
      return state.count * 2;
    }
  }

})