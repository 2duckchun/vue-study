<template>
  <div>
    <ChildComponent ref="childComponentRef" />
    <button @click="incrementChild">Increment Child</button>
  </div>
</template>

<script setup>

import ChildComponent from "./components/ChildComponent.vue"
import { ref } from 'vue';

const childComponentRef = ref(null);

const incrementChild = () => {
  childComponentRef.value.increment();
};
</script>