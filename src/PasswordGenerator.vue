<script setup lang="ts">
import { ref } from "vue"
import { useMessage } from 'naive-ui'
import { NaiveModal } from '@/ts/Modals'

/* languages */
import LanguagesSwitch from '@generator/LanguagesSwitch.vue'
import { siteLanguage } from '@ts/SiteLanguage'

import { PasswordGenerator } from '@/ts/PasswordGenerator'

/* password generator */
let password = ref("#123456.7.qwertY@123$")
let passwordLength = 16
password.value = new PasswordGenerator(passwordLength).getPassword()

/* click count */
let isCountVisible = false


/* copy password & show modal window  */
let modal = useMessage()
function copyPassword(): void {
  navigator.clipboard.writeText(password.value)

  const successModal = new NaiveModal(modal, siteLanguage.extractText('thankYouMessage'), {
    duration: 5000,
    closable: true,
  })
  successModal.createSuccessModal()
}

</script>

<template>
  <section class="rows-between">
    <section class="password-wrapper space-between">
      <!-- title -->
      <h1 class="title">{{ siteLanguage.extractText('siteTitle') }}</h1>

      <div>
        <div class="row x-center">
          <!-- password -->
          <span class="emoji-hint">👉</span>
          <h3 class="password-text undertitle" @click="copyPassword"> {{ password }}</h3>
        </div>
        <h6 class="copy-action subtitle">{{ siteLanguage.extractText('copyActionMessage') }}</h6>
      </div>

      <!-- hidden -->
      <h6 v-if="isCountVisible" hidden>{{ siteLanguage.extractText('copyCounter') }}</h6>

      <!-- tabs -->
      <LanguagesSwitch></LanguagesSwitch>
    </section>
  </section>
</template>

<style lang="scss">
@import "@scss/rules/all.scss";
@import "@scss/settings/all.scss";

.rows-between {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.password-wrapper {
  @extend .has-text-centered;
  flex-grow: 1;
  padding: 10dvh 0 0 0;
  display: flex;
  flex-direction: column;

  @include mobile-large {
    height: 50vh;
  }
}

.copy-action {
  @extend .has-regular-font-weight;
}

.password-text {
  @extend .has-cursor-pointer, .color-blue;
  word-wrap: break-word;
  text-decoration: underline;

  .emoji-hint {
    text-decoration: none;
  }

  &:hover {
    color: lighten($vue-blue, 20%);
  }
}

/* notification (message) wrapper */
.n-message-wrapper {
  justify-content: center;
}

.n-message {
  max-width: 90%;
}

.n-message {
  @include tablet {
    max-width: 100%;
  }
}
</style>
