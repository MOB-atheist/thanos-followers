import { ActionInterface, Actions, GithubAuthInterface } from './types'

const initialState = {
  device_code: '',
  user_code: '',
  verification_uri: '',
  expires_in: 0,
  interval: 0,
}

export default (
  state: GithubAuthInterface = initialState,
  action: ActionInterface
): GithubAuthInterface => {
  switch (action.type) {
    case Actions.ADD_USER:
      return action.payload
    case Actions.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
