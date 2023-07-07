<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            selectedOption: 'all',
        }
    },
    props: {
        options: Array,
        placeholder: String,
        category: String,
        emitInfo: String
    },
    emits: ['genre-selected'],
}
</script>


<template>
    <select v-model="selectedOption" @click="$emit(emitInfo, selectedOption)" name="genre" id="genre">

        <option value="all">{{ placeholder }}</option>
        <option value="" disabled>{{ category }}</option>
        <option v-for="option in options" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
</template>


<style></style>