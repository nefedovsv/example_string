import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import { App } from './components/App/App'
import { createStore } from './store/createStote'

const store = {
  store: createStore('a, b, c'),
}
render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
