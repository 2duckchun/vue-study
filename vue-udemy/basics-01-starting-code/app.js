const app = Vue.createApp({
  data() {
    return {
      courseGoal: '<h3>뷰 열심히 공부하기</h3>',
      vueLink: "https://vuejs.org/",
    }
  },

  methods: {
    randomMsg() {
      return this.courseGoal
    }
  }
}).mount('#user-goal')