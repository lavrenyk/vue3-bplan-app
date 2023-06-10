import * as firebase from "@/firebase";

// initial setup data
import outlineTopics from './setupData/outlineTopics';
import startOutline from './setupData/startOutline';

// Store for business-plan documents activities
export default {

    state: {
      activeBPlan: null,

    },

    getters: {
      getActiveBPlan: state => state.activeBPlan,
    },

    mutations: {
      setActiveBPlan(state, payload) {
        console.log("Записываем данные активного плана:", payload);
        state.activeBPlan = payload;
      }
    },

    actions: {
      // Create new BPlan
      async createBPlan({ commit }, payload) {
        const uid = firebase.auth.currentUser.uid;
        try { // Записываем установочные данные о новом Бизнес-плане

          const newBPlanRef = await firebase.addDoc(firebase.collection(firebase.db, `/users/${uid}/bplans`), payload);

          // Записываем данные основных разделов
          for (let topic of outlineTopics)  {
            await firebase.addDoc(firebase.collection(firebase.db, `${newBPlanRef.path}/outlineTopics`), topic);
          }

          try {
            // Создаем стартовый тематический план
            for (let chapter of startOutline.chapters) {
              const currentOutlineChapterDocRef = firebase.doc(
                firebase.collection(firebase.db, `${newBPlanRef.path}/currentOutline`)
              );
              await firebase.setDoc(
                currentOutlineChapterDocRef,
                {
                  id: currentOutlineChapterDocRef.id,
                  index: chapter.index,
                  title: chapter.title
                }
              );

              // Записываем данные по разделам главы
              for (let section of chapter.sections) {
                const newSectionDocRef = firebase.doc(
                  firebase.collection(firebase.db, `${currentOutlineChapterDocRef.path}/sections`)
                );
                await firebase.setDoc(
                  newSectionDocRef,
                  {
                    id: newSectionDocRef.id,
                    index: section.index,
                    title: section.title
                  }
                )

                // Записываем данные об абзацах текущего раздела
                for (let topic of section.topics) {
                  await firebase.addDoc(
                    firebase.collection(firebase.db, `${newSectionDocRef.path}/topics`),
                    topic
                  );
                }
              }
            }
          } catch (error) {
            console.log('Не получается создать стартовый тематический план: ', error);
          }

          // Погдготавливаем данные для установки настроект текущего Бизнес-плана
          payload.id = newBPlanRef.id;
          payload.path = newBPlanRef.path;

          console.log("Данные бизнес плана подготовлены!", payload);
          // Устанавливаем текущий Бизнес-план в локальную зону работы
          commit('setActiveBPlan', payload);
        } catch (error) {
          window.console.log('Не получается создать бизнес-план', error);
        }
      },

      // Get the path of the active (current) BPlan
      async fetchCurrentBPlan( { commit } ) {
        const uid = this.getters.getUserInfo.id;
        console.log(uid)
        // let activeBPlan = null;
        const bplansQuery = firebase.query(
          firebase.collection(firebase.db, `/users/${uid}/bplans`),
          firebase.where("active", "==", true),
        );
        const bplansSnapshot = await firebase.getDocs(bplansQuery);
        bplansSnapshot.forEach((bplan) => {
          let bplanData = bplan.data();
          bplanData.id = bplan.id;
          bplanData.path = bplan.ref.path;
          console.log(bplanData);
          commit('setActiveBPlan', bplanData);
        });
        console.log("Get data of active plan:", this.getters.getActiveBPlan);
      }
    }
  }