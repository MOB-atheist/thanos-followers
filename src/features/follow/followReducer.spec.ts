import { Actions, ActionInterface } from './types'
import followReducer from './followReducer'

describe('features > counter > counterReducer', () => {
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
})
