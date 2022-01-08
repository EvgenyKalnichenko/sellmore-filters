<template>
  <div class="select-block">
    <div
      class="select-block__top"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ title }}
    </div>
    <transition
      @before-enter="beforeEnterF"
      @enter="enterF"
      @leave="leaveF"
      v-bind:css="false"
    >
      <div class="select-block__dropdown" v-show="areOptionsVisible">
        <div
          v-for="(item, key) in value"
          :key="key"
          class="select-block__i"
        >
           <span class="select-block__icon">
                  <check-squared
                    :id="item.id"
                    :value="item.value"
                    :name="name"
                    @handlerInput="handlerInput"
                  />
                </span>
          <label :for="item.id" class="select-block__row">
            <span class="select-block__name">{{ item.label }}</span>
            <span class="select-block__note" v-html="item.description"></span>
          </label>
        </div>
        <div class="select-block__bottom">
          <panel-control @save="save" @reset="reset"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {beforeEnter, leave, enter} from '~/assets/js/dropdownAnimation'

export default {
  name: "catalog-filters-select",
  components: {
    checkSquared: () => import("~/components/app-components/check-squared"),
    panelControl: () => import("~/components/app-components/panel-control")
  },
  props: {
    value: {
      type: [Object, Array],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      areOptionsVisible: false,
      val: this.selected
    }
  },
  methods: {
    beforeEnterF(el) {
      beforeEnter(el)
    },
    enterF(el, done) {
      enter(el, 200, done)
    },
    leaveF(el, done) {
      leave(el, 200, done)
    },
    hideSelect(event) {
      if (!event.target.closest('.select-block')) {
        this.areOptionsVisible = false
      } else if (event.target.closest('.select-block').length && this.areOptionsVisible) {
        this.areOptionsVisible = false
      }
    },
    handlerInput() {
      this.$emit('handlerInput')
    },
    save() {
      console.log('save')
    },
    reset() {
      console.log('reset')
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style scoped>

</style>
