<template>
    <div>
      <button @click="increment">Increment</button>
    </div>
  </template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

</script>

<style>
.status {
    width: 50px;
    height: 50px;
    background-color: teal;
}
.status.active {
    background-color: tomato;
}
</style>