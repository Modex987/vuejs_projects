import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        // count: 0, // Just as an example
        isUserLoggedIn: false,
        authUser: {},
    }
  },

  mutations: {
    // increment (state) {
    //   state.count++
    // },

    setIsUserLoggedIn (state, payload) {
        state.isUserLoggedIn = payload
    },

    setAuthUser(state, payload){
        state.authUser = payload
    }

  }
})

export default store;
