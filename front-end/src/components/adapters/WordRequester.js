import axios from 'axios'

let requestWord = async () => {
  let word

  await axios.get('http://localhost:4000', { responseType: 'json' })
    .then((response) => {
      console.log(response.data)
      word = response.data.word 
    })

  return word
}


export default requestWord
