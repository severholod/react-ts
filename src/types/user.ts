export interface IUserAddress {
  street: string
  city: string
  zipcode: string
}
export interface IUserCompany {
  name: string
  bs: string
}

export interface IUser {
  id: number
  name: string
  email: string
  address: IUserAddress
}
export interface IUserDetail extends IUser {
  username: string
  company: IUserCompany
}

export interface UserState {
  users: IUser[]
  loading: boolean
  error: null | string
}
export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
export interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS
}
export interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: IUser[]
}
export interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction
