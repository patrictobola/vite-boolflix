<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            selectedOption: 10759,
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
        <option v-for="option in options" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
</template>


<style></style>