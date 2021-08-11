import {
  ActionInterface,
  Actions,
  FollowersInterface,
  FollowingInterface,
  UserFollowsStateTypes,
} from './types'

const initialState = {
  followers: [],
  following: [],
  deletedFollowers: [],
  deletedFollowing: [],
}

const deleteData = (
  original: FollowersInterface[] | FollowingInterface[],
  payload: any
): FollowersInterface[] | FollowingInterface[] => {
  return original.filter(
    (follower: FollowersInterface) =>
      payload.findIndex(
        (followerToDelete: FollowersInterface) =>
          follower.username === followerToDelete.username
      ) === -1
  )
}

const uniqueData = (
  original: FollowersInterface[] | FollowingInterface[],
  payload: any
): FollowersInterface[] | FollowingInterface[] => {
  return [...original, ...payload].filter(
    (data, index, self) =>
      index === self.findIndex((t) => t.username === data.username)
  )
}

export default (
  state: UserFollowsStateTypes = initialState,
  action: ActionInterface
): UserFollowsStateTypes => {
  switch (action.type) {
    case Actions.ADD_FOLLOWER:
      return {
        ...state,
        followers: uniqueData(state.followers, action.payload),
      }
    case Actions.REMOVE_FOLLOWER:
      return {
        ...state,
        followers: deleteData(state.followers, action.payload),
        deletedFollowers: uniqueData(state.deletedFollowers, action.payload),
      }
    case Actions.ADD_FOLLOWING:
      return {
        ...state,
        following: uniqueData(state.following, action.payload),
      }
    case Actions.REMOVE_FOLLOWING:
      return {
        ...state,
        following: deleteData(state.following, action.payload),
        deletedFollowing: uniqueData(state.deletedFollowing, action.payload),
      }
    case Actions.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
