import WordStore from '@/components/store/WordStore'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const ApiWordEndpoint = 'http://localhost:4000'

describe('WordStore.js', () => {
  it('initializes word state with an empty word', () => {
    expect(WordStore.state.word).toEqual('')
  })

  it('initializes attempts state with an empty array', () => {
    expect(WordStore.state.attempts).toEqual([])
  })

  it('initializes totalChances with 5', () => {
    expect(WordStore.state.totalChances).toEqual(5)
  })

  it('initializes totalGuesses state with 0', () => {
    expect(WordStore.state.totalGuesses).toEqual(0)
  })

  describe('setWord()', () => {
    it('sets a new word with uppercase', () => {
      let state = { word: '' }

      WordStore.mutations.setWord(state, { word: 'new-word' })

      expect(state.word).toEqual('NEW-WORD')
    })

    it('does not update state if a new word is not given', () => {
      let state = { word: 'some-word' }

      WordStore.mutations.setWord(state, {})

      expect(state.word).toEqual('some-word')
    })
  })

  describe('resetGameInformation()', () => {
    it('resets attempts array', () => {
      let state = { attempts: ['A', 'Z'] }

      WordStore.mutations.resetGameInformation(state)

      expect(state.attempts).toEqual([])
    })

    it('resets totalGuesses', () => {
      let state = { totalGuesses: 5 }

      WordStore.mutations.resetGameInformation(state)

      expect(state.totalGuesses).toEqual(0)

    })
  })

  describe('registerGuess()', () => {
    it('adds a letter into the attempts', () => {
      let state = { word: 'FOO', attempts: [] }

      WordStore.mutations.registerGuess(state, {letter: 'A'})

      expect(state.attempts).toEqual(['A'])
    })

    it('keeps old attempts', () => {
      let state = { word: 'FOO', attempts: ['Z'] }

      WordStore.mutations.registerGuess(state, {letter: 'A'})

      expect(state.attempts).toEqual(['Z', 'A'])
    })

    it('does not duplicate attempts', () => {
      let state = { word: 'FOO', attempts: ['Z'] }

      WordStore.mutations.registerGuess(state, {letter: 'Z'})

      expect(state.attempts).toEqual(['Z'])
    })

    describe('when word does not contain letter', () => {
      it('increments total guesses by 1', () => {
        let state = { word: 'HORSE', totalGuesses: 0, attempts: [] }

        WordStore.mutations.registerGuess(state, {letter: 'Z'})

        expect(state.totalGuesses).toEqual(1)
      })
    })

    describe('when word contains letter', () => {
      it('does not increment total guesses', () => {
        let state = { word: 'HORSE', totalGuesses: 0, attempts: [] }

        WordStore.mutations.registerGuess(state, {letter: 'H'})

        expect(state.totalGuesses).toEqual(0)
      })
    })
  })

  describe('getWord()', () => {
    it('returns the word from store state', () => {
      let state = { word: 'some-word' }

      let fetched = WordStore.getters.getWord(state)

      expect(fetched).toEqual(state.word)
    })
  })

  describe('wordWithAttempts', () => {
    it('when attempts is empty, returns an array of underscores', () => {
      let state = { word: 'something', attempts: [] }

      let fetched = WordStore.getters.wordWithAttempts(state)

      expect(fetched).toEqual(['_', '_', '_', '_', '_', '_', '_', '_', '_'])
    })

    it('when attempts is not empty, returns the matched characters', () => {
      let state = { word: 'something', attempts: ['a', 'o', 's', 'h', 'g', 'i'] }
    
      let fetched = WordStore.getters.wordWithAttempts(state)

      expect(fetched).toEqual(['s', 'o', '_', '_', '_', 'h', 'i', '_', 'g'])
    })

    it('when word is discovered, returns all letters', () => {
      let state = { word: 'ball', attempts: ['a', 'b', 'l'] }
      
      let fetched = WordStore.getters.wordWithAttempts(state)

      expect(fetched).toEqual(['b', 'a', 'l', 'l'])
    })
  })
  
  describe('isGameOver()', () => {
    it('returns false when player still have guesses', () => {
      let state = { totalChances: 5, totalGuesses: 4 }

      expect(WordStore.getters.isGameOver(state)).toEqual(false)
    })

    it('returns true when player used all chances', () => {
      let state = { totalChances: 5, totalGuesses: 5 }

      expect(WordStore.getters.isGameOver(state)).toEqual(true)
    })
  })

  describe('async restartGame()', () => {
    it('renews the context store word', async () => {
      const context = { commit: jest.fn() }

      WordStore.actions.restartGame(context)

      expect(context.commit)
        .toHaveBeenCalledWith('setWord', { word: expect.any(String) })
    })

    it('resets game information', async () => {
      const context = { commit: jest.fn() }

      WordStore.actions.restartGame(context)

      expect(context.commit)
        .toHaveBeenCalledWith('resetGameInformation')
    })
  })
})
