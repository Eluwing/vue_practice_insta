<template>
  <div>
    <div :class="`${selectedFilter} upload-image`" :style="uploadFileStyle"></div>
    <div class="write">
      <textarea class="write-box" v-model="content"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { onMounted } from 'vue'
import { useImageFilter } from '@/composables/useImageFilter'

const { selectedFilter, uploadFileUrl } = useImageFilter();

// Props
defineProps<{}>()

// Emits
const emit = defineEmits<{}>()

const uploadFileStyle = computed(() => ({
  backgroundImage: `url(${uploadFileUrl.value})`,
}));

// State
const content = ref(null)

// Lifecycle
onMounted(() => {
  // do something
})
</script>

<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>