import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count:20
  },
  mutations:{
    increment(state,n){
      state.count-=n
    },
    increment1(state){
      state.count--
    }
  },

  // actions:{
  //   increment2(action){
  //     setTimeout(() => {
  //       action.commit('increment1')
  //     },1000);
      
  //   }
  // },

  // getters:{
  //   doubleCount(state){
  //     return state.count*2
  //   }
  // }

})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
