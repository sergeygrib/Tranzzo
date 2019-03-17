import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import initialStore from './initialStore'
import * as rootReducers from '../reducers'

const logger = createLogger()
const middleware = [logger, thunk]

const store = createStore(
  combineReducers(rootReducers),
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store