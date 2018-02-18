import Vue from 'vue'
import GameOver from '@/components/GameOver'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('GameOver.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      restartGame: jest.fn()
    }

    store = new Vuex.Store({
      actions
    })
  })

  it('should display game-over message', () => {
    const wrapper = mount(GameOver)

    expect(wrapper.vm.$el.textContent).toContain('GAME-OVER')
  })

  describe('on click', () => {
    it('triggers game restart after clicking in restart-button', () => {
      const wrapper = mount(GameOver)

      wrapper.find('#restart-button').trigger('click')

      wrapper.vm.$nextTick(() => {
        expect(actions.restartGame).toHaveBeenCalled()
      })
    })
  })
})
