import {
  Actions,
  ActionInterface,
  FollowersInterface,
  UserFollowsStateTypes,
  FollowingInterface,
} from './types'
import followReducer from './followReducer'

describe('features > follow > Reducer', () => {
  it(`adds a follower, if ${Actions.ADD_FOLLOWER} action is provided`, () => {
    const initialState = {
      followers: [],
      following: [],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const expectedState = {
      followers: [
        {
          username: 'test',
        },
      ],
      following: [],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const action: ActionInterface = {
      type: Actions.ADD_FOLLOWER,
      payload: [
        {
          username: 'test',
        },
      ],
    }

    expect(followReducer(initialState, action)).toEqual(expectedState)
  })

  it(`adds a following, if ${Actions.ADD_FOLLOWER} action is provided`, () => {
    const initialState = {
      followers: [],
      following: [],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const expectedState = {
      followers: [],
      following: [
        {
          username: 'test',
        },
      ],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const action: ActionInterface = {
      type: Actions.ADD_FOLLOWING,
      payload: [
        {
          username: 'test',
        },
      ],
    }

    expect(followReducer(initialState, action)).toEqual(expectedState)
  })

  it(`doesn't duplicate follower, if ${Actions.ADD_FOLLOWER} action is provided`, () => {
    const initialState = {
      followers: [],
      following: [],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const expectedState = {
      followers: [
        {
          username: 'test',
        },
      ],
      following: [],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const action: ActionInterface = {
      type: Actions.ADD_FOLLOWER,
      payload: [
        {
          username: 'test',
        },
        {
          username: 'test',
        },
      ],
    }

    expect(followReducer(initialState, action)).toEqual(expectedState)
  })

  it(`doesn't duplicate following, if ${Actions.ADD_FOLLOWER} action is provided`, () => {
    const initialState = {
      followers: [],
      following: [],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const expectedState = {
      followers: [],
      following: [
        {
          username: 'test',
        },
      ],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const action: ActionInterface = {
      type: Actions.ADD_FOLLOWING,
      payload: [
        {
          username: 'test',
        },
        {
          username: 'test',
        },
      ],
    }

    expect(followReducer(initialState, action)).toEqual(expectedState)
  })

  it(`clears data, if ${Actions.CLEAR_DATA} action is provided`, () => {
    const initialState = {
      followers: [
        {
          username: 'test',
        },
      ] as FollowersInterface[],
      following: [
        {
          username: 'test',
        },
      ] as FollowingInterface[],
      deletedFollowers: [
        {
          username: 'test',
        },
      ] as FollowersInterface[],
      deletedFollowing: [
        {
          username: 'test',
        },
      ] as FollowingInterface[],
    } as UserFollowsStateTypes

    const expectedState = {
      followers: [],
      following: [],
      deletedFollowers: [],
      deletedFollowing: [],
    }

    const action: ActionInterface = {
      type: Actions.CLEAR_DATA,
      payload: {} as any,
    }

    expect(followReducer(initialState, action)).toEqual(expectedState)
  })
})
