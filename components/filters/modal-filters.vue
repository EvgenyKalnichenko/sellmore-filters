<template>
  <modal
    name="filters"
    height="auto"
    width="900px"
    adaptive="adaptive"
  >
    <div class="modal__close" @click="$modal.hide('filters')">x</div>
    <h2>Еще фильтры</h2>
  </modal>
</template>

<script>
export default {
  name: "modal-filters"
}
</script>

<style scoped>

</style>
