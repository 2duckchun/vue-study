<template>
  <div>
    <img :src="product.image" class="room-img">
    <h4 @click="openModal">{{ product.title }}</h4>
    <p>{{ product.content }}</p>
    <p>{{ product.price }} 만원</p>
    <p>{{ prodIdx }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: Object,
    prodIdx: Number,
  },
  methods: {
    openModal() {
      this.$emit('openModal', this.prodIdx)
    }
  }
}
</script>

<style>

</style>