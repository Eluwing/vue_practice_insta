<template>
  <div class="wrapper">
    <img
      class="image"
      :class="type"
      :src="data.path"
      :key="'to'+ data.title + 'page'"
    >
  </div>
</template>

<script >
export default {
  name: "BottomBarButton",
  components: {},
  props: {
    data: Object,
    type: String,
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.image {
  width: 24px;
  height: 24px;

}

.user{
  border-radius: 50%; /* 둥글게 만듦 */
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 */
  object-fit: cover; /* 이미지를 잘라내면서 비율 유지 */
}
</style>

