<template>
  <div>
    <div id="threeContainer">
      <Three />
    </div>
  </div>
</template>

<script>
import Three from "./Three.vue";
export default {
  components: {
    Three
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    runCheck() {
      console.log("Making request");
      fetch("/api/test")
        .then(data => data.text())
        .then(res => (this.msg = res));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#threeContainer {
  height: 600px;
  width: 100%;
}
</style>