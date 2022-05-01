import React, { FC } from 'react';
import { IUser } from '../../types/user';
import { UserItem } from './UserItem';

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem {...user} key={user.id} />
      ))}
    </div>
  );
};
