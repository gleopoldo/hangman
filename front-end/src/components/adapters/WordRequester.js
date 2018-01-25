import request from 'request'

function requestWord() {
    //let word = ''
    //vue_instance.get('http://localhost:4000').then(response => {
      //word = JSON.parse(response.body).word
    //})
  // return word
    
    let word = ''
    request('http://localhost:4000', function(error, response, body){
      word = JSON.parse(body).word
      console.log(body)
    })

    return word

}

export default requestWord;
