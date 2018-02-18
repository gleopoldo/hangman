import GameStore from '@/components/store/GameStore'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const ApiWordEndpoint = 'http://localhost:4000'

describe('GameStore.js', () => {
  it('initializes totalChances with 5', () => {
    expect(GameStore.state.totalChances).toEqual(5)
  })

  it('initializes totalGuesses state with 0', () => {
    expect(GameStore.state.totalGuesses).toEqual(0)
  })
  
  describe('#isGameOver()', () => {
    it('returns false when player still have guesses', () => {
      let state = { totalChances: 5, totalGuesses: 4 }

      expect(GameStore.getters.isGameOver(state)).toEqual(false)
    })

    it('returns true when player used all chances', () => {
      let state = { totalChances: 5, totalGuesses: 5 }

      expect(GameStore.getters.isGameOver(state)).toEqual(true)
    })
  })

  describe('#registerWrongAttempt', () => {
    it('increases totalGuesses by 1', () => {
      let state = {
        totalGuesses: 2,
        totalChances: 5,
      }

      GameStore.mutations.registerWrongAttempt(state, { letter: 'A' })

      expect(state.totalGuesses).toEqual(3)
    })
  })
})
