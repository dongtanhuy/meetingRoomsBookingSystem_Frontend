import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
// import logo from './logo.svg'
import './App.css'
const styles = {
  root: {
    flexGrow: 1
  }
}
class App extends Component {
  render () {
    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            Test title
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
withStyles(styles)(AppBar)
export default App
