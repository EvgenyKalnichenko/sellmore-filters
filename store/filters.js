export const state = () => ({
  selectedFilters: [],
  url: ''
})

export const mutations = {
  SET_LIST_FILTERS(state, data) {
    state.listFilters = data
  },
  SET_SELECTED_FILTERS(state, data) {
    //получаем все поля измененного фильтра
    const myForm = document.getElementById('filters')
    const formData = new FormData(myForm)
    const array = formData.getAll(`${data.name}`)
    //если данного фильтра еще нет то добавляем
    if (!state.selectedFilters.find(p => data.name === p.name)) {
        state.selectedFilters = [...state.selectedFilters, {
          name: data.name,
          value: array
        }]
    } else {
      //если есть удаляем прошлое значение и добавляем новое
      state.selectedFilters = Array.from(state.selectedFilters.filter(prod => prod.name !== data.name))
      if(array.length) {
        state.selectedFilters = [...state.selectedFilters, {
          name: data.name,
          value: array
        }]
      }
    }
  },
  SET_QUERY_PARAMS (state, url) {
    state.url = url
  }
}

export const actions = {
  setFilters(context, data) {
    // console.log('setFilters', data)
    context.commit('SET_LIST_FILTERS', data)
  },
  addSelectedFilters(context, data) {
    console.log('addSelectedFilters', data)
    context.commit('SET_SELECTED_FILTERS', data)
  },
  applyFilters (context) {
    const myForm = document.getElementById('filters')
    const formData = new FormData(myForm)
    // формируем строку для запроса
    let url = '?'
    for (const [key, val] of formData.entries()) {
      if(val) {
        url += `${key}=${val}&`
      }
    }
    context.commit('SET_QUERY_PARAMS', url)
  }
}

export const getters = {
  selectedFilters: s => s.selectedFilters,
  url: s => s.url,
}
