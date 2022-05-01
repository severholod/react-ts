import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardVariant } from '../components/Card/Card';

export const CardPage: FC = () => {
  const navigate = useNavigate();
  return (
    <Card
      width="400px"
      height="400px"
      variant={CardVariant.outlined}
      onClick={() => console.log('CARD')}
    >
      <h1>CardTitle</h1>
      <button onClick={() => navigate('/users')}>Click me!</button>
    </Card>
  );
};
