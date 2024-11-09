<template>
  <div>
    <slot />
    <div ref="loadMoreTrigger"></div>
  </div>
</template>

<script>
export default {
  name: "InfinityScroll",
  components: {
  },
  data() {
    return {
      observer: null,
      loadMoreTrigger: null,
    };
  },
  // loadMoreTriggernのDOM要素を参照する必要があるので、BeforeMountよりMountedが正しい
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        root: null, // ViwePort基準
        rootMargin: "100px", // 100px前に検知
        threshold: 0.1, // 要素が10%見える時トリガー
      };
      // observerのインスタンス作成
      this.observer = new IntersectionObserver((entries) => {
        // DOMのloadMoreTriggerが画面で見えた時
        if (entries[0].isIntersecting) {
          // APIで追加データを取得する
          this.$store.dispatch("addPostData");
        }
      }, options);
      if (this.$refs.loadMoreTrigger) {
        // 観察する要素（DOMの要素）を登録
        this.observer.observe(this.$refs.loadMoreTrigger);
      }
    },
  },
  onBeforeUnmount() {
    if (this.observer && this.$refs.loadMoreTrigger) {
      this.observer.unobserve(this.$refs.loadMoreTrigger);
    }
  },
};
</script>

<style>
</style>