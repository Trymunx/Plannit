// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuex from "vuex";
import store from "@/vuex/store";
import router from "@/router/router";
import * as firebase from "firebase";

Vue.config.productionTip = false;
Vue.use(Vuex);

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDb3e5NvjYEZT2XkQeVS8mqVwtYJbmIpD0",
  authDomain: "plannit-todos.firebaseapp.com",
  databaseURL: "https://plannit-todos.firebaseio.com",
  projectId: "plannit-todos",
  storageBucket: "plannit-todos.appspot.com",
  messagingSenderId: "912835568992"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App }
});
