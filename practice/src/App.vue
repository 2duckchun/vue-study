<template>
  <div>

    <transition name="fadeout">
      <Modal 
        :onerooms="onerooms" 
        :index="index" 
        :isModalOpen="isModalOpen"
        @closeModal="isModalOpen = false"
      />
    </transition>

    <div class="menu">
      <a v-for="menu in menus" :key="menu">{{ menu }}</a>
    </div>
    <DisCount :count="count"/>

    <button @click="priceHighSort()">오름차순</button>
    <button @click="priceLowSort()">내림차순</button>
    <button @click="priceStringSort()">가나다순</button>
    <button @click="priceBack()">되돌리기</button>

    <Card v-for="(product, i) in onerooms" 
      :key="product.id" 
      :prodIdx="i" 
      :product="product"
      @openModal="isModalOpen = true, index = $event"
    />

    <!-- <div v-for="(product, i) in onerooms" :key="product.id">
      <img :src="product.image" class="room-img">
      <h4 @click="isModalOpen = true, index = i" >{{ product.title }}</h4>
      <p>{{ product.content }}</p>
      <p>{{ product.price }} 만원</p>
    </div> -->

  </div>
</template>

<script>

import data from "./assets/data.js";
import DisCount from "./components/DisCount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  name: 'App',
  data() {
    return {
      count: 5,
      index: 0,
      onerooms: data,
      oneroomsOrigin: [...data],
      menus: ['Home', 'Shop', 'About'],
      isModalOpen: false
    }
  },
  components: {
    DisCount,
    Modal,
    Card
  },
  methods: {
    priceHighSort() {
      this.onerooms.sort((a, b) => {
        return a.price - b.price
      })
    },
    priceLowSort() {
      this.onerooms.sort((a, b) => {
        return b.price - a.price
      })
    },
    priceStringSort() {
      this.onerooms.sort((a, b) => {
        return a.title > b.title ? 1 : -1 // 오름차순
      })
    },
    priceBack() {
      this.onerooms = [...this.oneroomsOrigin]
    }
  },
  mounted() {
    const interval = setInterval(() => {
      if (this.count === 1) {
        clearInterval(interval)
      }
      this.count = this.count - 1
    }, 1000)
  }
}
</script>

<style>
/* .start {
  opacity: 0;
  transition: all 0.2s;
}

.end {
  opacity: 1;
} */

.fadeout-enter-from {
  transform: translateY(-1000px);
}
.fadeout-enter-active {
  transition: all 0.2s;
}
.fadeout-enter-to {
  transform: translateY(0px);
}

.fadeout-leave-from {
  opacity: 1;
}
.fadeout-leave-active {
  transition: all 1s;
}
.fadeout-leave-to {
  opacity: 0;
}

body {
  margin: 0
}

div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.room-img {
  width: 50%;
  margin-top: 40px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
