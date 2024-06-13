<script setup lang="ts">
import PasswordWrapper from "@/PasswordWrapper.vue"
</script>

<template>
  <PasswordWrapper />
</template>

<style lang="scss">
/* document global styles */
@import "@scss/settings/all.scss";
@import "@scss/rules/all.scss";

* {
  box-sizing: border-box;
}

// html,
// body {
//   overflow: hidden;
// }

body {
  margin: 0;
}

.page-content {
  @extend .text-center;
}
</style>
