import { requestWord } from '@/components/adapters/WordRequester'
import { wordWithAttempts } from '@/components/game/Core'

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
    getWord (state) {
      return state.word
    },

    wordWithAttempts ({word, attempts, isGameOver}, getters) {
      if (getters.isGameOver) {
        return word
      } else {
        return wordWithAttempts(word, attempts)
      }
    },

    isGameOver (state) {
      return state.totalGuesses >= state.totalChances
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
