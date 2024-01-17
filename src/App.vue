<script setup lang="ts">
import StudyUI from './StudyUI.vue';
import DeveloperUI from '@/components/DeveloperUI.vue';
import Lesson from './Lesson.vue';

import { globalStyles } from './ui-config/globalStyles';


</script>

<template>
  <!-- toggle global styles -->
  <Transition>
    <StudyUI v-if="globalStyles.enabled" />

    <div class="no-styles" v-else>
      <Suspense>
        <Lesson />
      </Suspense>
    </div>
  </Transition>

  <DeveloperUI />
</template>

<style lang="scss" scoped>
@import '@scss/base/custom-reset.scss';
@import '@scss/helpers/all.scss';

.page-content {
  @extend .text-center;
}

/* Transition component styles */
.v-enter-active,
.v-leave-active {
  transition: .4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>