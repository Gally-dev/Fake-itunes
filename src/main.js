import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

window.eventBus = mitt();
createApp(App).use(router).mount("#app");
