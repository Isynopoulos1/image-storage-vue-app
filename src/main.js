import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

// COMPONENTS
import App from "./App";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

// DEFINE APP
const app = createApp(App);
const routes = [
  { path: "/", component: ImageList },
  { path: "/upload", component: UploadForm },
  { path: "/oauth2/callback", component: AuthHandler },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// LAUNCH APP
app.use(store);
app.use(router);
app.mount("#app");
