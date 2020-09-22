import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    editStatus(state, {id}) {
      const idx = state.tasks.findIndex(i => i.id === id)
      state.tasks[idx].status = state.tasks[idx].status = !state.tasks[idx].status
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    editStatus({commit}, task) {
      commit('editStatus', task)
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    taskById: s => id => s.tasks.find(t => t.id === id)
  },
  modules: {
  }
})
