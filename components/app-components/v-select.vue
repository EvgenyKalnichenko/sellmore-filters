<template>
  <div class="select-block">
    <div
      class="select-block__title"
      :class="areOptionsVisible ? 'is-active' : ''"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
      <div class="select-block__icon">
        1
      </div>
    </div>
    <transition
      @before-enter="beforeEnterF"
      @enter="enterF"
      @leave="leaveF"
      v-bind:css="false"
    >
      <ul class="select-block__list custom-scroll" v-if="areOptionsVisible">
        <li v-for="option in options" :key="option.value">
          <a href="#" @click.prevent="selectOption(option)">{{ option.name }}</a>
        </li>
      </ul>
    </transition>
    <input class="select-block__input" type="hidden" v-model="val">
  </div>
</template>

<script>
import { beforeEnter, leave, enter } from '~/assets/js/dropdownAnimation'

export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      areOptionsVisible: false,
      val: this.selected
    }
  },
  methods: {
    beforeEnterF (el) {
      beforeEnter(el)
    },
    enterF (el, done) {
      enter(el, 200, done)
    },
    leaveF (el, done) {
      leave(el, 200, done)
    },
    selectOption (option) {
      this.$emit('select', option)
      this.val = option.name
      this.areOptionsVisible = false
    },
    hideSelect (event) {
      if (!event.target.closest('.select-block')) {
        this.areOptionsVisible = false
      } else if (event.target.closest('.select-block').length && this.areOptionsVisible) {
        this.areOptionsVisible = false
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style>

</style>
