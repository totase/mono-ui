import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Appearance } from '@/types';

import './styles.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  tiny?: boolean;
  appearance?: Appearance;
}

const Badge = ({ children, className, appearance = 'default', tiny = false, ...rest }: BadgeProps) => {
  const classNames = cx('mono-ui-badge', className, {
    [`mono-ui-badge--${appearance}`]: appearance,
    'mono-ui-badge--tiny': tiny,
  });

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
