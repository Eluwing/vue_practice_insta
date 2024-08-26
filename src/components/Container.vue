<template>
  <div v-if="tabState == 0">
    <Post :post="post" v-for="(post, i) in posts" :key="i" />
  </div>

  <!-- フィルター選択コンポーネント -->
  <div v-else-if="tabState == 1">
    <div class="upload-image" :style="uploadFlieStyle"></div>
    <div class="filters">
      <FilterBox v-for="(item) in filters" :key="item" :uploadFileUrl="uploadFileUrl" :filter="item">
        {{item}}
      </FilterBox>
    </div>
  </div>

  <!-- 作成コンポーネント -->
  <div v-else-if="tabState == 2">
    <div class="upload-image" :style="uploadFlieStyle"></div>
    <div class="write">
      <textarea class="write-box" v-model="content"></textarea>
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
import Post from "./Post.vue";
export default {
  name: "ContainerItem",
  components: {
    Post,
    FilterBox,
  },
  props: {
    posts: Array,
    tabState: Number,
    uploadFileUrl: String,
  },
  watch: {
    content(newValue) {
      this.$emit("changeContent", newValue);
    },
  },
  computed: {
    uploadFlieStyle() {
      return {
        backgroundImage: `url(${this.uploadFileUrl})`,
      };
    },
  },
  data() {
    return {
      content: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  methods: {},
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>