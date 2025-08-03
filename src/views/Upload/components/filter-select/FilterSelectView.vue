<template>
  <!-- TODO: 臨時アップロード機能、別のページでローカルで格納されている写真を選択するような機能追加必要 -->
  <div class="temp-upload-wrapper">
    <span>Upload page</span>
    <div>
      <input
        id="file"
        type="file"
        class="inputfile"
        @change="upload"
      >
      <label
        for="file"
        class="temp-upload-button"
      >upload</label>
    </div>
  </div>
  <div
    :class="`${selectedFilter} upload-image`"
    :style="uploadFileStyle"
  />
  <div class="filters">
    <FilterBox
      v-for="item in filters"
      :key="item"
      :upload-file-url="uploadFileUrl"
      :filter="item"
    >
      {{ item }}
    </FilterBox>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
// import type { Store } from "vuex";
// import type { Emitter } from "mitt"; // mitt 사용한다고 가정
import FilterBox from "@upload/components/filter-select/FilterBox.vue";

import { usePostContents } from '@/composables/usePostContents'

const { selectedFilter, setFileUrl, uploadFileUrl } = usePostContents();

// ----------------------
// 타입 정의
// ----------------------
// interface PostInput {
//   name: string;
//   userImage: string;
//   postImage: string;
//   likes: number;
//   date: string;
//   liked: boolean;
//   content: string;
//   filter: string;
// }

// type Events = {
//   clickedFilter: string;
// };


// ----------------------
// 상태 정의
// ----------------------
const store = useStore();
// const emitter = inject<Emitter<Events>>("emitter");

// const uploadFileUrl = ref<string>("");
// const uploadContent = ref<string>("");
// const selectedFilter = ref<string>("");
// const content = ref<string>("");
const tabState = ref<number>(0);
// const tabLists = ref<string[]>(["Post", "Fliter", "Write"]);

const filters = ref<string[]>([
  "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird",
  "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven",
  "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber",
  "stinson", "toaster", "valencia", "walden", "willow", "xpro2",
]);

const uploadFileStyle = computed(() => ({
  backgroundImage: `url(${uploadFileUrl.value})`,
}));

// ----------------------
// 함수 정의
// ----------------------
function onTabClick(clickedState: number): void {
  tabState.value = clickedState;
}

function upload(e: Event): void {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (files && files.length > 0) {
    setFileUrl(URL.createObjectURL(files[0]));
    onTabClick(1);
  }
}

// function handleContent(text: string): void {
//   uploadContent.value = text;
// }

// function publish(): void {
//   const inputObj: PostInput = {
//     name: "Kim Hyun",
//     userImage: "https://picsum.photos/100?random=3",
//     postImage: uploadFileUrl.value,
//     likes: 0,
//     date: new Date().toLocaleDateString("ja-JP"),
//     liked: false,
//     content: uploadContent.value,
//     filter: selectedFilter.value,
//   };
//   store.commit("addPost", inputObj);
//   tabState.value = 0;
// }

onMounted(() => {
  // emitter?.on("clickedFilter", (name: string) => {
  //   selectedFilter.value = name;
  // });

  store.dispatch("getPostsData");
  store.dispatch("getFollwers");
});
</script>

<style scoped>
.temp-upload-wrapper {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
} 
.inputfile {
  display: none;
}
.temp-upload-button {
  /* display: inline-block; */
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;

}

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
</style>
