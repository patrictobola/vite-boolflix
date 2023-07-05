<script>

export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number
    },
}


</script>

<template>
    <div class="card">
        <h1>{{ title }}</h1>
        <p>Informazioni del film</p>
        <span>Lingua</span>
    </div>
</template>

<style scoped>
.card {
    background-color: salmon;
    width: 100%;
    height: 100%;
}
</style>