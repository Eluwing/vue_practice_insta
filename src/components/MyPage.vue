<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{follower}}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  name: "MyPageItem",
  setup(){
    let follower = ref([]);
    
    onMounted(()=>{
      axios.get('/Follower.json').then((result)=>{
        follower.value = result.data;
      })
    })
    
  },
  data(){
    return{

    }
  }
};
</script>

<style>
</style>