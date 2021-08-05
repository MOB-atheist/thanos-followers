import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme, CssBaseline } from '@material-ui/core'

import store from './store'
import App from './App'

const theme = createTheme({
  palette: {
    primary: {
      light: '#6C0085',
      main: '#58006C',
      dark: '#430052',
    },
    secondary: {
      light: '#AB00D1',
      main: '#8C00AB',
      dark: '#7C0098',
    },
    type: 'dark',
  },
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
