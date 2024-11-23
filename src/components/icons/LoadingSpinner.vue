<template>
  <div class="wrapper">
    <img
      class="loading-spinner"
      src="@/assets/loading-spinner.svg"
      alt="Loading spinner"
    >
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  components: {},
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.loading-spinner {
  width: 10%;
  height: auto;
}
</style>