<template>
  <div ref="filter" class="filter-group">
    <div
      v-for="item in controls"
      :key="item.id"
      class="filter-group__item">
      <checkbox-btn
        ref="checkbox"
        :name="name"
        :label="item.label"
        :value="item.value"
        :control="value"
        @handlerChange="handlerChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalog-filters-control-buttons',
  components: {
    checkboxBtn: () => import("~/components/app-components/checkbox-btn")
  },
  props: ['value', 'controls', 'name'],
  methods: {
    handlerChange (data) {
      console.log(data)
      this.$emit('input', data)
    }
  }
}
</script>

<style scoped>

</style>
