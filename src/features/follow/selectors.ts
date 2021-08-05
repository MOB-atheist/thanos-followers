import { StateInterface } from '../../storeTypes'
import { FollowersInterface, FollowingInterface } from './types'

export const getFollowers = (state: StateInterface): FollowersInterface[] =>
  state.userFollows.followers
export const getFollowing = (state: StateInterface): FollowingInterface[] =>
  state.userFollows.following
