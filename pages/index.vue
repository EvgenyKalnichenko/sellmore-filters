<template>
  <div class="container">
    <br><br><br>
    <div>
      <form action="#" class="search-form" id="filters">
        <input type="hidden" name="filter" value="1">
        <catalog-filters-control-buttons
          :controls="roomsSelected"
          @input="onChangeFilters"
          name="rooms"
        />
        <catalog-filters-control-buttons
          :controls="deadlineSelected"
          @input="onChangeFilters"
          name="deadline"
        />
        <catalog-filters-range
          placeholder-first="Цена от"
          name-first="price_ot"
          placeholder-second="до"
          name-second="price_do"
          type-range="₽"
          @handlerInput="onChangeFilters"
        />
        <catalog-filters-range
          placeholder-first="Площадь от"
          name-first="square_ot"
          placeholder-second="до"
          name-second="square_do"
          type-range="м<sup>2</sup>"
          @handlerInput="onChangeFilters"
          :max-symbol-first="18"
          :max-symbol-second="18"
        />
        <catalog-filters-select
          :value="finishing"
          title="Отделка"
          name="otdelka"
          @handlerInput="onChangeFilters"
        />
        <button class="search-form__btn btn">Показать</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  components: {
    catalogFiltersControlButtons: () => import("~/components/filters/catalog-filters-control-buttons"),
    catalogFiltersRange: () => import("~/components/filters/catalog-filters-range"),
    catalogFiltersSelect: () => import("~/components/filters/catalog-filters-select")
  },
  async asyncData({$axios}) {
    let roomsSelected, deadlineSelected, finishing, filters
    await $axios.$get('/mock/filters.json').then((res) => {
      console.log(res)
      filters = res
      roomsSelected = res.roomsSelected
      deadlineSelected = res.deadlineSelected
      finishing = res.finishing
    }).catch((error) => {
      console.error(error)
    })
    return {
      roomsSelected,
      deadlineSelected,
      finishing,
      filters
    }
  },
  data() {
    return {
      roomsSelected: null,
      deadlineSelected: null,
      finishing: null,
      filters: null
    }
  },
  mounted() {
    this.setFilters(this.filters)
  },
  methods: {
    ...mapActions('filters', ['setFilters']),
    onChangeFilters(data) {

      const arr = new Map();
      arr.set(data.name,data.value)
      console.log('onChangeRooms', arr)
      // const myForm = document.getElementById('filters')
      // const formData = new FormData(myForm)
      // const data = []
      // for (const [key, val] of formData.entries()) {
      //   if(val.length) {
      //     data.push({ [key]: val })
      //   }
      // }
      // console.log(data)
      // this.$router.push({
      //   path: `${this.$route.path}`,
      //   query: data[1]
      // })
    },
    handlerInput (){}
  }
}
</script>
