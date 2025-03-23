import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Size } from '@/types';

import './styles.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: Size;
  variant?: '0' | '100' | '200' | '300' | '400' | '500';
  radius?: Size;
  panel?: boolean;
}

const Card = ({ className, children, padding, variant = '0', radius, panel = false, ...rest }: CardProps) => {
  const classNames = cx('mono-ui-card', className, {
    [`mono-ui-card--padding-${padding}`]: padding,
    [`mono-ui-card--variant-${variant}`]: variant,
    [`mono-ui-card--radius-${radius}`]: radius,
    'mono-ui-card--panel': panel,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Card;
