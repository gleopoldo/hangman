import Vue from 'vue'
import GameOver from '@/components/GameOver'
import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('GameOver.vue', () => {
  it('should display game-over message', () => {
    const wrapper = shallow(GameOver)

    expect(wrapper.vm.$el.textContent).toContain('GAME-OVER')
  })

  describe('on click', () => {
    it('triggers game restart after clicking in restart-button', () => {
      const actions = { restartGame: jest.fn() }
      const store = new Vuex.Store({ actions })

      const wrapper = shallow(GameOver)

      wrapper.find('#restart-button').trigger('click')

      wrapper.vm.$nextTick(() => {
        expect(actions.restartGame).toHaveBeenCalled()
      })
    })
  })
})
