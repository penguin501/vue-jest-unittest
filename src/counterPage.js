import { increment, getCount } from './counter'

const counterPage = () => {
  const div = document.createElement('div');

  const label = document.createElement('label');
  // spanを追加
  const span = document.createElement('span');
  span.textContent = 0

  label.textContent = 'カウント：'
  label.appendChild(span)

  const button = document.createElement('button');
  button.textContent = 'count up'
  button.addEventListener('click', () => {
    increment()
    // spanにカウント回数を設定する
    span.textContent = getCount()
  })

  div.appendChild(button)
  div.appendChild(label)

  document.body.appendChild(div);
}

export default counterPage