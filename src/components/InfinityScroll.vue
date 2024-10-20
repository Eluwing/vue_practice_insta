<template>
  <div>
    <LoadingSpinner />
    <slot />
    <div ref="loadMoreTrigger"></div>
  </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  name: "InfinityScroll",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      observer: null,
      loadMoreTrigger: null,
    };
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      console.log("createObserver!");
      const options = {
        root: null, // ViwePort基準
        rootMargin: "100px", // 100px前に検知
        threshold: 0.1, // 要素が10%見える時トリガー
      };
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.$store.dispatch("addPostData");
        }
      }, options);

      if (this.$refs.loadMoreTrigger) {
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