const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0
        }, 2000);
      }
    }
  },

  computed: {
    fullName() {
      console.log('computed property는 똑똑합니다.')
      if (this.name === '' || this.lastName === '') {
        return ''
      } else {
        return this.name + ' ' + this.lastName
      }
    }
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');

// v-on:click >> @click
// v-bind:value >> :value