console.log("start!");
let str = "hello";
console.log(str);
let red = () => {
  console.log("red light！！");
};
let bule = () => {
  console.log("bule light");
};
let yellow = () => {
  console.log("yellow light");
};
// document.getElementById("app").innerText = "12345666!";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
