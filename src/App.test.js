import '@testing-library/jest-dom/extend-expect'
import { render} from 'vue-testing-library'
import App from './App.vue'

it('render App', () => {
  const { getByText } = render(App)
  expect(getByText('Hello Jest!')).toBeInTheDocument()
})
