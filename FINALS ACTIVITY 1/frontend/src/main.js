import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";   // 👈 import router

const app = createApp(App);

app.use(router);   // 👈 use router
app.mount("#app");