<script setup lang="ts">
import { computed } from "vue"
import { customProps } from "@/developer-ui/addons/custom-props/customProps"
import { propsToClasses } from "@/developer-ui/addons/custom-props/propsToClasses"

let props = defineProps({
  ...customProps,
})

let propsClasses = computed(() => propsToClasses(props))
</script>

<template>
  <div :class="['theme', propsClasses]">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "@scss/components/layout/theme.scss";
</style>
