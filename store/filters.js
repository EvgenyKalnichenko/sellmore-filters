export const state = () => ({
  selectedFilters: [],
  rooms: [
    {value: '1'},
    {value: '2'}
  ],
  deadline: [],
  otdelka: [],
  price_ot: [],
  price_do: [],
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
      if (array.length) {
        state.selectedFilters = [...state.selectedFilters, {
          name: data.name,
          value: array
        }]
      }
    }
  },
  SET_QUERY_PARAMS(state, url) {
    state.url = url
  },
  ADD_FILTER(state, params) {
    console.log(params)
    state[params.name] = [
      ...state[params.name],
      {...params}
    ]
  },
  REMOVE_FILTER(state, params) {
    state[params.name] = Array.from(state[params.name].filter(el => el.value !== params.value))
  },
  CREATED_NEW_FILTER(state, params) {
    state.filters[params.name] = params.value
  },
  CREATED_NEW_ARRAY_FILTERS(state, params) {
    state.filters[params.name] = params.value
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
  applyFilters(context) {
    const myForm = document.getElementById('filters')
    const formData = new FormData(myForm)
    // формируем строку для запроса
    let url = '?'
    for (const [key, val] of formData.entries()) {
      if (val) {
        url += `${key}=${val}&`
      }
    }
    context.commit('SET_QUERY_PARAMS', url)
  },
  changeFilters(context, params) {
    console.log(params)
    const currentFilter = context.state[params.name]
    if(currentFilter) {
      const checkFilter = currentFilter.find((i) => i.value === params.value && i.name === params.name)
      console.log('checkFilter', checkFilter)
      if(checkFilter) {
        console.log('найден')
        context.commit('REMOVE_FILTER', params)
      } else {
        console.log('не найден')
        context.commit('ADD_FILTER', params)
      }
    }

    // const filter = context.state.filters[params.name]
    // const checkArray = params.name.indexOf('[]')
    // console.log('если массив данных []')
    // if(filter && !checkArray){
    //   context.commit('CREATED_NEW_FILTER', params)
    // } else {
    //   context.commit('CREATED_NEW_ARRAY_FILTERS', params)
    // }
  }
}

export const getters = {
  selectedFilters: s => s.selectedFilters,
  url: s => s.url,
  rooms: s => s.rooms,
  deadline: s => s.deadline,
  otdelka: s => s.otdelka,
  price_do: s => s.price_do,
  price_ot: s => s.price_ot
}
