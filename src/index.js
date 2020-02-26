import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import * as serviceWorker from './serviceWorker'

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
)

serviceWorker.register()
