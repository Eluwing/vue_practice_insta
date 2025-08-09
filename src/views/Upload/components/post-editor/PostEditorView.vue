<template>
  <div>
    <div
      :class="`${selectedFilter} upload-image`"
      :style="uploadFileStyle"
    ></div>
    <div class="write">
      <textarea class="write-box" v-model="content"></textarea>
    </div>
  </div>
  <!--TODO：臨時ボタン、トップバーでポスト、キャンセルできるようにする必要あり -->
  <button @click="publish">Post</button>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from "vue";
import { usePostContents } from "@/composables/usePostContents";
import { useStore } from "vuex";

const { selectedFilter, uploadFileUrl, setContent } = usePostContents();

interface PostInput {
  name: string;
  userImage: string;
  postImage: string;
  likes: number;
  date: string;
  liked: boolean;
  content: string;
  filter: string;
}

const store = useStore();

// State
const content: Ref<string> = ref("");

const publish = (): void => {
  const inputObj: PostInput = {
    name: "Kim Hyun",
    userImage: "https://picsum.photos/100?random=3",
    postImage: uploadFileUrl.value,
    likes: 0,
    date: new Date().toLocaleDateString("ja-JP"),
    liked: false,
    content: content.value,
    filter: selectedFilter.value,
  };
  setContent(content.value);
  store.commit("addPost", inputObj);
}

const uploadFileStyle = computed(() => ({
  backgroundImage: `url(${uploadFileUrl.value})`,
}));

// Lifecycle
// onMounted(() => {
//   // do something
// })
</script>

<style scoped>
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
