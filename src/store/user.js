// Store for current User activities

export default {

  state: {
    currentUser: null,
  },

  getters: {
    getCurrentUser: state => { return state.currentUser },
  },

  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
  }
}