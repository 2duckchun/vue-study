const app = Vue.createApp({
  data() {
    return {
      result: 0,
      show: ""
    }
  },
  watch: {
    result(value) {
      if (value > 37) {
        setTimeout(() => {
          this.result = 0
        }, 2000);
      }
    }
  },
  computed: {
    showString() {
      if (this.result < 37) return this.show = "Not There Yet!"
      else return this.show = "Too Much!"
    }
  },
  methods: {
    addFive() {
      this.result += 5
    },
    addOne() {
      this.result += 1
    }
  }
}).mount("#assignment")