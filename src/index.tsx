import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import { App } from './components/App/App'
import { Store } from './store/Store'
export const store = {
  store: new Store(),
}
render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
