import Vue from 'vue'
import Letter from '@/components/Letter'

describe('Letter.vue', () => {
  it('should render a given word', () => {
    const letterProp = 'A'
    const Constructor = Vue.extend(Letter)
    const letterComponent = new Constructor({ propsData: { letter: letterProp }}).$mount()

    expect(letterComponent.$el.textContent)
      .toContain(letterProp)
  })

  it('requires a non-empty letter prop', () => {
    const Constructor = Vue.extend(Letter)
    const letterComponent = new Constructor().$mount()

    const letterProp = letterComponent.$options.props.letter

    expect(letterProp.required).toBeTruthy()
    expect(letterProp.type).toBe(String)
  })
})
