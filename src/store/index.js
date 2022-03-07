import { createStore } from "vuex";
import articleList from "./Article/index";

const store = createStore({
  modules: {
    article: articleList,
  },
  state() {
    return {};
  },
  getters: {},
});

export default store;
