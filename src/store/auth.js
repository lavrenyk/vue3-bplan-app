import { signInWithEmailAndPassword } from "firebase/auth";
// import router  from "@/router";
import { auth } from "@/firebase";

export default {
  actions: {
    async login({commit}, loginData ) {
      try {
        await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found!')
            break
          case 'auth/wrong-password':
            alert('Wrong password!')
            break
          default:
            alert(error.message)
        }
        // If error exit the login attempt
        return
      }

      commit("SET_CURRENT_USER", auth.currentUser);

      return true;
    }
  },

}