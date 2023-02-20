<template>
  <div>
    <h4>상세 페이지</h4>
    <h5>{{ posts[$route.params.id].title }}</h5>
    <p>{{ posts[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    posts: Array,
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>