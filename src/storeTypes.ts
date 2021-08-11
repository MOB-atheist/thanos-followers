import { UserFollowsStateTypes } from './features/follow/types'
import { GithubAuthInterface } from './features/OAuth/types'

export interface StateInterface {
  userFollows: UserFollowsStateTypes
  user: GithubAuthInterface
}
