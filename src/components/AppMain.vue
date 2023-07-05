<script>
import { store } from '../data/store';
import FilmCard from './FilmCard.vue'

export default {
    data() {
        return {
            // title: store.results.title,
            // originalTitle: store.results.original_title,
            // vote: store.results.vote_avarage,
            // language: store.results.original_language,
            // id: store.results.id,
            store,
            path: store.posterPath

        }
    },

    components: {
        FilmCard,
    }
}
</script>

<template>
    <div class="app-container">
        <div class="container">
            <div class="films">
                <!-- Da quì parte la lista di film cercati  -->
                <h1>Films</h1>
                <ul>
                    <li v-for="film in store.films" :key="film.id">
                        <FilmCard :title="film.title" :originalTitle="film.original_title"
                            :language="film.original_language" :vote="film.vote_average" :poster="film.poster_path"
                            :path="path" />
                    </li>
                </ul>
            </div>
            <div class="tv-series">
                <!-- <h1>TV Series</h1>
                <ul>
                    <li v-for="serie in store.tvSeries" :key="serie.id">
                        <FilmCard />
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-container {
    height: calc(100vh - 100px);
    background-color: slategray;
    overflow-y: auto;
}

ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
}

li {
    width: calc(100% / 5 - 40px);
    padding: 20px;
    height: 400px;
}
</style>