import { createRouter, createWebHistory } from "vue-router";
import ArticleList from "../views/ArticleList.vue";
import ArticleDetail from "../views/ArticleDetail.vue";

const routes = [
  { path: "/", redirect: "/article-list" },

  {
    path: "/article-list",
    name: "ArticleList",
    component: ArticleList,
    
  },
  {
    path: "/article-list/:id/",
    query: null,
    name: "ArticleDetail",
    component: ArticleDetail,
    props: true,
  },
  {
    path: "/section-list/:type",
    name: "SectionList",
    component: () => import("../views/SectionList.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };

  },
 
  behavior: "smooth",
  history: createWebHistory(),
  routes,
});

 
 

export default router;
