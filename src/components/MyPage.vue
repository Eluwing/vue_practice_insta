<template>
  <div style="padding: 10px">
    <h4>Follower</h4>
    <input v-model="input" placeholder="名前を入力してください" />
    <div class="post-header" v-for="(item,i) in resultFilter" :key="i">
      <div class="profile" :style="`background-image:url(${ item.image }); cursor: pointer;`"></div>
      <span class="profile-name">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';

export default {
  name: "MyPageItem",
  setup(){
    let follower = ref([]);
    let input = ref('');
    let resultFilter = ref([]);

    function filterByInput(input){
      if(!input){
        resultFilter.value = follower.value;
      }else{
        resultFilter.value = follower.value.filter((follower)=> {
        return follower.name.startsWith(input);        
      });
      }
    }
    
    watch(input, ()=> filterByInput(input.value))

    onMounted(()=>{
      axios.get('/Follower.json').then((result)=>{
        follower.value = result.data;
        resultFilter.value = result.data;
      })
    })
    
    return {follower,input, filterByInput, resultFilter}
  },
};
</script>

<style>
</style>