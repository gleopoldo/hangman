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

  describe('registerWrongAttempt', () => {
    it('increases totalGuesses by 1', () => {
      let state = {
        totalGuesses: 2,
        totalChances: 5,
      }

      WordStore.mutations.registerWrongAttempt(state, { letter: 'A' })

      expect(state.totalGuesses).toEqual(3)
    })
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

  describe('registerGuess()', () => {
    it('adds a letter into the attempts', () => {
      let state = { attempts: [] }

      WordStore.mutations.registerGuess(state, {letter: 'A'})

      expect(state.attempts).toEqual(['A'])
    })

    it('keeps old attempts', () => {
      let state = { attempts: ['Z'] }

      WordStore.mutations.registerGuess(state, {letter: 'A'})

      expect(state.attempts).toEqual(['Z', 'A'])
    })

    it('does not duplicate attempts', () => {
      let state = { attempts: ['Z'] }

      WordStore.mutations.registerGuess(state, {letter: 'Z'})

      expect(state.attempts).toEqual(['Z'])
    })
  })

  describe('getWord()', () => {
    it('returns the word from store state', () => {
      let state = { word: 'some-word' }

      let fetched = WordStore.getters.getWord(state)

      expect(fetched).toEqual(state.word)
    })
  })

  describe('contains(letter)', () => {
    it('returns true when word contains given letter', () => {
      let letter = 's'
      let state = { word: 'some-word' }

      let contains = WordStore.getters.contains(state)(letter)

      expect(contains).toBe(true)
    })

    it('returns false when word does not contains given letter', () => {
      let letter = 'z'
      let state = { word: 'some-word' }

      let contains = WordStore.getters.contains(state)(letter)

      expect(contains).toBe(false)
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

  describe('async renewWord()', () => {
    it('renews the context store word', async () => {
      const setWord = jest.fn()
      const context = { commit: setWord }

      WordStore.actions.renewWord(context)
      expect(setWord).toHaveBeenCalledWith('setWord', { word: expect.any(String) })
    })
  })
})
