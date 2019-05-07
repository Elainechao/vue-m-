import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import imgWrap from './modules/imgWrap'

export default new Vuex.Store({
  state: {
      count:1,
      goodList:[],
      total:0
  },
  getters:{
     total(state){
      return state.goodList.reduce((sum, good) => {
        return sum + good.quantity * good.price
      }, 0)
     },
     multi(state) {
      return (num) => {
        return state.count * num
      }
    }
  },
  mutations: {
    incrementBy (state,payload) {
        state.goodList.push(payload)          
        
    }
},
  actions: {
    // increment({commit}) {
    //   setTimeout(()=>{
    //     commit('increment')
    //   }, 1000)
    // },
    
  },
  modules: {
    imgWrap
  }

})

