<template lang="html">
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="definition"
              :rules="nameRules"
              label="Search Movies"
              @input="changeMessage"
              required
            ></v-text-field>

            <v-btn
              class="mr-4"
              @click="searchDefinition"
              :disabled="!valid"
              color="success"
            >
              Search
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="3" sm="6" md="3" v-for="def in definitions" :key="def.id">
            <Movie
              :id="def.id"
              :title="def.title"
              :poster_path="def.poster_path"
              :overview="def.overview"
            />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import Movie from './Movies/Movie'
  export default {
    name: 'Movies',
    components: {
      Movie,
    },
    data: () => ({
      valid: true,
      definition: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 5) || 'Name must be longer than 5 characters',
      ],
      definitions: [],
      theMovieDBApiKey: 'e55aedd9c2529e025021dda202c18d3b',

    }),
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },

      changeMessage(event) {
        this.definition = event.target.value;
        this.$emit('messageChange', this.definition);
      },

      searchDefinition() {
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.theMovieDBApiKey}&language=en-US&query=${this.definition}&page=1&include_adult=false`)
          .then(response => response.json())
          .then(response => response.results.forEach(def => {
            this.definitions.push({
              id: def.id,
              title: def.title,
              poster_path: def.poster_path,
              overview: def.overview,
            })
          }));
      },
    }
  }
</script>

<style lang="css" scoped>

</style>