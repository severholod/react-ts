import React, { FC, useEffect } from 'react'
import { IUser } from '../types/user'
import { List } from '../components/List'
import { UserItem } from '../components/Users/UserItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

export const UsersPage: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user)
  const { fetchUsers } = useActions()

  useEffect(() => {
    !users.length && fetchUsers()
  }, [users])

  return (
    <div>
      {loading && <h1>Загрузка...</h1>}
      <List items={users} renderItem={(user: IUser) => <UserItem {...user} key={user.id} />} />
      {error && <h1>{error}</h1>}
    </div>
  )
}
