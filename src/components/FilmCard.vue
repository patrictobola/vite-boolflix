<script>
import { callWithAsyncErrorHandling } from 'vue';

// TODO Remove 
// import { store } from '../data/store';


export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        poster: String,
        imgPath: String,
        overview: String
    },
    data() {
        return {
            hasItHover: false,
            summary: this.overview.slice(0, 100) + "..."
        }
    },

    computed: {
        hasPoster() {
            return this.poster
        },
        roundedVote() {
            const vote = this.vote;
            return Math.round(vote / 2)
        }
    },
}


</script>

<template>
    <div v-if="hasItHover" class="card" @mouseenter="hasItHover = true" @mouseleave="hasItHover = false">
        <img v-if="hasPoster" :src="`${imgPath}/w342${poster}`" :alt="title">
        <h1 v-else>Questo film non ha immagine di copertina</h1>
        <h2 v-if="!hasPoster">{{ originalTitle }}</h2>
    </div>
    <div v-else class="card hover" @mouseenter="hasItHover = true" @mouseleave="hasItHover = false">
        <h1>{{ originalTitle }}</h1>
        <p>{{ summary }}</p>
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
    background-color: #111111;
    color: white;
}

.card.hover {
    border: 1px solid white;
}

p {
    padding: 0 10px;
    font-size: 0.9rem;
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