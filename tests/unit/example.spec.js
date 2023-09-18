import { shallowMount } from '@vue/test-utils'
import TheTopNavbar from '@/components/layouts/TheTopNavbar'

describe('TheTopNavbar.vue', () => {
  it('renders isLogin when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TheTopNavbar, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
