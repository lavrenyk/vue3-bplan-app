import * as firebase from "@/firebase";

// Store for business-plan documents activities
export default {

    state: {
      
    },
  
    getters: {
    },
  
    mutations: {
    },

    actions: {
      // Создание нового пустового бизнес-плана
      async createBPlan({ dispatch }, payload) {
        const uid = firebase.auth.currentUser.uid;
        try { // Записываем установочные данные о новом Бизнес-плане
          const newBPlanRef = firebase.doc(firebase.db, `/users/${uid}/bplans`, uid);
          await firebase.setDoc(newBPlanRef, payload);
        
          // Записываем данные доступных системных топиков
          const outlineTopicsRef = firebase.firestore().collection(`${newBPlanRef.path}/outlineTopics`);
          for (const topic of outlineTopics)  {
            await outlineTopicsRef.doc().set(topic);
          }

        try {
           // Создаем стартовый тематический план
          const currentOutlineRef = firebase.firestore().collection(`${newBPlanRef.path}/currentOutline`);
          for (const chapter of currentOutline.chapters) {
            // Записываем данные о текущей главе
            const currentOutlineChapterDoc = currentOutlineRef.doc();
            await currentOutlineChapterDoc.set({
              id: currentOutlineChapterDoc.id,
              index: chapter.index,
              title: chapter.title
            });
            // Записываем данные о разделах текущей главы
            const newSectionsRef = firebase.firestore().collection(`${currentOutlineChapterDoc.path}/sections`);
            for (const section of chapter.sections) {
              // Записываем данные о текущей секции
              const newSectionDoc = newSectionsRef.doc();
              await newSectionDoc.set({
                id: newSectionDoc.id,
                index: section.index,
                title: section.title
              });
              // Записываем данные об абзацах текущего раздела
              const newTopicsRef = firebase.firestore().collection(`${newSectionDoc.path}/topics`);
              for (const topic of section.topics) {
                await newTopicsRef.doc().set(topic);
              }
            }
          }
        } catch (error) {
          console.log('Не получается создать начльний тематический план: ', error);
        }
       

        // Погдготавливаем данные для установки настроект текущего Бизнес-плана
        payload.id = newBPlanRef.id;
        payload.path = newBPlanRef.path;
        // Устанавливаем текущий Бизнес-план в локальную зону работы
        context.commit('setActiveBPlan', payload);
      } catch (error) {
        window.console.log('Не получается создать бизнес-план', error);
      }
      
    },
    }
  }