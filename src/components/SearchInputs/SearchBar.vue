<script>
export default {
    data() {
        return {
            searchedTerm: ''
        }
    },
    emits: ['search-movie'],
    props: { placeholder: String }
}
</script>

<template>
    <form action="submit">
        <input type="text" v-model="searchedTerm" name="searchBar" id="searchBar" :placeholder="placeholder || 'Cerca quì'">
        <button @click.prevent="$emit('search-movie', searchedTerm)">Cerca!</button>
    </form>
</template>

<style scoped>
input {
    min-width: 250px;
}
</style>