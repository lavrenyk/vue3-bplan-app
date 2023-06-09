import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
// import router  from "@/router";
import { auth, db, doc, getDoc, setDoc } from "@/firebase";

export default {
  actions: {
    // New user registration in the system
    async registration ({ commit, dispatch }, registrationData) {
      try {
        await createUserWithEmailAndPassword(auth, registrationData.email, registrationData.password);
        // await updateProfile(auth.currentUser, {
        //   displayName: registrationData.name,
        // });

        // Create user data in db
        let uid = auth.currentUser.uid;
        let uidRef = doc(db, '/users', uid);

        await setDoc(uidRef, {
          userInfo: {
            uid: uid,
            regDate: Date.now(),
            regCompleted: false,
            profileAvatar: '',
            profileCover: '',
            firstName: registrationData.name,
            lastName: '',
            birthday: '01.01.1990',
            email: auth.currentUser.email,
            phoneNumber: '',
            subscriptionTill: null,
            payments: null
          },
        });

        await dispatch('fetchUserInfo');
        await dispatch('sendEmailVerification');

        } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert('Email already in use')
              break
            case 'auth/invalid-email':
              alert('Invalid email')
              break
            case 'auth/operation-not-allowed':
              alert('Operation not allowed')
              break
            case 'auth/weak-password':
              alert('Weak password')
              break
            default:
              alert('Something went wrong')
          }

          console.log(error)

          return false;
      }

      console.log('Зарегистрирован пользователь:', auth.currentUser)

      commit('setCurrentUser', auth.currentUser)
      return true;
    },

    // Signing In User into the system
    async login({ commit, dispatch }, loginData ) {
      try {
        await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
        await dispatch('fetchUserInfo');
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

      commit("setCurrentUser", auth.currentUser);
      return true;
    },

    // Fetch exist user data
    async fetchUserInfo({ commit }) {
      try {
        let userId = auth.currentUser.uid;
        console.log(userId);
        const userDocRef = doc(db, '/users', userId);
        const userDocData = await getDoc(userDocRef);
        const userInfo = userDocData.data().userInfo;
        commit('setUserInfo', userInfo);
      } catch (error) {
        console.log("Error to load userInfo",  error);
      }
    },

    // User Sign Out
    async signOut({ commit }) {
      console.log("Account exit!");
      await auth.signOut();
      commit('clearUserInfo')
    },

    // Email verification 
    async sendEmailVerification() {
      try {
        console.log("Send verification email!");
        await sendEmailVerification(auth.currentUser);
      } catch (error) {
        console.log("Error to send verification email!", error);
      }
    }
  },

}