import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/user';
import axios from 'axios';
import { List } from '../components/List';
import { UserItem } from '../components/Users/UserItem';

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const fetchUsers = async () => {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <List items={users} renderItem={(user: IUser) => <UserItem {...user} key={user.id} />} />
    </div>
  );
};
