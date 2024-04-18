<script setup lang="ts">
import { ref } from "vue"
import { useMessage } from 'naive-ui'

import { NaiveModal } from './ts/Modals'
import { PasswordGenerator } from './ts/PasswordGenerator'

/* page static */
let actionText = ref('Нажми на пароль, чтобы его скопировать')


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

  const successModal = new NaiveModal(modal, "Пароль у тебя 👌 Спасибо, что копируешь пароли именно у нас!", {
    duration: 5000,
    closable: true,
  })
  successModal.createSuccessModal()
}


</script>

<template>
  <section class="password-wrapper">
    <!-- h1 is maden & hidden for seo -->
    <h1 class="title" hidden>Мгновенный генератор паролей</h1>

    <!-- text -->
    <h2 class="copy-action subtitle">{{ actionText }}</h2>
    <h3 class="password-text undertitle" @click="copyPassword">{{ password }}</h3>
    <h6 v-if="isCountVisible">Пароль скопирован ХХХ раз</h6>
  </section>
</template>

<style lang="scss">
@import "@scss/rules/spaces.scss";
@import "@scss/rules/fonts.scss";
@import "@scss/rules/hover.scss";
@import "@scss/rules/media.scss";
@import "@scss/settings/fonts.scss";
@import "@scss/settings/colors.scss";


.password-wrapper {
  @extend .has-text-centered, .p-r;
  height: 50vh;
  margin: 15vh 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @include mobile-large {
    margin: 10vh 0 0 0;
  }
}


h1,
h2,
h3 {
  @extend .has-no-margins;
}

.copy-action {
  @extend .has-regular-font-weight;
}

$greenColor: #42b883;

.password-text {
  @extend .has-cursor-pointer, .color-blue;
  word-wrap: break-word;
  text-decoration: underline;

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
