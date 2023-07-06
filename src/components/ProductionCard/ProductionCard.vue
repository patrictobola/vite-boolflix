<script>
import BaseCard from '../ProductionCard/BaseCard.vue'
import HoverCard from '../ProductionCard/HoverCard.vue'

// TODO Remove 
// import { store } from '../data/store';


export default {
    components: {
        BaseCard,
        HoverCard,
    },
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
        }
    }

}


</script>

<template>
    <BaseCard v-if="!hasItHover" @mouseenter="hasItHover = true" :poster="poster" :imgPath="imgPath"
        :originalTitle="originalTitle" />


    <HoverCard v-else @mouseleave="hasItHover = false" :originalTitle="originalTitle" :overview="overview" :vote="vote" />
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
</style>