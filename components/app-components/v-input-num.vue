<template>
  <div class="v-input">
      <span v-if="valueModel && showCounter" class="v-input__counter">
        <span class="v-input__num">{{ valueModel }}</span>
        <span class="v-input__clear" @click="clear">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.01065 4.95407C6.71231 5.65573 7.34714 6.29056 7.98198 6.92539C8.5834 7.52681 9.18482 8.12824 9.75283 8.69625C10.087 9.03037 10.087 9.46473 9.78624 9.76544C9.48553 10.0661 9.05117 10.0327 8.75046 9.69861C7.58103 8.52918 6.37819 7.32634 5.20876 6.15691C5.14193 6.09009 5.10852 6.02326 4.97487 5.88961C4.90804 5.98985 4.90804 6.09009 4.84122 6.1235C3.67179 7.35975 2.46895 8.52918 1.29952 9.73203C1.09904 9.9325 0.831744 10.0661 0.531033 9.96591C-0.00356356 9.83226 -0.170625 9.19743 0.19691 8.79648C0.263735 8.72966 0.330559 8.66283 0.397384 8.59601C1.5334 7.45999 2.66942 6.32397 3.83885 5.18795C3.90568 5.12113 3.9725 5.08772 4.03933 5.0543C4.03933 5.02089 4.07274 4.98748 4.07274 4.95407C4.00591 4.92066 3.90568 4.88724 3.87226 4.82042C2.63601 3.65099 1.46658 2.44815 0.297147 1.27872C-0.0369759 0.944592 -0.0703882 0.543644 0.19691 0.242934C0.464209 -0.0577769 0.931981 -0.0911892 1.23269 0.209522C1.56681 0.510232 1.86753 0.844355 2.16824 1.14507C3.10378 2.08061 4.03933 3.01615 5.00828 3.98511C5.07511 3.91829 5.14193 3.85146 5.20876 3.81805C6.37819 2.64862 7.54762 1.5126 8.68364 0.343171C8.8507 0.176109 9.01776 0.0758723 9.25165 0.0758723C9.55236 0.0758723 9.78624 0.209522 9.91989 0.47682C10.0535 0.744118 9.98672 1.01142 9.81965 1.21189C9.75283 1.31213 9.686 1.37895 9.61918 1.44578C8.48316 2.54838 7.38056 3.6844 6.24454 4.78701C6.17771 4.85383 6.11089 4.88724 6.01065 4.95407Z" fill="#323232"/>
          </svg>
        </span>
      </span>
    <input
      class="v-input__i"
      :placeholder="placeholder"
      :name="name"
      v-model="valueModel"
      :maxlength="maxlength"
      @focus="onFocus"
      @blur="outOfFocus"
      type="tel"
    />
  </div>
</template>

<script>
export default {
  name: "v-input-num",
  props: {
    name: {
      type: String
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    maxlength: {
      type: [Number, String]
    }
  },
  data() {
    return {
      valueModel: this.value,
      showCounter: true
    }
  },
  methods: {
    emit () {
      this.$emit('handlerInput', { name: this.name, value: this.valueModel })
    },
    onFocus() {
      this.showCounter = false
    },
    outOfFocus() {
      this.showCounter = true
      console.log('outOfFocus')
      this.emit()
    },
    clear() {
      this.valueModel = ''
      setTimeout(() => {
        this.emit()
      }, 0)
    },
    currencyFilter (str) {
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(str)
    }
  },
  watch: {
    valueModel () {
      const num = this.valueModel.replace(/[^\d]/g, '')
      this.valueModel = this.currencyFilter(num)
      if ( parseInt(this.valueModel) === 0 ) {
        this.valueModel = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
