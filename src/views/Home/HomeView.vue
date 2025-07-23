<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="tabState = 0">
        Cancel
      </li>
    </ul>
    <ul class="header-button-right">
      <li
        v-if="tabState != 0 && tabState != 2"
        @click="tabState++"
      >
        Next
      </li>
      <li
        v-if="tabState == 2"
        @click="publish"
      >
        Post
      </li>
    </ul>
    <img
      src="@/assets/logo.png"
      class="logo"
    >
  </div>
  <FollowerBox />
  <div class="footer">
    <BottomBar
      :menu="buttomBarList"
      :loginUser="loginUser"
    />
    <!-- <ul class="footer-button-plus">
      <input
        id="file"
        type="file"
        class="inputfile"
        @change="upload"
      >
      <label
        for="file"
        class="input-plus"
      >+</label>
    </ul> -->
  </div>
  <Container
    :posts="posts"
    :tab-state="tabState"
    :upload-file-url="uploadFileUrl"
    :selected-filter="selectedFilter"
    @changeContent="handleContent"
  />

  <button @click="$store.dispatch('addPostData')">
    More
  </button>
  <LoadingSpinner v-if="isLoading" />
</template>

<script>
import { mapState } from "vuex";
import Container from "@/components/Container.vue";
import FollowerBox from "@/components/FollowerBox.vue";
import LoadingSpinner from "@/components/icons/LoadingSpinner.vue";
import BottomBar from "@/components/BottomBar.vue";
import { bottomBarMenu } from "@/components/constants/bottomBarMenu";

export default {
  name: "HomeView",
  components: {
    Container,
    FollowerBox,
    LoadingSpinner,
    BottomBar,
  },
  data() {
    return {
      tabState: 0,
      uploadFileUrl: "",
      uploadContent: "",
      selectedFilter: "",
      observer: null,
      loadMoreTrigger: null,
      buttomBarList: bottomBarMenu,
    };
  },
  computed: {
    ...mapState(['posts','isLoading'])
  },
  mounted() {
    this.tabLists = ["Post", "Fliter", "Write"];
    this.emitter.on('clickedFilter', (name)=>{
      this.selectedFilter = name;
    });
    this.$store.dispatch('getPostsData');
    this.$store.dispatch('getFollwers');
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
      this.$store.commit('addPost', inputObj);
      this.tabState = 0;
    },
  },
  onBeforeUnmount() {
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  display: flex;
  width: 460px;
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
  z-index: 1;
  margin: 0 auto;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  overflow: hidden;
}
</style>
