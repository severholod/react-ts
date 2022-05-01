import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import './style.sass';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width: string;
  height: string;
  variant?: CardVariant;
  onClick: () => void;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick();
  };
  return (
    <div style={{ width, height }} className={cx('Card', variant)} onClick={clickHandler} draggable>
      {children}
    </div>
  );
};
