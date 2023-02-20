<template>
  <div>
    <div v-for="(post, i) in posts" :key="post.number">
      <h5 @click="$router.push(`/detail/${i}`)">{{ post.title }}</h5>
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