import React from 'react'
import { Container } from 'reactstrap'
import { Provider } from 'react-redux'

import store from './store'
import SplitByGrid from './components/splitByGrid'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <SplitByGrid />
      </Container>
    </Provider>
  )
}

export default App