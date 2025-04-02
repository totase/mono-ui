import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Appearance, Size } from '@/types';

import './styles.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  size?: Size;
  appearance?: Appearance;
}

const Badge = ({ children, className, appearance = 'default', size = 'md', ...rest }: BadgeProps) => {
  const classNames = cx('mono-ui-badge', `mono-ui-badge--${size}`, `mono-ui-badge--${appearance}`, className);

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
