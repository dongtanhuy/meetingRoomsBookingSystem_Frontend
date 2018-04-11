import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
/* global it, describe, beforeEach, before, after, afterEach */
/* eslint no-unused-vars: "off" */
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
