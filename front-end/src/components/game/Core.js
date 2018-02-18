
const wordWithAttempts = (word, attempts) => {
  let characters = word.split('')

  return characters.map((character) => {
    return attempts.includes(character) ? character : '_'
  })
}

export {
  wordWithAttempts
}
