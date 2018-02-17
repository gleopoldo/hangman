const GameStore = {
  state: {
    totalChances: 5,
    totalGuesses: 0
  },

  getters: {
    isGameOver (state) {
      return state.totalGuesses >= state.totalChances
    }
  },

  mutations: {
    registerWrongAttempt: (state) => {
      state.totalGuesses++ 
    }
  }
}

export default GameStore;
