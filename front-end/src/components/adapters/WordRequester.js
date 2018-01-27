import axios from 'axios'

const API = 'http://localhost:4000'
/**
 * Attempts to request a new word from an external API
 *
 * Returns either a string containing the fetched word, on success,
 * or an empty string
 */
let requestWord = async () => {
  let word = ''

  await axios.get(API, { responseType: 'json' })
    .then((response) => {
      word = response.data.word 
    })
    .catch((error) => {
      console.log(`Error on fetching word on api ${error}`)
    })

  return word
}


export default requestWord
