import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useUserFetch } from '../hooks/useUserFetch'

type DetailParams = {
  id: string
}

export const UserDetailPage = () => {
  const { id } = useParams<DetailParams>()
  const { user, isLoading } = useUserFetch(id)

  if (isLoading) {
    return <h1>Загрузка...</h1>
  }
  return (
    <div className="user-item">
      <h1>Профиль</h1>
      <div className="user-item__info">
        {user?.id}. {user?.name}, ник {user?.username}
      </div>
      <hr />
      <h2>Информация о местоположении</h2>
      <div className="user-item__info">
        Город {user?.address.city}, адрес {user?.address.street}
      </div>
      <hr />
      <h2>Информация о компании</h2>
      <div className="user-item__info">
        Компания {user?.company.name}, {user?.company.bs}
      </div>
      <Link to="/users">К списку</Link>
    </div>
  )
}
