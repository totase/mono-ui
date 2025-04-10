import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Appearance } from '@/types';

import './styles.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  appearance?: Appearance;
}

const Badge = ({ children, className, appearance = 'default', ...rest }: BadgeProps) => {
  const classNames = cx('mono-ui-badge', `mono-ui-badge--${appearance}`, className);

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
