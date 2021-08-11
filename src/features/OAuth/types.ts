export interface GithubAuthInterface {
  device_code: string
  user_code: string
  verification_uri: string
  expires_in: number
  interval: number
}

export enum Actions {
  ADD_USER = 'ADD_USER',
  CLEAR_DATA = 'CLEAR_DATA',
}

export interface ActionInterface {
  type: Actions
  payload: GithubAuthInterface
}
