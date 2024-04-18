<script setup lang="ts">
import PasswordWrapper from "@/password-generator/components/PasswordWrapper.vue";

</script>

<template>
  <Theme full-height>
    <!-- <div class="page-content"> -->
      <!-- <Row> -->
        <!-- <Column> -->
          <!-- <Suspense> -->
            <PasswordWrapper />
          <!-- </Suspense> -->
        <!-- </Column> -->
      <!-- </Row> -->
    <!-- </div> -->
  </Theme>
</template>

<style lang="scss" scoped>
@import "@scss/rules/spaces.scss";
// @import "@scss/rules/flex.scss";

// .page-content {
//   @extend .p-r;
// }
</style>
