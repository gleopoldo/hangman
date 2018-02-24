import { requestWord } from '@/components/adapters/WordRequester'
import { displayWord, hasDiscoveredWord } from '@/components/game/Core'

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

    resetGameInformation(state) {
      state.attempts = []
      state.totalGuesses = 0
    },

    registerGuess (state, {letter}) {
      if(!state.attempts.includes(letter)){
        state.attempts.push(letter)
      }

      if(!state.word.includes(letter)) {
        state.totalGuesses++ 
      }
    },
  },

  getters: {
    attemptedLetter(state) {
      return (letter) => {
        return state.attempts.includes(letter)
      }
    },

    getWord (state) {
      return state.word
    },

    wordWithAttempts ({word, attempts}, getters) {
      return displayWord(word, attempts)
    },

    lostGame (state) {
      return state.totalGuesses >= state.totalChances
    },

    wonGame ({word, attempts}) {
      return hasDiscoveredWord(word, attempts)
    }
  },

  actions: {
    restartGame ({ commit }) {
      commit('setWord', {word: requestWord()})
      commit('resetGameInformation')
    }
  }
}

export default WordStore;
