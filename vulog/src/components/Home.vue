<template>
  <div class="container mt-4">
    <h5>{{ names }} 블로그입니다.</h5>
    <p>- Vue로 만들었음 -</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    names: String,
  }
}
</script>

<style>

</style>