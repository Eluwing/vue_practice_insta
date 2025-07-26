<template>
  <div>
    <span>Search page</span>
    <span><button>upload</button></span>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  methods: {},
  props: {
    uploadFileUrl: String,
    filter: String,
  },
};
</script>
