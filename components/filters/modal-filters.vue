<template>
  <modal
    name="filters"
    height="auto"
    width="900px"
    adaptive="adaptive"
    class="modal"
  >
    <div class="modal__wrap">
      <div class="modal__close" @click="$modal.hide('filters')">x</div>
      <h2 class="modal__title">Еще фильтры</h2>
      <slot name="filters"></slot>
    </div>
  </modal>
</template>

<script>

export default {
  name: "modal-filters",
  components: {
    catalogFiltersControlButtons: () => import("~/components/filters/catalog-filters-control-buttons")
  }
}
</script>

<style scoped lang="scss">
.modal {
  &__wrap {
    padding: 30px;
    position: relative;
  }

  &__title {
    margin-bottom: 15px;
  }

  &__close {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
