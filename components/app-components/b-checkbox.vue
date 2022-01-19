<template>
  <div class="select-block__i">
    <span class="select-block__icon">
      <check-squared
        :id="value.id"
        :value="value.value"
        :name="name"
        :control="control"
        @handlerInput="handlerInput"
      />
    </span>
    <label :for="value.id" class="select-block__row">
      <span class="select-block__name">{{ value.label }}</span>
      <span class="select-block__note" v-html="value.description"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "b-checkbox",
  props: {
    value: {
      type: Object,
      required: true
    },
    control: {
      required: false
    },
    name: {
      type: String,
      required: true
    }
  },
  components: {
    checkSquared: () => import("~/components/app-components/check-squared")
  },
  data () {
    return {
      selected: []
    }
  },
  methods: {
    handlerInput(data) {
      this.selected.push(data)
      data.label = this.value.label
      this.$emit('handlerInput', data)
    },
  }
}
</script>

<style scoped>

</style>
