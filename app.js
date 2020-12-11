const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      personalTitle: "Your Name"
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(personalTitle, event) {
      this.personalTitle = personalTitle;
      if(event.target.value === ""){
        this.personalTitle = "Your Name";
      }

      this.name = " " + event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    }
  }
});

app.mount('#events');
