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
  const classNames = cx('mono-ui-badge', {
    'mono-ui-badge--default': appearance === 'default',
    'mono-ui-badge--outline': appearance === 'outline',
    'mono-ui-badge--light': appearance === 'light',
    'mono-ui-badge--tiny': tiny,
  });

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
