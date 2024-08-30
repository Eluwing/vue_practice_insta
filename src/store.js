import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 0,
      isClickedLike: false,
      more: [],
      moreCount: 0,
      posts: [],
    }
  },
  mutations: {
    setName(state) {
      state.name = 'park'
    },
    increaseAge(state, data) {
      state.age += data
    },
    increaseLike(state) {
      if (!state.isClickedLike) {
        state.likes++
        state.isClickedLike = true
      }
      else {
        state.likes--
        state.isClickedLike = false
      }
    },
    decreaseLike(state) {
      state.likes--
    },
    setMore(state, data) {
      state.more = [...state.more, data]
    },
    increaseMoreCount(state) {
      state.moreCount++
    },
    initMoreCount(state) {
      state.moreCount = 0
    },
    addPost(state, data) {
      state.posts = [...state.posts, data]
    },
    setPosts(state, data) {
      state.posts = data
    }
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more${context.state.moreCount}.json`).then((result) => {
        //配列に追加
        context.commit('setMore', result.data)
        context.commit('increaseMoreCount')

        // サーバーにmore2以上のデータが用意されてないため、値初期化
        if (context.state.moreCount == 2) {
          context.commit('initMoreCount')
        }
      })
    },
    async getPostsData(context) {
      try {
        const result = await axios.get('/Posts.json');
        context.commit('setPosts', result.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    async addPostData(context) {
      try {
        const result = await axios.get(`https://codingapple1.github.io/vue/more${context.state.moreCount}.json`);
        //配列に追加
        context.commit('addPost', result.data)
        context.commit('increaseMoreCount')
        // サーバーにmore2以上のデータが用意されてないため、値初期化
        if (context.state.moreCount == 2) {
          context.commit('initMoreCount')
        }
      } catch (error) {
        console.error('Error Add fetching posts:', error);
      }
    },
  },
})

export default store;