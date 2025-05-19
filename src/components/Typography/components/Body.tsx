import { ElementType, HTMLAttributes } from 'react';
import cx from 'clsx';

import { Color, Size, Weight } from '../../../types';

import '../styles.css';

export interface BodyProps<T extends ElementType = 'p' | 'span'>
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  color?: Color;
  weight?: Weight;
  size?: Size;
  as?: T;
}

const Body = ({
  children,
  color = 'default',
  size = 'md',
  weight = 'regular',
  as: Component = 'p',
  ...rest
}: BodyProps) => {
  const classNames = cx(
    'mono-ui-typography',
    `mono-ui-typography--${weight}`,
    `mono-ui-typography--${size}`,
    `mono-ui-typography--color-${color}`,
  );

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

export default Body;
