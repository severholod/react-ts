import React, { FC } from 'react';
import { IUser } from '../../types/user';

export const UserItem: FC<IUser> = ({ name, address, id, email }) => {
  return (
    <div key={id} style={{ marginBottom: '15px' }}>
      {id}. {name}, город {address.city}, адрес {address.street}
    </div>
  );
};
