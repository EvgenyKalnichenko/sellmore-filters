<template>
  <div class="check-squared">
    <input
      class="check-squared__input"
      type="checkbox"
      :value="value"
      :id="id"
      :name="name"
      @input="handlerInput"
    >
    <label class="check-squared__label" :for="id"></label>
  </div>
</template>

<script>
export default {
  name: "check-squared",
  props: ['value', 'id', 'name'],
  data () {
    return{}
  },
  methods: {
    handlerInput () {
      this.$emit('handlerInput')
    }
  }
}
</script>

<style scoped>

</style>
