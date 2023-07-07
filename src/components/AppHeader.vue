<script>
import SearchBar from './SearchInputs/SearchBar.vue';
import SearchSelect from './SearchInputs/SearchSelect.vue'
import { store } from '../data/store';

export default {
    components: {
        SearchBar,
        SearchSelect
    },
    data() {
        return {
            store
        }
    },
    methods: {
        fetchSearchedMovie(word) {
            this.$emit('search-movie', word)
        },
        fetchSelectedMovie(word) {
            store.categoryMovieID = word
        },
        fetchSelectedSeries(word) {
            store.categoryTvSeriesID = word
        }
    },
    emits: ['search-movie', 'genre-movie-selected', 'genre-selected']

}

</script>

<template>
    <div class="navbar">
        <div class="container flexbox">
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            <div class="searchSection">
                <SearchSelect :emitInfo="`genre-selected`" @genre-selected="fetchSelectedSeries"
                    :category="`TV Series Genres`" :placeholder="`All Series`" :options="store.tvSeriesGenres" />
                <SearchSelect :emitInfo="`genre-movie-selected`" @genre-movie-selected="fetchSelectedMovie"
                    :category="`Movies Genres`" :placeholder="`All Movies`" :options="store.filmGenres" />
                <SearchBar @search-movie="fetchSearchedMovie" placeholder="Cerca quì il tuo film o serie tv" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.searchSection {
    display: flex;
}

.navbar {
    height: 100px;
    background-color: #000;
    padding: 0 50px;
}

h1 {
    color: red;
    font-size: 3rem;
    margin: 0;
}
</style>