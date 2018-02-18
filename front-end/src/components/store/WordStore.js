import { requestWord } from '@/components/adapters/WordRequester'

const WordStore = {
  state: {
    word: '',
    attempts: [],
    totalChances: 5,
    totalGuesses: 0
  },

  mutations: {
    setWord (state, {word}) {
      if(word) { state.word = word.toUpperCase() }
    },

    registerGuess (state, {letter}) {
      if(!state.attempts.includes(letter)){
        state.attempts.push(letter)
      }

      if(!state.word.includes(letter)) {
        state.totalGuesses++ 
      }
    },

    registerWrongAttempt: (state) => {
      state.totalGuesses++ 
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
    },

    isGameOver (state) {
      return state.totalGuesses >= state.totalChances
    }
  },

  actions: {
    renewWord ({ commit }) {
      commit('setWord', {word: requestWord()})
    }
  }
}

export default WordStore;
