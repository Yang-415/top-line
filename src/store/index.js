import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
      console.log(state)
    },
    substructor (store) {
      store.count--
      console.log(store)
    }
  },
  actions: {

  },
  modules: {
  }
})
