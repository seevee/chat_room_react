import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

import './styles/style.scss'
import App from './components/app'
import reducers from './reducers'

const reducer = storage.reducer(reducers)
const engine = createEngine('my-save-key')
const localStorageMiddleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(localStorageMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer)

const load = storage.createLoader(engine)
load(store)
  .then((newState) => console.log('Loaded state: ', newState))
  .catch(() => console.log('Failed to load previous state'))

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
      <App />
    </Provider>
    , document.querySelector('.container'))
