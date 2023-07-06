<script>
export default {
    props: {
        vote: Number,
        originalTitle: String,
        overview: String,
        language: String,
    },
    data() {
        return {
            hasItHover: false,
            summary: this.overview.slice(0, 100) + "...",
        }
    },
    computed: {
        roundedVote() {
            const vote = this.vote;
            return Math.round(vote) / 2;
        },
        hasFlag() {
            const availableFlags = ["it", "en"];
            return availableFlags.includes(this.language)
        },
        flagPath() {
            const url = new URL(`../../assets/img/${this.language}.png`, import.meta.url);
            return url.href;
        },
    },

}
</script>


<template>
    <div class="card hover">
        <h1>{{ originalTitle }}</h1>
        <img v-if="hasFlag" :src="flagPath" :alt="originalTitle">
        <span v-else>Language: {{ language }}</span>
        <span>Vote: {{ roundedVote }}</span>
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

p {
    padding: 0 10px;
    font-size: 0.9rem;
}

h1 {
    margin: auto 0;
    text-align: center;
    font-size: 1.5rem;
}

img {
    width: 30px;
    margin: 10px 0;
}
</style>