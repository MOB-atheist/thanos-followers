export interface FollowersInterface {
  username: string
}

export interface FollowingInterface {
  username: string
}

export interface UserFollowsStateTypes {
  followers: FollowersInterface[]
  following: FollowingInterface[]
  deletedFollowers: FollowersInterface[]
  deletedFollowing: FollowingInterface[]
}

export enum Actions {
  ADD_FOLLOWER = 'ADD_FOLLOWER',
  REMOVE_FOLLOWER = 'REMOVE_FOLLOWER',
  ADD_FOLLOWING = 'ADD_FOLLOWING',
  REMOVE_FOLLOWING = 'REMOVE_FOLLOWING',
  CLEAR_DATA = 'CLEAR_DATA',
}

export interface ActionInterface {
  type: Actions
  payload: FollowersInterface[] | FollowingInterface[]
}
