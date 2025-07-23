import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import UploadView from "@/views/Upload/UploadView.vue";
import { bottomBarMenu } from "@/components/constants/bottomBarMenu";
import { Component } from "vue";
import SearchView from "@/views/Search/SearchView.vue";
import ActivityView from "@/views/Activity/ActivityView.vue";

// コンポーネントマッピングテーブル
const componentMap: Record<string, Component> = {
  home: HomeView,
  search: SearchView,
  upload: UploadView,
  activity: ActivityView,
};

const routes = bottomBarMenu.map((item) => ({
  path: item.route,
  name: item.title,
  component: componentMap[item.title],
}));

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
