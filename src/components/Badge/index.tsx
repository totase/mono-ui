import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Appearance, SpacingSize } from '../../types';

import './styles.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  appearance?: Appearance;
  size?: Omit<SpacingSize, 'xs' | 'xl'>;
}

const Badge = ({ children, className, size = 'md', appearance = 'default', ...rest }: BadgeProps) => {
  const classNames = cx('mono-ui-badge', `mono-ui-badge--${appearance}`, `mono-ui-badge--${size}`, className);

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
