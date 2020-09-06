<template>
  <div class="App">Hello World!!<Page></Page></div>
</template>

<script>
import Page from "./Page.vue";
export default {
  name: "App",
  components: { Page },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
  font-size: 20px;
}
</style>
