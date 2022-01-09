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
      // const myForm =  this.$refs.filter.$el
      // const formData = new FormData(myForm)
      // const array = []
      // const obj = {}
      // this.$refs.checkbox.forEach(el => {
      //   const input = el.$el.querySelector('.checkbox-btn__input')
      //   if(input.checked === true) {
      //     array.push(input.value)
      //   }
      // })
      // Object.assign(obj, { [data.name]: array })
      // console.log(data)
      this.$emit('input', data)
    }
  }
}
</script>

<style scoped>

</style>
