<template>
<div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">뷸로그</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/home">홈 페이지</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/list">리스트 페이지</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">상세 페이지</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  
  <router-view :posts="posts" :names="name"></router-view>

</div>
</template>

<script>
import postData from './assets/post.js'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      posts: postData,
      name: "2DC"
    }
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
