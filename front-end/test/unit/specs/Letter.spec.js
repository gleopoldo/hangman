import Vue from 'vue'
import Letter from '@/components/Letter'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('Letter.vue', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      makeGuess: jest.fn(),
    }

    store = new Vuex.Store({
      state: {},
      mutations
    })
  })

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

  it('inserts a new attempt with current letter on click', () => {
    const wrapper = mount(Letter, { store, localVue, 
      propsData: { letter: 'A' },
    })

    wrapper.find('span.letter').trigger('click')

    expect(mutations.makeGuess).toHaveBeenCalledWith(store.state, {letter: 'A'})
  })
})
