<script setup lang="ts">
import GlobalStyles from "@components/GlobalStyles.vue"
import DeveloperUI from "@components/DeveloperUI.vue"
import PasswordGenerator from "@components/PasswordGenerator.vue"

import { globalStyles } from "./ui-config/globalStyles"
</script>

<template>
  <!-- toggle global styles -->
  <Transition>
    <GlobalStyles v-if="globalStyles.enabled" />
    <div class="no-styles" v-else>
      <Suspense>
          <PasswordGenerator />
      </Suspense>
    </div>
  </Transition>

  <DeveloperUI />
</template>

<style lang="scss">
@import "@scss/base/custom-reset.scss";
@import "@scss/helpers/all.scss";

.page-content {
  @extend .text-center;
}

/* Transition component styles */
.v-enter-active,
.v-leave-active {
  transition: 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
