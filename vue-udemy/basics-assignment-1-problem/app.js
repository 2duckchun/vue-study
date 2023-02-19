const app = Vue.createApp({
  data() {
    return {
      myname: "2DC",
      myage: 29,
      imgUrl: "https://cdn.pixabay.com/photo/2012/10/06/22/18/horse-60153_960_720.jpg"
    }
  },
  
  methods: {
    ageUp() {
      this.myage += 5
    },
    randomNumber() {
      return Math.random()
    }
  }
}).mount("#assignment")