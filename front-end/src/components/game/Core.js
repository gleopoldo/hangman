const HIDDEN_LETTER = '_'
const MAX_WRONG_ATTEMPTS = 5

const displayWithHiddenLetters = (word, attempts) => {
  let characters = word.split('')

  return characters.map((character) => {
    return attempts.includes(character) ? character : HIDDEN_LETTER
  })
}

const calculateWrongAttempts = (word, attempts) => {
  let uniqueAttempts = Array.from(new Set(attempts))

  return uniqueAttempts.filter((letter) => !word.includes(letter)).length
}

const hasDiscoveredWord = (word, attempts) => {
  return !displayWithHiddenLetters(word, attempts).includes(HIDDEN_LETTER)
}

const displayWord = (word, attempts) => {
  let wrongAttempts = calculateWrongAttempts(word, attempts)

  if (wrongAttempts >= MAX_WRONG_ATTEMPTS) {
    return word.split('')
  } else {
    return displayWithHiddenLetters(word, attempts)
  }
}

export {
  hasDiscoveredWord,
  displayWord
}
