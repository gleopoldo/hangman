import axios from 'axios'
axios.defaults.adatper = require('axios/lib/adapters/http');

function requestWord(callback) {
  var word;

  axios.request('http://localhost:4000')
    .then((response) => {
       word = response.data
       console.log(response.data)
    }).catch((error) => console.log(error))

  console.log("AFTER RESPONSE", word)
  return word
}

export default requestWord;
