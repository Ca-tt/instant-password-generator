<script setup lang="ts">
import RefreshPageIcon from "@/developer-ui/components/icons/RefreshPageIcon.vue"
import { reloadPage } from "@/developer-ui/addons/global/helpers/reloadPage"

import { Ref, ref } from "vue"

let tooltipText: Ref = ref("Refresh Page")
</script>

<template>
  <!-- show tooltip above button -->
  <NTooltip trigger="hover" :delay="500">
    <template #trigger>
      <!-- button as a wrapper around icon -->
      <NButton class="no-hover-bg-i" quaternary @click="reloadPage">
        <template #icon>
          <!-- refresh page icon -->
          <NIcon size="2rem" :component="RefreshPageIcon"> </NIcon>
        </template>
      </NButton>
    </template>

    <!-- tooltip text -->
    {{ tooltipText }}
  </NTooltip>
</template>

<style lang="scss">
@import "@scss/configs/colors.scss";
@import "@scss/rules/hover.scss";

.refresh-page {
  transition: 0.5s;

  &:hover {
    color: $naive-green;
    transform: rotate(-90deg);
  }
}
</style>
