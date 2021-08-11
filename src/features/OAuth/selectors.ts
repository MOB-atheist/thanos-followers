import { StateInterface } from '../../storeTypes'
import { GithubAuthInterface } from './types'

export const getUser = (state: StateInterface): GithubAuthInterface =>
  state.user
