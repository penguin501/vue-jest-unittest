import { mount } from '@vue/test-utils'
import App from './App.vue'

it('初期表示時にHello Jest!が表示されていること', () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toBe('<h1>Hello Jest!</h1>')
})
