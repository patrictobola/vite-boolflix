import {reactive} from 'vue';
export const store = reactive({
    films: [],
    filmGenres: [],
    tvSeries: [],
    posterPath: 'https://image.tmdb.org/t/p',
    categoryID: 'all',
    seachedFilmsID: []
})