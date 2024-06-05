import * as React     from 'react'
import { IRoute }     from 'configs/types'
import { Route }      from 'react-router-dom'

const configureRoutes = (routes: IRoute[]) => {
  return routes.map((r, i) => (
    <Route exact path={r.path} component={r.component} key={`ROUTE__${i}`}></Route>
  ))
}

export default configureRoutes