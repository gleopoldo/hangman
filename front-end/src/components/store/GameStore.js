const GameStore = {
  state: {
    gameOver: false,
    totalChances: 5,
    totalGuesses: 0
  },

  getters: {
    isGameOver (state) {
      return state.gameOver
    }
  },

  mutations: {
    registerWrongAttempt: (state) => {
      state.totalGuesses++ 

      if(state.totalGuesses >= state.totalChances){
        state.gameOver = true
      }
    }
  }
}

export default GameStore;
