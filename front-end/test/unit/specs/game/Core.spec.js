import { wordWithAttempts } from '@/components/game/Core'

describe('Core.js', () => {
  describe('wordWithAttempts', () => {
    it('when attempts is empty, returns an array of underscores', () => {
      let word = 'something'
      let attempts = []

      let fetched = wordWithAttempts(word, attempts)

      expect(fetched).toEqual(['_', '_', '_', '_', '_', '_', '_', '_', '_'])
    })

    it('when attempts is not empty, returns the matched characters', () => {
      let word = 'something'
      let attempts = ['s', 'o', 'h', 'i', 'g']
    
      let fetched = wordWithAttempts(word, attempts)

      expect(fetched).toEqual(['s', 'o', '_', '_', '_', 'h', 'i', '_', 'g'])
    })

    it('when word is discovered, returns all letters', () => {
      let word = 'ball'
      let attempts = ['b', 'a', 'l']
      
      let fetched = wordWithAttempts(word, attempts)

      expect(fetched).toEqual(['b', 'a', 'l', 'l'])
    })
  })
})
