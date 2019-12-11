<template lang="html">
  <div class="search-bar">
    <Movies @messageChange="definition = $event" />
  </div>
</template>

<script>
  import Movies from '../pages/Movies';
  export default {
    name: 'SearchBar',
    components: {
      Movies,
    },
  }
</script>

<style lang="css" scoped>

</style>