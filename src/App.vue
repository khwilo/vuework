<template>
  <div id="app">
    <input type="text" v-model="message" />
    <button @click="postMessage">Send Message</button>
    {{ time }}
  </div>
</template>

<script>
import { doHeavyWork } from "./worker-api";

export default {
  name: "App",

  data() {
    return {
      message: "",
      time: new Date(),
    };
  },

  mounted() {
    setInterval(() => {
      this.time = new Date();
    }, 300);
  },

  methods: {
    async postMessage() {
      // const result = await toUpperCase(this.message);
      // console.log(result);
      const result = await doHeavyWork();
      console.log("result: ", result);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
