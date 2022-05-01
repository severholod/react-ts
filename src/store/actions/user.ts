import axios from 'axios'
import { Dispatch } from 'redux'
import {
  FetchUserAction,
  FetchUserErrorAction,
  FetchUserSuccessAction,
  IUser,
  UserAction,
  UserActionTypes,
} from '../../types/user'

const fetchStartAction = (): FetchUserAction => ({
  type: UserActionTypes.FETCH_USERS,
})
const fetchSuccessAction = (payload: IUser[]): FetchUserSuccessAction => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload,
})
const fetchErrorAction = (payload: string): FetchUserErrorAction => ({
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload,
})

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(fetchStartAction())
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      dispatch(fetchSuccessAction(res.data))
    } catch (e) {
      dispatch(fetchErrorAction('Ошибка при загрузке данных'))
    }
  }
}
