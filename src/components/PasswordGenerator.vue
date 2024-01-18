<script setup lang="ts">
class Symbol {
  constructor(symbols, type = "letters") {
    this.symbols = symbols
    this.length = symbols.length
    this.type = type
  }

  getRandomElement() {
    let randomElement = Math.ceil(Math.random() * this.length - 1)
    return this.symbols[randomElement]
  }
}

const letters = new Symbol([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
])

const numbers = new Symbol([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
// console.log('numbers: ', numbers);
const characters = new Symbol([
  "+",
  "-",
  "&",
  "|",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":"
])
const ruLetters = new Symbol(["а", "б", "в", "г", "д"])

console.log("get random number: ", numbers.getRandomElement())
</script>

<template>
  <h1>Password Generator</h1>
</template>

<style lang="scss" scoped></style>
