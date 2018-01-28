import WordStore from '@/components/store/WordStore'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const ApiWordEndpoint = 'http://localhost:4000'

describe('WordStore.js', () => {
  it('initializes word state with an empty string', () => {
    expect(WordStore.state.word).toEqual('')
  })

  describe('setWord()', () => {
    it('sets a new word', () => {
      let state = { word: '' }

      WordStore.mutations.setWord(state, { word: 'new-word' })

      expect(state.word).toEqual('new-word')
    })

    it('does not update state if a new word is not given', () => {
      let state = { word: 'some-word' }

      WordStore.mutations.setWord(state, {})

      expect(state.word).toEqual('some-word')
    })
  })

  describe('getWord()', () => {
    it('returns the word from store state', () => {
      let state = { word: 'some-word' }

      let fetched = WordStore.getters.getWord(state)

      expect(fetched).toEqual(state.word)
    })
  })

  describe('async renewWord()', () => {
    it('renews the context store word', async () => {
      const setWord = jest.fn()
      const context = { commit: setWord }

      const mock = new MockAdapter(axios)
      mock.onGet(ApiWordEndpoint)
        .reply(200, JSON.stringify({ word: 'some-word' }))

      await WordStore.actions.renewWord(context)
      expect(setWord).toHaveBeenCalledWith('setWord', { word: 'some-word' })
    })

    it('does not renew the context on network error', async () => {
      const setWord = jest.fn()
      const context = { commit: setWord }

      const mock = new MockAdapter(axios)
      mock.onGet(ApiWordEndpoint)
        .networkError()

      await WordStore.actions.renewWord(context)
      expect(setWord).not.toHaveBeenCalled()
    })
  })
})
