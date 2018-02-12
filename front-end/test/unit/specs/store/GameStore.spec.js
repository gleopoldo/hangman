import GameStore from '@/components/store/GameStore'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const ApiWordEndpoint = 'http://localhost:4000'

describe('GameStore.js', () => {
  it('initializes totalChances with 5', () => {
    expect(GameStore.state.totalChances).toEqual(5)
  })

  it('initializes gameOver state with false', () => {
    expect(GameStore.state.gameOver).toEqual(false)
  })

  it('initializes totalGuesses state with 0', () => {
    expect(GameStore.state.totalGuesses).toEqual(0)
  })
  
  describe('#isGameOver()', () => {
    it('returns false when game is not over yet', () => {
      let state = { gameOver: false }

      expect(GameStore.getters.isGameOver(state)).toEqual(false)
    })

    it('returns true when game is already over', () => {
      let state = { gameOver: true }

      expect(GameStore.getters.isGameOver(state)).toEqual(true)
    })
  })

  describe('#registerWrongAttempt', () => {
    it('increases totalGuesses by 1', () => {
      let state = {
        totalGuesses: 2,
        totalChances: 5,
        gameOver: false,
      }

      GameStore.mutations.registerWrongAttempt(state, { letter: 'A' })

      expect(state.totalGuesses).toEqual(3)
    })

    describe('when totalGuesses is lower than totalChances', () => {
      it('does not ends the game', () => {
        let state = {
          totalGuesses: 2,
          totalChances: 5,
          gameOver: false,
        }

        GameStore.mutations.registerWrongAttempt(state, { letter: 'A' })

        expect(state.gameOver).toEqual(false)
      })
    })

    describe('when totalGuesses is equal to totalChances', () => {
      it('ends the game', () => {
        let state = {
          totalGuesses: 5,
          totalChances: 5,
          gameOver: false,
        }

        GameStore.mutations.registerWrongAttempt(state, { letter: 'A' })

        expect(state.gameOver).toEqual(true)
      })
    })
  })
})
