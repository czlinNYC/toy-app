import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from "./store";
import rootReducer from './reducers'
import App from './components/App'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
