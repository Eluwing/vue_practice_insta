<template>
  <div style="padding: 10px">
    <h4>Follower</h4>
    <input placeholder="名前を入力してください" />
    <div class="post-header" v-for="(item,i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${ item.image }); cursor: pointer;`"></div>
      <span class="profile-name">{{item.name}}</span>
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
    
    return {follower}
  },
};
</script>

<style>
</style>