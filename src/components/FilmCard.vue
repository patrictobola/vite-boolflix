<script>
// TODO Remove 
// import { store } from '../data/store';


export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        poster: String,
        imgPath: String
    },
    data() {
        return {
            hasItHover: false
        }
    },

    computed: {
        hasPoster() {
            return this.poster
        },
    },
}


</script>

<template>
    <div class="card" @mouseenter="hasItHover = true" @mouseleave="hasItHover = false">
        <img v-if="hasPoster" :src="`${imgPath}/w342${poster}`" :alt="title">
        <h1 v-else>Questo film non ha immagine di copertina</h1>
        <h2 v-if="!hasPoster">{{ originalTitle }}</h2>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 100%;
    object-fit: cover;
    height: 100%;
}

h1 {
    margin: auto 0;
    text-align: center;

}
</style>