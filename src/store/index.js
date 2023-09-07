import { createStore } from "vuex";
import axios from "axios";

/**
  Vuex = pinia(피니아) | react는 redux라고 표현
  - 하나의 솔루션
  - 상태를 관리 라이브러리
  - vuex라는 저장소를 두고 같이 쓰는 값들을 하나의 저장소를 통해 관리하고 바라보도록 함
    (session과 비슷하지만 메모리에 올리는것임)
*/
// 저장소 생성
export default createStore({

  // 다이렉트로 변경 불가
  state:{
    users:[]
  },

  // state 변수 값 변경 ( Setter과 비슷 )
  /** MUTATUIONS(동기) */
  mutations:{
    setUsers(state, users) {
      state.users = users
    }
  },
  
  /** GETTER FUNCTION */
  // Getter 함수는 어떠한 작업을 하고 넘겨주기 위한것으로 주로 사용
  getters:{
    getUsers:(state) => state.users
  },
  
  /** ACTIONS(비동기) */
  actions:{

    // 서버에 접근하려고 동기화한 것이고 actions가 비동기인것이랑은 다름
    async fetchUsers({ commit }) {
      try {
        // 동기 형태로 가져옴 : 데이터를 서버에서 가져오기도 전에 넘어가서 변수에 저장 방지
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')

        // this.state.users = data 다이렉트로 접근 불가

        commit('setUsers', data.data) // mutations 함수에 주입

      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },


})