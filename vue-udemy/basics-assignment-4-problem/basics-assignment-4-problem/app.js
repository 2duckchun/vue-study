const app = Vue.createApp({
  data() {
    return {
      style: "",
      toggle: "visible",
      bgColor: ""
    }
  },
  computed: {
    pClass() {
      return this.style
    }
  },

  methods: {
    toggleEvent() {
      if (this.toggle === "visible") {
        this.toggle = "hidden"
      } else {
        this.toggle = "visible"
      }
    }
  }
}).mount("#assignment")