import { lettersSymbols, numbersSymbols, singsSymbols, Symbol } from "../data/Symbols"

export class PasswordGenerator {
  length = 16

  constructor(length = 16) {
    this.length = length
  }

  /* get random number for symbols array picking */
  getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  /* pick up random array of symbols */
  getRandomSymbolsArray() {
    const symbolsArrays = [numbersSymbols, lettersSymbols, singsSymbols]
    const arraysCount = symbolsArrays.length

    const randomIndex = this.getRandomNumber(arraysCount)

    const randomSymbolsArray = symbolsArrays[randomIndex]

    return randomSymbolsArray
  }

  getPassword() {
    let newPassword = ""

    for (let i = 0; i < this.length; i++) {
      /* here we get a random array of symbols */
      const randomSymbolsArray = this.getRandomSymbolsArray()

      /* each time we add new character to our existing password from Symbol class */
      const newCharacter = new Symbol(randomSymbolsArray).getRandomElement()
      newPassword += newCharacter
    }
    return newPassword
  }
}
