import '@testing-library/jest-dom/extend-expect'
import { getByText } from '@testing-library/dom'
import counterPage from './counterPage'

it('count upボタンをおすと、カウントラベルがカウントアップすること', () => {
  // 初期レンダリング
  counterPage()
  const body = document.querySelector('body')

  const button = getByText(body, 'count up')
  const label = getByText(body, 'カウント：')

  // 最初は0で
  expect(label).toHaveTextContent('0')
  // ボタンをクリックすると
  button.click()
  // 1になる
  expect(label).toHaveTextContent('1')
})