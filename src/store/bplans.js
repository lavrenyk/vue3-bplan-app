import * as firebase from "@/firebase";

// initial setup data
import outlineTopics from './setupData/outlineTopics';
import startOutline from './setupData/startOutline';

// Store for business-plan documents activities
export default {

    state: {
      activeBPlan: null,
      userBPlans: null,

    },

    getters: {
      getActiveBPlan: state => state.activeBPlan,
    },

    mutations: {
      setActiveBPlan(state, payload) {
        state.activeBPlan = payload;
      }
    },

    actions: {
      // CREATE: Create new BPlan
      async createBPlan({ commit }, payload) {
        const uid = this.getters.getUserInfo.id;
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

      // READ: Get the path of the active (current) BPlan
      async fetchCurrentBPlan( { commit } ) {
        try {
          const uid = this.getters.getUserInfo.id;
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
        } catch (error) {
          console.log("Ошибка при загрузке активного проекта:", error);
        }
      },

      // UPDATE: Update active BPlan project setup data
      async updateBPlan({ commit }, payload) {
        try {
          const activeBPlanDocRef = firebase.doc(firebase.db, payload.path);
          const activeBPlanDocSnap = await firebase.getDoc(activeBPlanDocRef);
          // Delete not need information for the db
          delete payload.id;
          delete payload.path;

          // Update data in db
          await firebase.updateDoc(activeBPlanDocRef, payload);

          // Recover nessery addition information for active BPlan
          payload.id = activeBPlanDocSnap.id;
          payload.path = activeBPlanDocSnap.path;
          // and update it in storage
          commit('setActiveBPlan', payload);
        } catch (error) {
          console.log('Не получается обновить данные бизнес-плана - ', error);
        }
      },

      // DELETE: Delete active BPlan project from database and local zone
      async deleteBPlan({ commit }, bplanPath) {
        try {
          const activeBPlanDocRef = firebase.doc(firebase.db, bplanPath);
          await firebase.deleteDoc(activeBPlanDocRef)
          commit('setActiveBPlan', null);
        } catch (error) {
          console.log('Unable to delete active Bplan data:', error)
        }
      } 
    }
  }