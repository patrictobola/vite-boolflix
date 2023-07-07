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
      })
    },

    fetchGenresProduction(prodUri, dataPath) {
      const endpoint = `${baseUri}/genre/${prodUri}/list${apiKey}`;
      this.fetchApiDatas(endpoint, dataPath, "genres")
    },

    fetchSearchedProduction(word) {
      this.fetchSearchedFilms(word);
      this.fetchSearchedTVSeries(word);
      this.fetchFilmsByID();
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

    fetchFilmsByID() {
      if (this.seachedFilmsID.length === 20) return
      for (const film in store.films) {
        if (Object.hasOwnProperty.call(store.films, film)) {
          const element = store.films[film].id;
          store.seachedFilmsID.push(element)
        }
      }
    },

    fetchActorsFromFilm() {
      store.seachedFilmsID.forEach(element => {
        const endpoint = `${baseUri}/movie/${element}/credits${apiKey}`;
        this.fetchApiDatas(endpoint, "cast", "cast")

      });
    }
  },


  created() {
    this.fetchGenresProduction("movie", "filmGenres");
    this.fetchGenresProduction("tv", "tvSeriesGenres");
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
