export const lettersSymbols = [
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
]

export const singsSymbols = [
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
]

export const numbersSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


export class Symbol {
  symbols = []
  length = 0

  constructor(symbols: []) {
    this.symbols = symbols
    this.length = symbols.length
  }

  getRandomElement() {
    const randomElement = Math.ceil(Math.random() * this.length - 1)
    return this.symbols[randomElement]
  }
}
