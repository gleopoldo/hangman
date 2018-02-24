import Vue from 'vue'
import Letter from '@/components/Letter'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Letter.vue', () => {
  it('should render a given word', () => {
    const wrapper = mount(Letter, {
      propsData: { letter: 'A' },
      mocks: { 
        $store: {
          getters: {
            attemptedLetter: jest.fn().mockReturnValue(false)
          }
        }
      }
    })

    expect(wrapper.vm.$el.textContent)
      .toContain('A')
  })

  it('requires a non-empty letter prop', () => {
    const wrapper = mount(Letter, {
      propsData: { letter: 'A' },
      mocks: { 
        $store: {
          getters: {
            attemptedLetter: jest.fn().mockReturnValue(false)
          }
        }
      }
    })

    expect(wrapper.vm.$options.props.letter.required).toBeTruthy()
    expect(wrapper.vm.$options.props.letter.type).toBe(String)
  })

  describe('when no attempt with this letter was made yet', () => {
    it('does not include .clicked class to element', () => {
      const wrapper = mount(Letter, {
        propsData: { letter: 'A' },
        mocks: { 
          $store: {
            getters: {
              attemptedLetter: jest.fn().mockReturnValue(false)
            }
          }
        }
      })

      expect(wrapper.find('span.letter').is('.clicked')).toBe(false)
    })
  })

  describe('when an attempt with this letter was already made', () => {
    it('includes .clicked class to element', () => {
      const wrapper = mount(Letter, {
        propsData: { letter: 'A' },
        mocks: { 
          $store: {
            getters: {
              attemptedLetter: jest.fn().mockReturnValue(true)
            }
          }
        }
      })

      expect(wrapper.find('span.letter').is('.clicked')).toBe(true)
    })
  })

  describe('on click', () => {
    it('inserts a new attempt with current letter', () => {
      const mutations = {
        registerGuess: jest.fn()
      }

      const store = new Vuex.Store({
        state: {},
        getters: {
          attemptedLetter: jest.fn().mockReturnValue(() => false)
        },
        mutations
      })

      const wrapper = mount(Letter, { localVue, store, propsData: { letter: 'C' } })

      wrapper.find('span.letter').trigger('click')

      expect(mutations.registerGuess)
        .toHaveBeenCalledWith(store.state, {letter: 'C'})
    })

    it('ensures registering attempt with upper-cased letter', () => {
      const mutations = {
        registerGuess: jest.fn()
      }

      const store = new Vuex.Store({
        state: {},
        getters: {
          attemptedLetter: jest.fn().mockReturnValue(() => false)
        },
        mutations
      })

      const wrapper = mount(Letter, { localVue, store, propsData: { letter: 'a' } })

      wrapper.find('span.letter').trigger('click')

      expect(mutations.registerGuess)
        .toHaveBeenCalledWith(store.state, {letter: 'A'})
    })
  })
})
