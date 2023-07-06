<script>
export default {
    props: {
        vote: Number,
        originalTitle: String,
        overview: String
    },
    data() {
        return {
            hasItHover: false,
            summary: this.overview.slice(0, 100) + "..."
        }
    },
    computed: {

        roundedVote() {
            const vote = this.vote;
            return Math.round(vote) / 2;
        }
    },

}
</script>


<template>
    <div class="card hover" @mouseenter="hasItHover = true" @mouseleave="hasItHover = false">
        <h1>{{ originalTitle }}</h1>
        <span>Vote: {{ roundedVote }}</span>
        <p>{{ summary }}</p>
    </div>
</template>


<style scoped>
p {
    padding: 0 10px;
    font-size: 0.9rem;
}

h1 {
    margin: auto 0;
    text-align: center;
}
</style>