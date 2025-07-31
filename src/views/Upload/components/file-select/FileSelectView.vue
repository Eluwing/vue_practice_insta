<template>
  <div class="temp-upload-wrapper">
    <span>Upload page</span>
    <div>
      <input
        id="file"
        type="file"
        class="inputfile"
        @change="upload"
      >
      <label
        for="file"
        class="temp-upload-button"
      >upload</label>
    </div>
  </div>
</template>

<script setup lang="ts">
// // Props
// defineProps<{}>()

// // Emits
// const emit = defineEmits<{}>()

// // State
// import { ref } from 'vue'
// const state = ref(null)

// // Lifecycle
// import { onMounted } from 'vue'
// onMounted(() => {
//   // do something
// })
</script>

<style scoped>
.temp-upload-wrapper {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
} 
.inputfile {
  display: none;
}
.temp-upload-button {
  /* display: inline-block; */
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;

}
</style>