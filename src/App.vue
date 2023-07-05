<script>
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  },

  methods: {

  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style>
/* Reset  */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.flexbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
</style>
