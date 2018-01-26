import requestWord from '@/components/adapters/WordRequester'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'


describe('WordRequester', () => {
  it('should return a word string', async () => {
    var mock = new MockAdapter(axios)

    mock.onGet('http://localhost:4000')
      .reply(200, JSON.stringify({ word: "some-word" }))

    expect(await requestWord()).toEqual('some-word')
  })
})
