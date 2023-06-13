import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.js"

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import VueCookies  from "vue-cookies";

const firebaseConfig = {
  apiKey: "AIzaSyC3pIp_BrajzePgEo9lWu-HBU2Q6jqHTWo",
  authDomain: "curso-vue-daff7.firebaseapp.com",
  projectId: "curso-vue-daff7",
  storageBucket: "curso-vue-daff7.appspot.com",
  messagingSenderId: "133961296883",
  appId: "1:133961296883:web:8a6076e0bdfa51d7748086",
  measurementId: "G-RQ302RF7FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).use(VueCookies, {expires: '1d'}).mount('#app')
