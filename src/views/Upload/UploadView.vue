<template>
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
    :style="uploadFlieStyle"
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

<script>
import FilterBox from "./components/FilterBox";

export default {
  name: "UploadPage",
  components: {
    FilterBox,
  },
  props: {},
  data() {
    return {
      uploadFileUrl: "",
      uploadContent: "",
      selectedFilter: "",
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
  computed: {
    uploadFlieStyle() {
      return {
        backgroundImage: `url(${this.uploadFileUrl})`,
      };
    },
  },
  mounted() {
    this.tabLists = ["Post", "Fliter", "Write"];
    this.emitter.on("clickedFilter", (name) => {
      this.selectedFilter = name;
    });
    this.$store.dispatch("getPostsData");
    this.$store.dispatch("getFollwers");
    // this.upload();
  },
  methods: {
    onTabClick(clickedState) {
      this.tabState = clickedState;
    },
    upload(e) {
      let file = e.target.files;
      this.uploadFileUrl = URL.createObjectURL(file[0]);
      this.onTabClick(1);
    },
    handleContent(text) {
      this.uploadContent = text;
    },
    publish() {
      var inputObj = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: `${this.uploadFileUrl}`,
        likes: 0,
        date: new Date().toLocaleDateString("ja-JP"),
        liked: false,
        content: `${this.uploadContent}`,
        filter: `${this.selectedFilter}`,
      };
      this.$store.commit("addPost", inputObj);
      this.tabState = 0;
    },
  },
};
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
