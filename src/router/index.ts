import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/MainTabLayout.vue"),
      children: [
        // Bundleサイズ最適化のため、lazy loadingでコンポーネントを呼び出す
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
          meta: { topBarVariant: "home" },
        },
        {
          path: "search",
          name: "search",
          component: () => import("@/views/SearchView.vue"),
          meta: { topBarVariant: "search" },
        },
        {
          path: "upload",
          name: "upload",
          component: () => import("@/views/UploadView.vue"),
          meta: { topBarVariant: "upload" },
        },
        {
          path: "activity",
          name: "activity",
          component: () => import("@/views/ActivityView.vue"),
          meta: { topBarVariant: "activity", hasBadge: true },
        },
        {
          path: "profile/:id?",
          name: "profile",
          component: () => import("@/views/ProfileView.vue"),
          meta: { topBarVariant: "profile" },
        },
      ],
    },
    {
      path: "/upload",
      component: () => import("@/layouts/UploadLayout.vue"),
      children: [
        {
          path: "file",
          name: "file-select",
          component: () =>
            import("@/views/Upload/file-select/FileSelectView.vue"),
          meta: { topBarVariant: "file", bottomBarVariant: "file" },
        },
        {
          path: "filter",
          name: "filter-select",
          component: () =>
            import("@/views/Upload/filter-select/FilterSelectView.vue"),
          meta: { topBarVariant: "filter", bottomBarVariant: "filter" },
        },
        {
          path: "post",
          name: "post-editor",
          component: () =>
            import("@/views/Upload/post-editor/PostEditorView.vue"),
          meta: { topBarVariant: "post", bottomBarVariant: "post" },
        },
      ],
      meta: { hideBottomBar: true, topBarVariant: "compose" },
    },
    //TODO:この以下は必要によって修正・追加する
    {
      path: "/dm",
      component: () => import("@/layouts/DMLayout.vue"),
      children: [
        {
          path: "",
          name: "dm-list",
          component: () => import("@/views/dm/List.vue"),
        },
        {
          path: ":thread",
          name: "dm-thread",
          component: () => import("@/views/dm/Thread.vue"),
        },
      ],
      meta: { hideBottomBar: true, topBarVariant: "dm" },
    },
    // 스토리/포스트 뷰어는 모달 라우트로
    {
      path: "/p/:id",
      name: "post-modal",
      component: () => import("@/views/PostModal.vue"),
      meta: { modal: true, hideBottomBar: true },
    },
    {
      path: "/stories/:userId",
      name: "story-view",
      component: () => import("@/views/StoryView.vue"),
      meta: { modal: true, hideBottomBar: true },
    },
  ],
});

export default router;
