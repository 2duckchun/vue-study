<template>
  <div>
    <div v-for="post in posts" :key="post.number">
      <h5>{{ post.title }}</h5>
      <p>{{ post.date }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    posts: Object,
  }
}
</script>

<style>

</style>