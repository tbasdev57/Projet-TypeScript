import * as React       from 'react'
import ReactDOM         from 'react-dom'
import {
  Switch,
  Router,
}                       from 'react-router-dom'
import {
  Provider
}                       from 'react-redux'
import store            from 'helpers/configureStore'
import history          from 'helpers/history'
import configureRoutes  from 'helpers/configureRoutes'
import routes           from 'configs/routes'

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          { configureRoutes(routes) }
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
