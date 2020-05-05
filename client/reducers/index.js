import { combineReducers } from 'redux'

import user from './user'
import ferments from './ferments'

export default combineReducers({
  user,
  ferments
})