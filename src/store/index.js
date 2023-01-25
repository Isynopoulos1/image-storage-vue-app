import { createStore } from "vuex";
import auth from "./modules/auth";

export const store = createStore({
  modules: { auth },
  state() {
    return {
      count: 1,
    };
  },
});
