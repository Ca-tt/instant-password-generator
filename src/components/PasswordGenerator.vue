<script setup lang="ts">
import { ref } from "vue";
import { lettersSymbols, numbersSymbols, singsSymbols } from "@/ts/symbols";

let password = ref("1234567qwerty");

class Symbol {
  symbols = [];
  length = 0;

  constructor(symbols: []) {
    this.symbols = symbols;
    this.length = symbols.length;
  }

  getRandomElement() {
    let randomElement = Math.ceil(Math.random() * this.length - 1);
    return this.symbols[randomElement];
  }
}

class PasswordGenerator {
  length = 16;

  constructor(length = 16) {
    this.length = length;
  }

  /* get random number for symbols array picking */
  getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  /* pick up random array of symbols */
  getRandomSymbolsArray() {
    const symbolsArrays = [numbersSymbols, lettersSymbols, singsSymbols];
    let arraysCount = symbolsArrays.length;

    let randomIndex = this.getRandomNumber(arraysCount);

    const randomSymbolsArray = symbolsArrays[randomIndex];

    return randomSymbolsArray;
  }

  getPassword() {
    let newPassword = "";

    for (let i = 0; i < this.length; i++) {
      /* here we get a random array of symbols */
      const randomSymbolsArray = this.getRandomSymbolsArray();

      /* each time we add new character to our existing password from Symbol class */
      const newCharacter = new Symbol(randomSymbolsArray).getRandomElement();
      newPassword += newCharacter;
    }
    return newPassword;
  }
}

/* here we got our amazing, beautiful, lovely password */
let passwordLength = 32;

password.value = new PasswordGenerator(passwordLength).getPassword();

</script>

<template>
  <div class="password-wrapper">
    <h2 class="title-action">Скопируй пароль:</h2>
    <h1 class="password-text">{{ password }}</h1>
    <h6>Пароль скопирован ХХХ раз</h6>
  </div>
</template>

<style lang="scss" scoped>
@import "@scss/helpers/space.scss";
@import "@scss/helpers/fonts.scss";
@import "@scss/helpers/hover.scss";

.password-wrapper {
  @extend .has-text-centered;
}

h1,
h2 {
  @extend .has-no-margins;
}

.title-action {
  @extend .has-regular-font-weight;
}

.password-text {
  @extend .has-cursor-pointer;
  font-size: 1.8rem;
}
</style>
