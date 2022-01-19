<template>
  <div class="filter-group">
    <div class="filter-group__range">
      <v-input-num
        :name="nameFirst"
        :value="valueOt"
        :placeholder="placeholderFirst"
        :maxlength="maxSymbolFirst"
        @handlerInput="handlerInput"
      />
      —
      <v-input-num
        :name="nameSecond"
        :value="valueDo"
        :placeholder="placeholderSecond"
        :maxlength="maxSymbolSecond"
        @handlerInput="handlerInput"
      />
    </div>
    <div class="filter-group__type" v-html="typeRange"></div>
  </div>
</template>

<script>
export default {
  name: "catalog-filters-range",
  props: {
    value: {
      required: false
    },
    valueOt: {
      required: false
    },
    valueDo: {
      required: false
    },
    nameFirst: {
      type: String,
      required: true
    },
    nameSecond: {
      type: String,
      required: true
    },
    typeRange: {
      type: String,
      required: true
    },
    placeholderFirst: {
      type: String,
      required: true
    },
    placeholderSecond: {
      type: String,
      required: true
    },
    maxSymbolSecond: {
      type: [Number, String],
      default: 10
    },
    maxSymbolFirst: {
      type: [Number, String],
      default: 10
    }
  },
  components: {
    vInputNum: () => import("~/components/app-components/v-input-num")
  },
  methods: {
    handlerInput (data) {
      this.$emit('handlerInput', data)
    }
  }
}
</script>

<style scoped>

</style>
