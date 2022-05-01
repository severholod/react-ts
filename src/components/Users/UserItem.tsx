import React, { FC } from 'react'
import { IUser } from '../../types/user'
import { Link } from 'react-router-dom'
import './style.sass'

export const UserItem: FC<IUser> = ({ name, address, id, email }) => {
  return (
    <div className="user-item">
      <div className="user-item__info">
        {id}. {name}, город {address.city}, адрес {address.street}
      </div>
      <Link className="user-item__link" to={`/users/${id}`}>
        Подробнее
      </Link>
    </div>
  )
}
