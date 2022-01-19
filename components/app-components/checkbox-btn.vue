<template>
  <label
    ref="label"
    class="checkbox-btn"
    :class="checked ? 'active' : ''"
  >
    <input
      class="checkbox-btn__input"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
      @change="handlerChange"
      hidden
    >
    <span class="checkbox-btn__label">{{ label }}</span>
  </label>
</template>

<script>

export default {
  name: "checkbox-btn",
  props: {
    control: {
      type: [Array, Object]
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    value: {
      type: String
    }
  },
  methods: {
    handlerChange(e) {
      this.$emit('handlerChange',{ name: this.name, value: this.value })
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
