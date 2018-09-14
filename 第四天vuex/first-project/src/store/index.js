import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  //初始值
  state:{
    count:0,
    price:66
  },
  //改变值使用mutations
  mutations:{
    'ADD_COUNT'(state){
      state.count++
    },
    'REDUCE_COUNT'(state){
      state.count--
    },
    //改变状态的值 payload就是参数
    'CHANGE_COUNT' (state,payload){
        state.count = payload
    }
  },
  getters: {
    totalPrice (state){
      return state.count * state.price
    }
  },
  //actions的处理方式
  actions:{
    handleAsyncAction(store,payload){
      setTimeout(()=>{
        store.commit('CHANGE_COUNT',payload)
      },2000)
      
    }
  }
})
export default store











