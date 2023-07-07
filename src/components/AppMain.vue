<script>
import { store } from '../data/store';
import ProductionCard from './ProductionCard/ProductionCard.vue'

export default {
    data() {
        return {
            store,
            imgPath: store.posterPath

        }
    },

    components: {
        ProductionCard,
    },
    computed: {
        filteredFilms() {
            if (store.categoryMovieID === 'all') return store.films
            const word = store.categoryMovieID;
            return store.films.filter((film) => {
                return film.genre_ids.includes(word)
            })
        },
        filteredTVSeries() {
            if (store.categoryTvSeriesID === 'all') return store.tvSeries
            const word = store.categoryTvSeriesID;
            return store.tvSeries.filter((series) => {
                return series.genre_ids.includes(word)
            })
        },

    },
}
</script>

<template>
    <div class="app-container">
        <div class="container">
            <div v-if="filteredFilms.length" class="films">
                <!-- Da quì parte la lista di film cercati  -->
                <h1>Films</h1>
                <ul>
                    <li v-for="film in filteredFilms" :key="film.id">
                        <ProductionCard :title="film.title" :originalTitle="film.original_title"
                            :language="film.original_language" :vote="film.vote_average" :poster="film.poster_path"
                            :imgPath="imgPath" :overview="film.overview" />
                    </li>
                </ul>
            </div>
            <div v-if="filteredTVSeries.length" class="tv-series">
                <h1>TV Series</h1>
                <ul>
                    <li v-for="serie in filteredTVSeries" :key="serie.id">
                        <ProductionCard :title="serie.title" :originalTitle="serie.original_name"
                            :language="serie.original_language" :vote="serie.vote_average" :poster="serie.poster_path"
                            :imgPath="imgPath" :overview="serie.overview" />
                    </li>
                </ul>
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
    height: 279px;
}
</style>