<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            selectedOption: 'all',
        }
    },
    props: {
        options: Array
    },
    emits: ['genre-selected'],
}
</script>


<template>
    <select v-model="selectedOption" @click="$emit('genre-selected', selectedOption)" name="genre" id="genre">
        <option value="all">All films & series</option>
        <option v-for="option in options" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
</template>


<style></style>