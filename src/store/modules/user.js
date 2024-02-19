import { loginApi } from "@/api/login";
import { removeToken, setToken ,getToken} from "@/utils/auth";

const state={

  token:getToken()
}
const mutations= {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    removeToken(state) {
      state.token = null
      removeToken()
    }
  }
  const actions= {
   async getlogin(aaa,data){
     const res = await loginApi(data)
     console.log(res);
     aaa.commit('setToken', res.data.token)
   },
   logout(aaa){
     aaa.commit('removeToken')
   }
  }
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
