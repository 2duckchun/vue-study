<template>
  <div>
    <h1>{{ pokemon.name }}</h1>
    <p>{{ pokemon.url }}</p>
  </div>
</template>

<script>
export default {
  name: "PokeMon",
  props: {
    pokemon: Array
  }
}
</script>

<style>

</style>