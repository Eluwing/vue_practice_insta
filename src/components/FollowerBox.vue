<template>
  <div class="follower-wrapper">
    <div class="follower-box" v-for="(item, i) in followers" :key="i">
      <div
        class="follower-image"
        :style="`background-image:url(${item.image}); cursor: pointer;`"
      ></div>
      <div class="follower-name">{{ item.name }}</div>
    </div>
  </div>
  {{ follwers }}
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FollowerBoxItem",
  computed: {
    ...mapState(["followers"]),
  },
};
</script>

<style>
.follower-wrapper {
  display: flex;
  width: 100%;
  padding: 10px;
}
.follower-box {
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 10px;
}
.follower-image {
  width: 45px;
  height: 45px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.follower-name {
  /* display: block; */
  float: left;
  font-size: 14px;
}
</style>