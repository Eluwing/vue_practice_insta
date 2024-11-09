import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      moreCount: 0,
      posts: [],
      followers: [],
      isLoading: false,
    }
  },
  mutations: {
    increaseLike(state) {
      if (!state.isClickedLike) {
        state.likes++;
        state.isClickedLike = true;
      }
      else {
        state.likes--;
        state.isClickedLike = false;
      }
    },
    increaseMoreCount(state) {
      state.moreCount++;
    },
    initMoreCount(state) {
      state.moreCount = 0;
    },
    setIsLoading(state, data) {
      state.isLoading = data;
    },
    addPost(state, data) {
      state.posts = [...state.posts, data];
    },
    setPosts(state, data) {
      state.posts = data;
    },
    increaseLikeInPost(state, clickedIndex) {
      if (!state.posts[clickedIndex].liked) {
        state.posts[clickedIndex].likes++;
        state.posts[clickedIndex].liked = true;
      }
      else {
        state.posts[clickedIndex].likes--;
        state.posts[clickedIndex].liked = false;
      }
    },
    initFollowers(state, data) {
      state.followers = [...data];
    }
  },
  actions: {
    async getPostsData(context) {
      try {
        context.commit('setIsLoading', true);
        const result = await axios.get('/Posts.json');
        context.commit('setPosts', result.data);
        context.commit('setIsLoading', false);

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    async addPostData(context) {
      try {
        context.commit('setIsLoading', true);
        const result = await axios.get(`https://codingapple1.github.io/vue/more${context.state.moreCount}.json`);
        // 配列に追加
        context.commit('addPost', result.data);
        context.commit('increaseMoreCount');
        // サーバーにmore2以上のデータが用意されてないため、値初期化
        if (context.state.moreCount == 2) {
          context.commit('initMoreCount');
        }
      } catch (error) {
        context.commit('setIsLoading', false);
        console.error('Error Add fetching posts:', error);
      } 
    },
    async getFollwers(context) {
      try {
        context.commit('setIsLoading', true);
        const result = await axios.get('/Follower.json');
        //配列に追加
        context.commit('initFollowers', result.data);
        context.commit('setIsLoading', false);
      } catch (error) {
        console.error('Error Add Follwers fetching posts:', error);
      }
    },
  },
})

export default store;