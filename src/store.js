import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 0,
      isClickedLike : false,
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
      if(!state.isClickedLike){
        state.likes++
        state.isClickedLike = true
      }
      else{
        state.likes--
        state.isClickedLike = false
      }
    },
    decreaseLike(state){
      state.likes--
    }
  }
})

export default store;