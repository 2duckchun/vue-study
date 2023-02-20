<template>
  <div>
    <PokeMon v-for="(pokemon, i) in pokeArr" :key="i" :pokemon="pokemon"/>
  </div>
</template>

<script>
import axios from 'axios'
import PokeMon from './components/PokeMon.vue'

export default {
  name: 'App',
  data() {
    return {
      pokeArr: []
    }
  },
  components: {
    PokeMon
  },
  mounted() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      const axiosData = res.data.results
      this.pokeArr = [...axiosData]
    })
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
