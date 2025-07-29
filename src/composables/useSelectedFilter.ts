import { ref } from "vue";

const selectedFilter = ref("");

export function useSelectedFilter() {
  function selectFilter(target: string) {
    selectedFilter.value = target;
  }

  return { selectFilter, selectedFilter };
}
