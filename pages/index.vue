<template>
  <div class="container">
    <br><br><br>
    <div>
      {{ filtersControl }}
      <form @submit.prevent="handlerSubmit" action="#" class="search-form" id="filters">
        <input type="hidden" name="filter" value="1">
        <catalog-filters-control-buttons
          :controls="roomsControls"
          :value="this.filtersControl.rooms"
          @input="onChangeFilters"
          name="rooms[]"
        />
        <catalog-filters-control-buttons
          :controls="deadlineSelected"
          :value="this.filtersControl.deadline"
          @input="onChangeFilters"
          name="deadline[]"
        />
        <catalog-filters-range
          placeholder-first="Цена от"
          name-first="price_ot"
          :valueOt="this.filtersControl.price_ot"
          placeholder-second="до"
          name-second="price_do"
          :valueDo="this.filtersControl.price_do"
          type-range="₽"
          @handlerInput="onChangeFilters"
        />
        <catalog-filters-range
          placeholder-first="Площадь от"
          name-first="square_ot"
          :valueOt="this.filtersControl.square_ot"
          placeholder-second="до"
          name-second="square_do"
          :valueDo="this.filtersControl.square_do"
          type-range="м<sup>2</sup>"
          @handlerInput="onChangeFilters"
          :max-symbol-first="18"
          :max-symbol-second="18"
        />
        <catalog-filters-select
          :controls="finishing"
          :value="this.filtersControl.otdelka"
          title="Отделка"
          name="otdelka[]"
          @handlerInput="onChangeFilters"
        />
        <div class="search-form__bottom">
          <button type="button" class="btn" @click="$modal.show('filters')">Еще параметры</button>
          <button type="submit" class="search-form__btn btn">Показать <span>(125)</span></button>
          <button type="button" class="btn btn--white" @click="resetAllFilters">Очистить</button>
        </div>
        <modal-filters>
          <template v-slot:filters>
            <catalog-filters-control-buttons
              :controls="roomsControls"
              :value="filtersControl.rooms_modal"
              @input="onChangeFilters"
              name="rooms_modal[]"
            />
          </template>
        </modal-filters>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'IndexPage',
  components: {
    catalogFiltersControlButtons: () => import("~/components/filters/catalog-filters-control-buttons"),
    catalogFiltersRange: () => import("~/components/filters/catalog-filters-range"),
    catalogFiltersSelect: () => import("~/components/filters/catalog-filters-select"),
    modalFilters: () => import("~/components/filters/modal-filters")
  },
  async asyncData({$axios}) {
    let roomsControls, deadlineSelected, finishing, filters
    await $axios.$get('/mock/filters.json').then((res) => {
      console.log(res)
      filters = res
      roomsControls = res.roomsControls
      deadlineSelected = res.deadlineSelected
      finishing = res.finishing
    }).catch((error) => {
      console.error(error)
    })
    return {
      roomsControls,
      deadlineSelected,
      finishing,
      filters
    }
  },
  data() {
    return {
      roomsControls: null,
      deadlineSelected: null,
      finishing: null,
      filters: null
    }
  },
  methods: {
    ...mapActions('filters', ['changeFilters']),
    ...mapActions('filters', ['applyFilters']),
    ...mapActions('filters', ['resetFilters']),
    ...mapActions('filters', ['resetFiltersAll']),
    onChangeFilters(data) {
      this.changeFilters(data)
    },
    handlerSubmit() {
      this.applyFilters()
      this.$router.push({
        path: `${this.$route.path}${this.url}`
      })
    },
    resetAllFilters() {
      this.resetFiltersAll()
    }
  },
  computed: {
    ...mapGetters('filters', ['filtersControl']),
    ...mapGetters('filters', ['url'])
  }
}
</script>
