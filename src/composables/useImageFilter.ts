import { ref } from "vue";

const selectedFilter = ref("");
const uploadFileUrl = ref("");

export function useImageFilter() {
  function selectFilter(target: string) {
    selectedFilter.value = target;
  }
  function setFileUrl(url: string) {
    uploadFileUrl.value = url
  }

  return { selectFilter, setFileUrl, selectedFilter, uploadFileUrl };
}
