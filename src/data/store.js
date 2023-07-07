import {reactive} from 'vue';
export const store = reactive({
    films: [],
    filmGenres: [],
    tvSeries: [],
    tvSeriesGenres: [],
    posterPath: 'https://image.tmdb.org/t/p',
    categoryMovieID: 'all',
    categoryTvSeriesID: 'all',
    seachedFilmsID: [],
    cast: []
})