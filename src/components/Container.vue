<template>
  <div v-for="(post,i) in posts" :key="i">
    <Post :post="post"/>
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  name: 'ContainerItem',
  components: {
    Post
  },
  props: {
    posts: Object,
  },
};
</script>

<style>
</style>