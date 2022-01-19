<template>
  <div class="check-squared">
    <input
      class="check-squared__input"
      type="checkbox"
      :value="value"
      :id="id"
      :name="name"
      :checked="checked"
      @input="handlerInput"
    >
    <label class="check-squared__label" :for="id"></label>
  </div>
</template>

<script>
export default {
  name: "check-squared",
  props: ['value', 'id', 'name', 'control'],
  data () {
    return{}
  },
  methods: {
    handlerInput () {
      this.$emit('handlerInput', {name: this.name, value: this.value})
    }
  },
  computed: {
    checked () {
      if(this.control) {
        return !!this.control.find(el => el.value === this.value)
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>
