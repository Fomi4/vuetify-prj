<template lang="html">
  <header>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <router-link class="light-blue--text" :to="{ name: 'Home', params: {} }">Home</router-link>
        <router-link class="light-blue--text" :to="{ name: 'Movies', params: {} }">Search</router-link>
      </div>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>

</style>