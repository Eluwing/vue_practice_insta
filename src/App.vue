<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="tabState != 2" @click="tabState++">Next</li>
      <li v-if="tabState == 2" @click="publish">Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :posts="posts"
    :tabState="tabState"
    :uploadFileUrl="uploadFileUrl"
    :selectedFilter="selectedFilter"
    @changeContent="handleContent"
  />

  <button @click="more">More</button>
  <button v-for="(item, i) in tabLists" :key="i" @click="onTabClick(i)">
    {{ item }}
  </button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Container from "./components/Container.vue";
import Posts from "@/assets/Posts";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      posts: Posts,
      moreButtonCount: 0,
      tabState: 0,
      tabLists: [],
      uploadFileUrl: "",
      uploadContent: "",
      selectedFilter: "",
    };
  },
  mounted() {
    this.tabLists = ["Post", "Fliter", "Write"];
    this.emitter.on('clickedFilter', (name)=>{
      this.selectedFilter = name;
    });
  },
  methods: {
    more() {
      axios
        .get(
          `https://codingapple1.github.io/vue/more${this.moreButtonCount}.json`
        )
        .then((result) => {
          //get成功し実行するコード
          this.posts = [...this.posts, result.data];
          // this.posts.push(result.data)
          this.moreButtonCount++;
          // サーバーにmore2以上のデータが用意されてないため、値初期化
          if (this.moreButtonCount == 2) {
            this.moreButtonCount = 0;
          }
        });
    },
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
      this.posts.unshift(inputObj);
      this.tabState = 0;
    },
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
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
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
}
</style>
