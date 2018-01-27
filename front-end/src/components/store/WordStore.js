const WordStore = {
  state: {
    word: ''
  },

  mutations: {
    setWord (state, {word}) {
      if(word) { state.word = word }
    }
  }
}

export default WordStore;
