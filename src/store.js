import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 0,
    }
  },
  mutations :{
    setName(state){
      state.name = 'park'
    },
    increaseAge(state, data){
      state.age += data
    },
    increaseLike(state){
      state.likes++
    },
    decreaseLike(state){
      state.likes--
    }
  }
})

export default store;