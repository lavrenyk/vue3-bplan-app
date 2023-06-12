// import Vue from 'vue';
import { collection, db, getDocs, orderBy, query } from "@/firebase";

export default {
  state: {
    outlineDragging: {status: false, group: {name: 'topic'}},
    outlineTopics: [],
    outlineTables: [],
    outlineCharts: [],
    currentOutline: null,
    selectedOutlineChapter: []
  },

  getters: {
    getOutlineDraggingStatus: state => {
      return state.outlineDragging
    },

    getCurrentOutline: state => {
      return state.currentOutline
    },

    outlineTopics: state => {
      return state.outlineTopics
    },

    outlineTables: state => {
      return state.outlineTables
    },

    outlineCharts: state => {
      return state.outlineCharts
    },

    getSelectedOutlineChapter: state => {
      return state.selectedOutlineChapter
    }
  },

  mutations: {
    setCurrentOutline(state, payload) {
      console.log(payload);
      state.currentOutline = payload
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
  }
}
