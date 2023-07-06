<script>
import { store } from './data/store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

const apiKey = '?api_key=95094d5fa97d95a2c37307671297d10b'
const baseUri = 'https://api.themoviedb.org/3'

export default {
  data() {
    return store
  },
  components: {
    AppHeader,
    AppMain
  },

  methods: {
    fetchApiDatas(endpoint, storePath, apiPath = "results") {
      axios.get(endpoint).then(res => {
        store[storePath] = res.data[apiPath]
      }).catch(err => {
        console.log(err.message)
      }).then(() => {
        console.log('Daje è andata!')
      })
    },

    fetchGenresProduction() {
      const endpoint = `${baseUri}/genre/tv/list${apiKey}`;
      this.fetchApiDatas(endpoint, "filmGenres", "genres")
    },

    fetchSearchedProduction(word) {
      this.fetchSearchedFilms(word);
      this.fetchSearchedTVSeries(word);
    },
    // Ho scelto volutamente di lasciarle distinte perché prevedo di creare un select che mi permette di scegliere se cercare solo film, solo serie tv oppure entrambi
    fetchSearchedFilms(word) {
      const endpoint = `${baseUri}/search/movie${apiKey}&query=${word}`;
      this.fetchApiDatas(endpoint, "films")
    },

    fetchSearchedTVSeries(word) {
      const endpoint = `${baseUri}/search/tv${apiKey}&query=${word}`
      this.fetchApiDatas(endpoint, "tvSeries")
    },

  },

  created() {
    this.fetchGenresProduction();
  }
}
</script>

<template>
  <AppHeader @search-movie="fetchSearchedProduction" />
  <AppMain />
</template>

<style>
/* Reset  */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.flexbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
</style>
