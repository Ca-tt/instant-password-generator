<script setup lang="ts">
import GlobalStyles from "@/developer-ui/components/GlobalStyles.vue"
import DeveloperUI from "@/developer-ui/components/DeveloperUI.vue"
import PasswordWrapper from "@/password-generator/components/PasswordWrapper.vue"

import { globalStyles } from "./developer-ui/ui-config/globalStyles"

let isDeveloperUIVisible = false
</script>

<template>
  <!-- toggle global styles -->
  <Transition>
    <GlobalStyles v-if="globalStyles.enabled" />

    <div class="no-styles" v-else>
      <Suspense>
        <PasswordWrapper />
      </Suspense>
    </div>
  </Transition>

  <DeveloperUI v-if="isDeveloperUIVisible" />
</template>

<style lang="scss">
@import "@scss/settings/reset.scss";
@import "@scss/rules/all.scss";

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
