<template>

  <Header />
  <div class="container">
    <router-view/>
  </div>

</template>


<script>

import Header from './components/Header'

export default {

  components: {
    Header
  },

  methods: {

  }

}

</script>


<style>

body{
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
