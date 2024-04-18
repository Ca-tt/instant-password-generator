<script setup lang="ts">
import { ref } from "vue"
import { useMessage } from 'naive-ui'

import { NaiveModal } from './ts/Modals'
import { PasswordGenerator } from './ts/PasswordGenerator'

/* page static */
let actionText = ref('Нажми на пароль, чтобы скопировать:')


/* password generator */
let password = ref("#123456.7.qwertY@123$")
let passwordLength = 32
password.value = new PasswordGenerator(passwordLength).getPassword()


/* click count */
let isCountVisible = false


/* copy password & show modal window  */
let modal = useMessage()
function copyPassword(): void {
  navigator.clipboard.writeText(password.value)

  const successModal = new NaiveModal(modal, "Пароль скопирован 👌 Спасибо, что создаёшь пароли именно у нас!", {
    duration: 99999,
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
@import "@scss/rules/space.scss";
@import "@scss/rules/fonts.scss";
@import "@scss/rules/hover.scss";
@import "@scss/rules/media.scss";
@import "@scss/settings/fonts.scss";

.password-wrapper {
  @extend .has-text-centered;
}

h1,
h2,
h3 {
  @extend .has-no-margins;
}

.copy-action {
  @extend .has-regular-font-weight;
  margin: 0 0 .75rem 0;
}

$greenColor: #42b883;

.password-text {
  @extend .has-cursor-pointer;
  word-wrap: break-word;

  &:hover {
    color: darken($greenColor, 10%);
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
