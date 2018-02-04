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
    const letterComponent = new Constructor({ propsData: { letter: 'A' }}).$mount()

    const letterProp = letterComponent.$options.props.letter

    expect(letterProp.required).toBeTruthy()
    expect(letterProp.type).toBe(String)
  })

  it('is not clicked yet', () => {
    const wrapper = mount(Letter, { store, localVue, 
      propsData: { letter: 'a' },
    })

    expect(wrapper.vm.clicked).toBe(false)
    expect(wrapper.find('span.letter').is('.clicked')).toBe(false)
  })

  describe('on click', () => {
    it('inserts a new attempt with current letter', () => {
      const wrapper = mount(Letter, { store, localVue, 
        propsData: { letter: 'A' },
      })

      wrapper.find('span.letter').trigger('click')

      expect(mutations.makeGuess).toHaveBeenCalledWith(store.state, {letter: 'A'})
    })

    it('always attempts current letter with uppercase', () => {
      const wrapper = mount(Letter, { store, localVue, 
        propsData: { letter: 'a' },
      })

      wrapper.find('span.letter').trigger('click')

      expect(mutations.makeGuess).toHaveBeenCalledWith(store.state, {letter: 'A'})
    })

    it('changes component state to clicked', () => {
      const wrapper = mount(Letter, { store, localVue, 
        propsData: { letter: 'a' },
      })

      wrapper.find('span.letter').trigger('click')

      expect(wrapper.vm.clicked).toBe(true)
    })

    it('does not make an attempt if already clicked', () => {
      const wrapper = mount(Letter, { store, localVue, 
        propsData: { letter: 'a' },
      })

      wrapper.setData({ clicked: true })
      wrapper.find('span.letter').trigger('click')

      expect(mutations.makeGuess).not.toHaveBeenCalled()
    })

    it('adds clicked class to span', () => {
      const wrapper = mount(Letter, { store, localVue, 
        propsData: { letter: 'a' },
      })

      wrapper.find('span.letter').trigger('click')

      expect(wrapper.find('span.letter').is('.clicked')).toBe(true)
    })
  })
})
