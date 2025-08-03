import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import { bottomBarMenu } from "@/components/constants/bottomBarMenu";
import { Component } from "vue";
import SearchView from "@/views/Search/SearchView.vue";
import ActivityView from "@/views/Activity/ActivityView.vue";
import PostEditorView from "@/views/Upload/components/post-editor/PostEditorView.vue";
import FilterSelectView from "@/views/Upload/components/filter-select/FilterSelectView.vue";
import FileSelectView from "@/views/Upload/components/file-select/FileSelectView.vue";

// コンポーネントマッピングテーブル
const componentMap: Record<string, Component> = {
  home: HomeView,
  search: SearchView,
  upload: FileSelectView,
  activity: ActivityView,
  // ページが追加されたら、以下に追加
};

const staticRoutes = [
  {
    path: "/upload",
    // component: DummyView, // 共通レイアウト
    children: [
      {
        path: "file",
        name: "upload-file",
        component: FileSelectView,
      },
      {
        path: "filter",
        name: "upload-filter",
        component: FilterSelectView,
      },
      {
        path: "post",
        name: "upload-post",
        component: PostEditorView,
      },
    ],
  },
];

const routes = [
  ...bottomBarMenu.map((item) => ({
  path: item.route,
  name: item.title,
  component: componentMap[item.title],
})),
  ...staticRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
