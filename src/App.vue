<template>
  <div class="App">
    Hello World!!
    <Page></Page>
    <div>
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
    </div>
    <div>
      <p>{{ getCounter }}</p>
      <button @click="add">add</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Page from "./Page.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: { Page },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCounter"]),
  },
  methods: {
    ...mapActions(["add"]),
  },
};
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
  font-size: 20px;
}
</style>
