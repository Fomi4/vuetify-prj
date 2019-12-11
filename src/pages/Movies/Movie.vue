<template lang="html">
  <!-- <div class="container">
    <h3>id: {{ id }}</h3>
    <p>Name: {{ title }}</p>
    <p><img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`"></p>
    <p>{{ overview }}</p>
  </div> -->

  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`"
    >
    </v-img>

    <v-card-subtitle class="pb-0"># {{ id }} | {{ title }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ overview }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Movie',
    props: {
      id: Number,
      title: String,
      poster_path: String,
      overview: String
    },
    // computed: {
    //   votes() {
    //     return `UP: ${this.thumbsUp} | DOWN: ${this.thumbsDown}`
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid green;
}
</style>