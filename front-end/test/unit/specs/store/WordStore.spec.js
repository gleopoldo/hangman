import WordStore from '@/components/store/WordStore'

describe('WordStore.js', () => {
  it('initializes word state with an empty string', () => {
    expect(WordStore.state.word).toEqual('')
  })

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
