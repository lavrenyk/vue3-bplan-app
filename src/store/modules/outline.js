// import Vue from 'vue';
import { collection, db, getDocs, orderBy, query } from "@/firebase";

export default {
  state: {
    outlineDragging: {status: false, group: {name: 'topic'}},
    outlineTopics: [],
    outlineTables: [],
    outlineCharts: [],
    currentOutline: null,
    selectedOutlineChapter: 0
  },

  getters: {
    getOutlineDraggingStatus: state => {
      return state.outlineDragging
    },

    getOutlineItem: state => {
      return state.outlineItem
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
        state.selectedOutlineChapter = 0;
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
        const sectionsDataQuery = query(collection(db, `${chapter.ref.path}`, 'sections'), orderBy('index'));
        const sectionsDataSnap = await getDocs(sectionsDataQuery);

        let sections = [];
        for (const section of sectionsDataSnap.docs) {
          sections.push(section.data());
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
