import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { UserFollowsReducer } from './features/follow'
/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  userFollows: UserFollowsReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
