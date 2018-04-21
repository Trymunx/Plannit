import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
// Components:
import loginPage from "@/components/Login/LoginWindow";
import AppPage from "@/components/Home/AppPage";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: AppPage,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: "/login",
      name: "Login",
      component: loginPage,
      beforeEnter: (to, from, next) => {
        if (firebase.auth().currentUser) {
          next("/");
        } else {
          next();
        }
      }
    }
  ]
})