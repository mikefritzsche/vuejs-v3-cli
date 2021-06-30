<template>
  <div>MyTestComponent content here...</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "MyTestComponent",
  props: {
    /** Test id for unit tests */
    testId: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { search, findString, autoComplete } = configureSearch();

    return {
      search,
      findString,
      autoComplete,
    };
  },
};
function configureSearch() {
  const state = reactive({
    search: "",
    findString: "",
    autoComplete: "",
  });

  return toRefs(state);
}
</script>
    