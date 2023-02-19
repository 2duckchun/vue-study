const app = Vue.createApp({
  data() {
    return {
      counter: 29,
      name: "",
      confirmName: "",
      ageGender: ""
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value
    },
    setConfirmName(event) {
      event.preventDefault()
      this.confirmName = this.name
    },
    setAgeGender(event, gender) {
      this.ageGender = event.target.value + ' & ' + gender
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
    },
    submitForm() {
      alert("send!")
    }
  }
});

app.mount('#events');
