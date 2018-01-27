import Vue from 'vue'
import Word from '@/components/Word'

describe('Word.vue', () => {
  it('hides the word on mounting', () => {
    const Constructor = Vue.extend(Word)
    const wordComponent = new Constructor({ propsData: { word: 'word' } }).$mount()

    expect(wordComponent.$el.textContent).toEqual('')
  })

  it('validates presence of word prop', () => {
    const Constructor = Vue.extend(Word)
    const wordComponent = new Constructor().$mount()

    const wordProp = wordComponent.$options.props.word

    expect(wordProp.required).toBeTruthy()
    expect(wordProp.type).toEqual(String)
  })
})
