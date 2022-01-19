export const state = () => ({
  filters: {
    rooms: [
      {value: '1'},
      {value: '2'}
    ],
    deadline: [],
    otdelka: [],
    rooms_modal: [],
    price_ot: '1515',
    price_do: '',
    square_ot: '',
    square_do: ''
  },
  url: ''
})

export const mutations = {
  SET_LIST_FILTERS(state, data) {
    state.listFilters = data
  },
  SET_QUERY_PARAMS(state, url) {
    state.url = url
  },
  CHANGE_FILTER_ARRAY(state, params) {
    if(state.filters[params.name]) {
      // если существует то меняем состояние
      if(state.filters[params.name].find(el => el.value === params.value)) {
        console.log('ЗНАЧЕНИЕ НАЙДЕНО В МАССИВЕ')
        state.filters[params.name] = Array.from(state.filters[params.name].filter(el => el.value !== params.value))
      }else {
        console.log('НОВОЕ ЗНАЧЯЕНИЕ В МАССИВЕ')
        state.filters[params.name] = [
          ...state.filters[params.name],
          {...params}
        ]
      }
    }else {
      // если нет то создаем новый массив с объектом внутри
      state.filters[params.name] = [params]
    }
  },
  ADD_FILTER(state, params) {
    state.filters[params.name] = params.value
  },
  RESET_FILTERS(state, params) {
    state.filters[params.name] = params.value
  },
  RESET_FILTERS_ALL(state) {
    Object.keys(state.filters).forEach((key, value) => {
      console.log(key, value)
      if (typeof state.filters[key] === 'string') {
        state.filters[key] = ''
      } else {
        state.filters[key] = []
      }
    })
  }
}

export const actions = {
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
    const name = params.name.split('[]').join('');
    const checkArray = params.name.indexOf('[]')

    if (checkArray > 0) {
      // Если массив данных []
      context.commit('CHANGE_FILTER_ARRAY', {
        value: params.value,
        label: params.label,
        name: name
      })
    } else {
      // Если одиночное значение
      context.commit('ADD_FILTER', params)
    }
  },
  resetFilters (context, data) {
    console.log(name)
    const name = data.split('[]').join('');
    const checkArray = data.indexOf('[]')
    if (checkArray > 0) {
      // Если массив данных []
      context.commit('RESET_FILTERS', {name, value: []})
    } else {
      // Если одиночное значение
      context.commit('RESET_FILTERS', {name, value: ''})
    }
  },
  resetFiltersAll(context) {
    context.commit('RESET_FILTERS_ALL')
  }
}

export const getters = {
  filtersControl: s => s.filters,
  url: s => s.url
}
