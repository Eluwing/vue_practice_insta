<template>
  <ul class="bottom-bar">
    <BottomBarButton
      v-for="(item,i) in menu"
      :key="i"
      :data="item"
    />
    <BottomBarButton
      :key="'user'"
      :data="{id:99, title: 'Kim Hyun', path: 'https://picsum.photos/100?random=3', route:'/myPage'}"
      :type="'user'"
    />
  </ul>
</template>

<script>

import BottomBarButton from './icons/BottomBarButton.vue';

export default {
  name: "BottomBar",
  components:{
    BottomBarButton,
  },
  props: {
    menu: Array,
    loginUser: Object,
  }
}
</script>

<style>
/* Tab Bar */
.bottom-bar{
  display:flex;
  width: 100%;
}
</style>