<script>
import { store } from './data/store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

const apiKey = '95094d5fa97d95a2c37307671297d10b'
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
    fetchSearchedFilms() {
      const endpoint = `${baseUri}/search/movie?api_key=${apiKey}&query=prova`
      axios.get(endpoint).then(res => {
        store.results = res.data.results
      }).catch(err => {
        console.log(err.message)
      }).then(() => {
        console.log('Daje è andata!')
      })
    },
  },

  created() {
    this.fetchSearchedFilms();
  }
}
</script>

<template>
  <AppHeader />
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
