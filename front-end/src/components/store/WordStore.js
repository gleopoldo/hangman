import axios from 'axios'

const API = 'http://localhost:4000'

const WordStore = {
  state: {
    word: '',
    attempts: []
  },

  mutations: {
    setWord (state, {word}) {
      if(word) { state.word = word }
    }
  },

  getters: {
    getWord (state) {
      return state.word
    },

    wordWithAttempts ({word, attempts}) {
      let characters = word.split('')

      return characters.map((character) => {
        return attempts.includes(character) ? character : '_'
      })
    }
  },

  actions: {
    async renewWord ({ commit }) {
      await axios.get(API, { responseType: 'json' })
        .then((response) => {
          commit('setWord', { word: response.data.word })
        })
        .catch((error) => {
          console.log(`Error on fetching word on api ${error}`)
        })
    }
  }
}

export default WordStore;
