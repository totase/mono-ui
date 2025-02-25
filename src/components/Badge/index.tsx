import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Appearance } from '@/types';

import './styles.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  tiny?: boolean;
  appearance?: Appearance;
}

const Badge = ({ children, appearance = 'default', tiny = false, ...rest }: BadgeProps) => {
  const classNames = cx('mono-ui__badge', {
    'mono-ui__badge--default': appearance === 'default',
    'mono-ui__badge--outline': appearance === 'outline',
    'mono-ui__badge--light': appearance === 'light',
    'mono-ui__badge--tiny': tiny,
  });

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
