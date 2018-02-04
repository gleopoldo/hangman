import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import Word from '@/components/Word'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Word.vue', () => {
  it('returns the store word with attempts', () => {
    const wrapper = shallow(Word, {
      mocks: {
        $store: {
          getters: {
            wordWithAttempts: ((_) => {
              return ['_', 'a', 'l', 'l']
            })()
          }
        }
      },
      localVue
    })

    expect(wrapper.text().trim()).toEqual('_all')
  })
})
