<template>
  <div :class="`${ filter } filter-item`" :style="`background-image:url(${ uploadFileUrl }); cursor: pointer;`" @click="fire">
    <!-- 親が子コンポーネントのデータを使いたいならslot props利用 -->
    <!-- props代わりに<slot>を使ってデータバインディング可能 -->
    <slot></slot>
  </div> 
</template>

<script>
export default {
  name: 'FilterBoxItems',
  methods: {
    fire(){
      this.emitter.emit('clickedFilter', this.filter)
    }
  },
  props: {
    uploadFileUrl: String,
    filter: String,
  }

}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>