import { requestWord } from '@/components/adapters/WordRequester'

const WordStore = {
  state: {
    word: '',
    attempts: [],
  },

  mutations: {
    setWord (state, {word}) {
      if(word) { state.word = word.toUpperCase() }
    },

    registerGuess (state, {letter}) {
      if(!state.attempts.includes(letter)){
        state.attempts.push(letter)
      }
    }
  },

  getters: {
    contains ({word}) {
      return (letter) => {
        return word.includes(letter) 
      }
    },

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
    renewWord ({ commit }) {
      commit('setWord', {word: requestWord()})
    }
  }
}

export default WordStore;
