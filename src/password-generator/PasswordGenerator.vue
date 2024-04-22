<script setup lang="ts">
import { ref } from "vue"
import { useMessage } from 'naive-ui'

import { NaiveModal } from './ts/Modals'
import { PasswordGenerator } from './ts/PasswordGenerator'

/* page static */
const titleText = ref('Мгновенный генератор паролей 🚀')
const actionText = ref('Нажми на пароль, чтобы его скопировать')


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

  const successModal = new NaiveModal(modal, "Пароль скопирован 👌 Спасибо, что копируешь пароли именно у нас!", {
    duration: 5000,
    closable: true,
  })
  successModal.createSuccessModal()
}


</script>

<template>
  <section class="password-wrapper space-between">
    <h1 class="title">{{ titleText }}</h1>

    <div>
      <div class="row x-center">
        <span class="emoji-hint">👉</span>
        <h3 class="password-text undertitle" @click="copyPassword"> {{ password }}</h3>
      </div>
      <h6 class="copy-action subtitle">{{ actionText }}</h6>
    </div>

    <!-- hidden -->
    <h6 v-if="isCountVisible" hidden>Пароль скопирован ХХХ раз</h6>
  </section>
</template>

<style lang="scss">
@import "@scss/rules/all.scss";
@import "@scss/settings/all.scss";

.password-wrapper {
  @extend .has-text-centered;
  height: 60vh;
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
