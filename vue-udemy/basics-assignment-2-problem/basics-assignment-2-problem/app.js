const app = Vue.createApp({
  data() {
    return {
      text: "initial value",
      enterText: "OutPut",
      confirmEnterText: "Not Confirmed"
    }
  },
  methods: {
    btnAlert() {
      alert("hi")
    },
    setEnterText(event) {
      this.enterText = event.target.value
    },
    setConfirmEnterText() {
      this.confirmEnterText = this.enterText
    }
  }
}).mount("#assignment")