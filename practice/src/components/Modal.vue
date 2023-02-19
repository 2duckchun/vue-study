<template>
    <div class="black-bg" v-if="isModalOpen === true">
    <div class="white-bg">
      <h4>{{ onerooms[index].title }}</h4>
      <img :src="onerooms[index].image" class="room-img">
      <p>{{ onerooms[index].content }}</p>
      <input type="type" v-model="month" >
      <p>{{ month }} 개월 :  {{ onerooms[index].price * month }} 만원</p>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>

const reg = /^[0-9]+$/

export default {
  name: 'Modal',
  props: {
    onerooms: Array,
    index: Number,
    isModalOpen: Boolean
  },
  data() {
    return {
      month: 4
    }
  },
  watch: {
    month(a) {
      if (a >= 13) {
        alert('13이상은 입력이 안됩니다.')
        this.month = 12
      }
      if (isNaN(a) === true) {
        alert('문자열은 입력하지 마세요.')
        this.month = 1
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  },
  updated() {
    if (this.month < 3) {
      alert("3개월 이하는 안받아요.")
      this.month = 3
    } 
  }
}
</script>

<style>

</style>