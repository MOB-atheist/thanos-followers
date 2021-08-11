import { Actions, ActionInterface } from './types'
import userReducer from './userReducer'

describe('features > loginGithub > Reducer', () => {
  it(`adds a user, if ${Actions.ADD_USER} action is provided`, () => {
    const initialState = {
      device_code: '',
      user_code: '',
      verification_uri: '',
      expires_in: 0,
      interval: 0,
    }

    const expectedState = {
      device_code: '3584d83530557fdd1f46af8289938c8ef79f9dc5',
      user_code: 'WDJB-MJHT',
      verification_uri: 'https://github.com/login/device',
      expires_in: 900,
      interval: 5,
    }

    const action: ActionInterface = {
      type: Actions.ADD_USER,
      payload: {
        device_code: '3584d83530557fdd1f46af8289938c8ef79f9dc5',
        user_code: 'WDJB-MJHT',
        verification_uri: 'https://github.com/login/device',
        expires_in: 900,
        interval: 5,
      },
    }

    expect(userReducer(initialState, action)).toEqual(expectedState)
  })

  it(`clear data , if ${Actions.ADD_USER} action is provided`, () => {
    const initialState = {
      device_code: '3584d83530557fdd1f46af8289938c8ef79f9dc5',
      user_code: 'WDJB-MJHT',
      verification_uri: 'https://github.com/login/device',
      expires_in: 900,
      interval: 5,
    }

    const expectedState = {
      device_code: '',
      user_code: '',
      verification_uri: '',
      expires_in: 0,
      interval: 0,
    }

    const action: ActionInterface = {
      type: Actions.CLEAR_DATA,
      payload: {} as any,
    }

    expect(userReducer(initialState, action)).toEqual(expectedState)
  })
})
