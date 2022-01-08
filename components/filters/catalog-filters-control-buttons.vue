<template>
  <div class="filter-group">
    <div
      v-for="item in controls"
      :key="item.id"
      class="filter-group__item">
      <checkbox-btn
        :name="name"
        :label="item.label"
        :value="item.value"
        :checked="item.checked"
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
      this.$emit('input', data)
    }
  }
}
</script>

<style scoped>

</style>
