import Vue from 'vue'
import Vuex from 'vuex'

// modules
import { createActions } from 'vuex-action'

Vue.use(Vuex)

// init state
const state = {
  leaveTypes: [
    {
      id: 1,
      name: 'Sick',
      thumbnail: require('@/assets/leaveTypes/SickLeave.jpg')
    },
    {
      id: 2,
      name: 'Personal',
      thumbnail: require('@/assets/leaveTypes/PersonalLeave.jpg')
    },
    {
      id: 3,
      name: 'Annual',
      thumbnail: require('@/assets/leaveTypes/AnnualLeave.png')
    }
  ],
  leaveTypesSelectID: null
}

// getters
const getters = {
  getleaveTypes: (state) => state.leaveTypes,
  getleaveTypesSelectID: (state) => state.leaveTypesSelectID
}

// actions
const actions = createActions('', [
  {
    selectTypeOfLeave: (id) => id,
    clearSelectTypeOfLeave: (state) => state
  }
])

// mutations
const mutations = {
  [actions.selectTypeOfLeave] (state, id) {
    state.leaveTypesSelectID = id
  },

  [actions.clearSelectTypeOfLeave] (state) {
    state.leaveTypesSelectID = null
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
