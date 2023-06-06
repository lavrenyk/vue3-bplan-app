import { createStore } from 'vuex';

// app local modules
import auth from "./auth";
import user from "./user";

export default createStore({
  state: {
    error: null,
    userInfo: null,
    activeBPlan: null,
  },
  getters: {
    error: state => state.error,
    getUserInfo: state => {
      if (state.userInfo) {
        return state.userInfo;
      } else {
        return JSON.parse(localStorage.getItem('userInfo'));
      }
    },
    getActiveBPlan: state => state.activeBPlan,
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
      localStorage.setItem('userInfo', JSON.stringify(payload));
    },
    clearUserInfo(state) {
      state.userInfo = null;
      localStorage.setItem('userInfo', JSON.stringify(null));
    },
  },
  actions: {
    

  },
  modules: {
    auth,
    user,
  }
})
