<script>
export default {
    data() {
        return {
            selectedGenre: "Action & Adventure",
        }
    },
    props: {
        genres: Array
    }

}
</script>


<template>
    <select v-model="selectedGenre" name="genre" id="genre">
        <option v-for="genre in genres" :key="genre.id" :value="genre.name">{{ genre.name }}</option>
    </select>
</template>


<style></style>