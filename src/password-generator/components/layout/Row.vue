<script setup lang="ts">
import { computed } from "vue"
import { propsToClasses } from "@/developer-ui/addons/custom-props/propsToClasses"
import { customProps } from "@/developer-ui/addons/custom-props//customProps"

let props = defineProps({
  ...customProps,
})

let propsClasses = computed(() => propsToClasses(props))
</script>

<template>
  <section :class="['row', propsClasses]">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@import "@scss/rules/flex.scss";
@import "@scss/rules/flex.scss";
</style>
