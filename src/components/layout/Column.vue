<script setup lang="ts">
import { computed } from "vue"
import { propsToClasses } from "@/developer-ui/addons/custom-props/propsToClasses"
import { customProps } from "@/developer-ui/addons/custom-props/customProps"

let props = defineProps({
  ...customProps,
})

let propsClasses = computed(() => propsToClasses(props))
</script>

<template>
  <div :class="['column', propsClasses]">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "@scss/components/layout/column.scss";
</style>
