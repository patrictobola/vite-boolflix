<script>
import { store } from '../data/store';


export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        poster: String,
        path: String
    },
}


</script>

<template>
    <div class="card">
        <!-- <h1>{{ title }}</h1> -->
        <img :src="`${path}/w342${poster}`" alt="">
        <!-- <p>Informazioni del film</p>
        <span>Lingua</span> -->
    </div>
</template>

<style scoped>
.card {
    background-color: salmon;
    width: 100%;
    height: 100%;
}

img {
    width: 100%;
}
</style>