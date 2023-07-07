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
    },


}


</script>

<template>
    <BaseCard v-if="!hasItHover" @mouseenter="hasItHover = true" :poster="poster" :imgPath="imgPath"
        :originalTitle="originalTitle" />


    <HoverCard v-else @mouseleave="hasItHover = false" :originalTitle="originalTitle" :language="language"
        :overview="overview" :vote="vote" />
</template>

<style></style>