import { createApp } from "vue";
import App from "./App";
import { store } from "./store";

createApp(App).mount("#app");

App.use(store);
App.mount("#app");
