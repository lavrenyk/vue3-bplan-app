// import Vue from 'vue';
import { collection, db, getDocs, setDoc, doc, orderBy, query } from "@/firebase";

export default {
  state: {
    loadingOutlineData: false,
    outlineDragging: {status: false, group: {name: 'topic'}},
    outlineTopics: [],
    outlineTables: [],
    outlineCharts: [],
    currentOutline: null,
    selectedOutlineChapter: []
  },

  getters: {
    getOutlineDraggingStatus: state => {
      return state.outlineDragging;
    },

    getLoadingOutlineData: state => {
      return state.loadingOutline;
    },

    getCurrentOutlineData: state => {
      return state.currentOutlineData;
    },

    getOutlineTopics: state => {
      return state.outlineTopics;
    },

    getOutlineTables: state => {
      return state.outlineTables;
    },

    getOutlineCharts: state => {
      return state.outlineCharts;
    },

    getSelectedOutlineChapter: state => {
      return state.selectedOutlineChapter;
    }
  },

  mutations: {
    setCurrentOutline(state, payload) {
      console.log(payload);
      state.currentOutline = payload
    },

    setLoadingOutlineData(state, payload) {
      state.loadingOutline = payload;
    },

    setSystemTextTopics(state, payload) {
      state.outlineTopics = payload;
    },

    fetchOutlineTopics(state, payload) {
      state.outlineTopics = payload
    },

    fetchOutlineTables(state, payload) {
      state.outlineTables = payload
    },

    fetchOutlineCharts(state, payload) {
      state.outlineCharts = payload
    },

    changeOutlineDraggingStatus(state, payload) {
      state.outlineDragging = payload
    },

    selectOutlineChapter(state, chapterIndex) {
      if (state.currentOutline) {
        state.selectedOutlineChapter = state.currentOutline[chapterIndex];
      } else {
        state.selectedOutlineChapter = [];
      }
    },

    addNewChapter(state, payload) {
      state.currentOutline.push(payload.chapterData)
    },

    // deleteUserTopic(state, index) {
    //   Vue.delete(state.outlineTopics, index)
    // }
  },

  actions: {
    async fetchCurrentOutline({ commit }) {
      const testPath = 'users/r1PiB4gqTdeA9Gq2850gp1hBCig2/bplans/9dl1elW5enI0UsVjJ6Tr'

      // const activeBPlanPath = this.getters.getActiveBPlan;
      // console.log(activeBPlanPath.path);

      const activeBPlanDocOutlineQuery = query(collection(db, `${testPath}/currentOutline`), orderBy('index'));
      const activeBPlanDocOutlineSnap = await getDocs(activeBPlanDocOutlineQuery);

      const currentOutline = []
      for (const chapter of activeBPlanDocOutlineSnap.docs) {

        // Load Chapter's sections data
        let sections = [];
        const sectionsDataQuery = query(collection(db, `${chapter.ref.path}`, 'sections'), orderBy('index'));
        const sectionsDataSnap = await getDocs(sectionsDataQuery);
        for (const section of sectionsDataSnap.docs) {

          // Load Section's topics data
          let topics = [];
          const topicsDataQuery = query(collection(db, `${section.ref.path}`, 'topics'), orderBy('index'));
          const topicsDataSnap = await getDocs(topicsDataQuery);
          for (const topic of topicsDataSnap.docs) {
            let topicItem = topic.data();
            topicItem.id = topic.id;
            topicItem.path = topic.ref.path;
            topicItem.parentId = section.id;
            topics.push(topicItem);
          }

          sections.push({
            id: section.id,
            path: section.ref.path,
            title: section.data().title,
            topics: topics
          });
        }

        currentOutline.push({
          id: chapter.id,
          path: chapter.ref.path,
          title: chapter.data().title,
          sections: sections
        });
      }
      commit('setCurrentOutline', currentOutline)
      return currentOutline;
    },

    // -----------------------------------------
    //  Unused Outline Loading
    //  Loading Paragraphs, Tables, Graphs in one request
    async fetchEditOutline({ dispatch, commit }) {
      commit('setLoadingOutlineData', true);
      // let uid = auth.currentUser.uid;
      let outlineTopics = [];
      // let outlineTables = [];
      // let outlineCharts = [];
      const systemTopics = 'system/topics/textTopics';

      try {
        const systemOutlineTextTopicsQuery = query(collection(db, `${systemTopics}`), orderBy('id'));
        const systemOutlineTextTopicsSnap = await getDocs(systemOutlineTextTopicsQuery);
        // Check if currentOutline loaded else load it
        if (!this.getters.getCurrentOutline) {
          await dispatch("fetchCurrentOutline");
        }

        for (const topic of systemOutlineTextTopicsSnap.docs) {
          var topicItem = topic.data();
          topicItem.path = topic.ref.path;
          outlineTopics.push(topicItem);
        }

        commit('setSystemTextTopics', outlineTopics);
        commit('setLoadingOutlineData', false);

      } catch (error) {
        console.log('Unable to fetch Outline: ', error);
        commit('setLoadingOutlineData', false);
      }
    },

    // -----------------------------------------
    //  TOPIC operations section

    // Save TOPIC data from the Editor
    async saveTopicData({ mutation }, topic) {
      console.log('topicData: ', topic);
      try {
        const topicDocRef = doc(db, `${topic.path}`);
        await setDoc(
          topicDocRef,
          {
            title: topic.title,
            showTitle: topic.showTitle,
            body: topic.body
          },
          {
            merge: true
          }
        );
        mutation('ck');
      } catch (error) {
        window.console.log('Unable save topic updated data: ', error)
      }
    },
  }
}
