import { ref } from "vue";

const selectedFilter = ref("");
const uploadFileUrl = ref("");
const content = ref("");

export function usePostContents() {
  function setSelectFilter(name: string) {
    selectedFilter.value = name;
  }
  function setFileUrl(url: string) {
    uploadFileUrl.value = url
  }
  function setContent(text: string) {
    content.value = text
  }

  return { setSelectFilter, setFileUrl, setContent ,selectedFilter, uploadFileUrl, content };
}
