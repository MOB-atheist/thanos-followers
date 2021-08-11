import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { UserFollowsReducer } from './features/follow'
import { userReducer } from './features/OAuth'
/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  userFollows: UserFollowsReducer,
  user: userReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
