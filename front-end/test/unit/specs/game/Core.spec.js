import * as core from '@/components/game/Core'

describe('Core.js', () => {
  describe('displayWord', () => {
    describe('when there still are guesses', () => {
      it('when attempts is empty, returns an array of underscores', () => {
        let word = 'something'
        let attempts = []

        let fetched = core.displayWord(word, attempts)

        expect(fetched).toEqual(['_', '_', '_', '_', '_', '_', '_', '_', '_'])
      })

      it('when attempts is not empty, returns the matched characters', () => {
        let word = 'something'
        let attempts = ['s', 'o', 'h', 'i', 'g']
      
        let fetched = core.displayWord(word, attempts)

        expect(fetched).toEqual(['s', 'o', '_', '_', '_', 'h', 'i', '_', 'g'])
      })

      it('when word is discovered, returns all letters', () => {
        let word = 'ball'
        let attempts = ['b', 'a', 'l', 'l']
        
        let fetched = core.displayWord(word, attempts)

        expect(fetched).toEqual(['b', 'a', 'l', 'l'])
      })
    })

    describe('when a letter was guessed twice', () => {
      it('does not counts duplicates as wrong attempts', () => {
        let word = 'ball'
        let attempts = ['h', 'l', 'p', 'p', 'y', 'x']

        expect(core.displayWord(word, attempts))
          .toEqual(['_', '_', 'l', 'l'])
      })
    })

    describe('when already made more than 5 wrong attempts', () => {
      it('returns the entire word', () => {
        let word = 'ball'
        let attempts = ['h', 'l', 'p', 'z', 'y', 'x']

        expect(core.displayWord(word, attempts))
          .toEqual(['b', 'a', 'l', 'l'])
      })
    })
  })

  describe('hasDiscoveredWord', () => {
    it('returns true when all letters where attempted', () => {
      let word = 'ball'
      let attempts = ['b', 'a', 'l']

      expect(core.hasDiscoveredWord(word, attempts)).toEqual(true)
    })

    it('returns false when some letters where not attempted', () => {
      let word = 'ball'
      let attempts = ['b']

      expect(core.hasDiscoveredWord(word, attempts)).toEqual(false)
    })
  })
})
