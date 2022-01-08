<template>
  <div class="panel-control">
    <button @click="$emit('save')" type="button" class="btn">Сохранить</button>
    <button @click="$emit('reset')" type="button" class="btn btn--white">Очистить</button>
  </div>
</template>

<script>
export default {
  name: "panel-control"
}
</script>

<style scoped>

</style>
