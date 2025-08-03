<template>
  <div :class="`${ filter } filter-item`" :style="`background-image:url(${ uploadFileUrl }); cursor: pointer;`" @click="handleFliterClick">
    <!-- 親が子コンポーネントのデータを使いたいならslot props利用 -->
    <!-- props代わりに<slot>を使ってデータバインディング可能 -->
    <slot></slot>
  </div> 
</template>

<script setup lang="ts">
import { usePostContents } from '@/composables/usePostContents'

const { setSelectFilter } = usePostContents();

const props = defineProps<{
  uploadFileUrl: string;
  filter: string;
}>()

function handleFliterClick() {
  setSelectFilter(props.filter)
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