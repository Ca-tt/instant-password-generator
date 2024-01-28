<script setup lang="ts">
import GlobalStyles from "@components/GlobalStyles.vue"
import DeveloperUI from "@components/DeveloperUI.vue"
import PasswordGenerator from "@components/PasswordGenerator.vue"
import { NMessageProvider } from "naive-ui"

import { globalStyles } from "@/ui-config/globalStyles"
</script>

<template>
  <!-- Всё, что нужно было сделать -- поместить NMessageProvider выше, над if-else и Suspense -->
  <NMessageProvider container-class="modal-above" placement="bottom" class="above">
    <Transition>
      <!-- toggle global styles -->
      <GlobalStyles v-if="globalStyles.enabled" />
      <div class="no-styles" v-else>
        <Suspense>
          <PasswordGenerator />
        </Suspense>
      </div>
    </Transition>
  </NMessageProvider>

  <DeveloperUI />
</template>

<style lang="scss">
@import "@scss/base/custom-reset.scss";
@import "@scss/helpers/all.scss";

/* modal window */
.modal-above {
  z-index: 9999;
  opacity: 1;
}

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
