import axios from 'axios'

const API = 'http://localhost:4000'

const WordStore = {
  state: {
    word: ''
  },

  mutations: {
    setWord (state, {word}) {
      if(word) { state.word = word }
    }
  },

  getters: {
    getWord (state) {
      return state.word
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
