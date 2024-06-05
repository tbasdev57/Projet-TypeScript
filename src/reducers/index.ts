import { combineReducers }          from 'redux'
import { reducer }                  from 'redux-form'

export interface IAppState {
  form: any
}

const rootReducer = combineReducers({
  form: reducer,
})

export default rootReducer