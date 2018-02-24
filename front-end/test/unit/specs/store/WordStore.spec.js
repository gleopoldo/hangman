import WordStore from '@/components/store/WordStore'
import * as core from '@/components/game/Core'

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

  describe('attemptedLetter()', () => {
    it('returns true when the letter was already attempted', () => {
      let state = { attempts: ['A', 'B'] }

      expect(WordStore.getters.attemptedLetter(state)('A'))
        .toEqual(true)
    })

    it('returns false when the letter was not attempted', () => {
      let state = { attempts: ['A', 'B'] }

      expect(WordStore.getters.attemptedLetter(state)('C'))
        .toEqual(false)
    })
  })

  describe('wordWithAttempts', () => {
    it('calls displayWithHiddenLetters with correct args', () => {
      core.displayWord = jest.fn()
      let state = { word: 'something', attempts: ['a', 'o', 's', 'h', 'g', 'i'] }
      let getters = { lostGame: false }

      WordStore.getters.wordWithAttempts(state, getters)

      expect(core.displayWord)
        .toHaveBeenCalledWith(state.word, state.attempts)
    })
  })
  
  describe('wonGame()', () => {
    it('calls hasWonGame with correct params', () => {
      let state = { word: 'ball', attempts: ['b']}
      core.hasDiscoveredWord = jest.fn()

      WordStore.getters.wonGame(state)

      expect(core.hasDiscoveredWord)
        .toHaveBeenCalledWith(state.word, state.attempts)
    })
  })

  describe('lostGame()', () => {
    it('returns false when player still have guesses', () => {
      let state = { totalChances: 5, totalGuesses: 4 }

      expect(WordStore.getters.lostGame(state)).toEqual(false)
    })

    it('returns true when player used all chances', () => {
      let state = { totalChances: 5, totalGuesses: 5 }

      expect(WordStore.getters.lostGame(state)).toEqual(true)
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
