export const state = () => ({
  listFilters: [],
  selectedFilters: [],
  url: ''
})

export const mutations = {
  SET_LIST_FILTERS(state, data) {
    state.listFilters = data
  }
}

export const actions = {
  setFilters(context, data) {
    console.log('setFilters', data)
    context.commit('SET_LIST_FILTERS', data)
  }
}

export const getters = {
  listFilters: s => s.listFilters
}
