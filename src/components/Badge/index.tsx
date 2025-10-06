import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Appearance, Size } from '../../types';

import './styles.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  /**
   * Set the component appearance
   *
   * @type 'default' | 'light' | 'outline'
   */
  appearance?: Appearance;
  /**
   * Set the component size
   *
   * @type 'small' | 'regular'
   */
  size?: Exclude<Size, 'large'>;
}

/**
 * Stylized label component used to display status, metadata, or categories.
 */
const Badge = ({ children, className, size = 'regular', appearance = 'default', ...rest }: BadgeProps) => {
  const classNames = cx('mono-ui-badge', `mono-ui-badge--${appearance}`, `mono-ui-badge--${size}`, className);

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
