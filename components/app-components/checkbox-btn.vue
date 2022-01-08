<template>
  <label
    ref="label"
    class="checkbox-btn"
    :class="checkedInput ? 'active' : ''"
  >
    <input
      class="checkbox-btn__input"
      type="checkbox"
      :name="name"
      :value="value"
      @change="handlerChange"
      :checked="checkedInput"
      hidden
    >
    <span class="checkbox-btn__label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "checkbox-btn",
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      checkedInput: this.checked
    }
  },
  methods: {
    handlerChange(e) {
      this.checkedInput = !this.checkedInput
      this.$emit('handlerChange',{ name: this.name, value: this.value })
    }
  }
}
</script>

<style scoped>

</style>
