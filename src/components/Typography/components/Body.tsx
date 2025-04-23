import { ElementType, HTMLAttributes } from 'react';
import cx from 'clsx';

import { Weight } from '@/types';

import '../styles.css';

export interface BodyProps<T extends ElementType = 'p' | 'span'>
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  light?: boolean;
  weight?: Weight;
  as?: T;
}

const Body = ({ children, light, weight = 'regular', as: Component = 'p', ...rest }: BodyProps) => {
  const classNames = cx('mono-ui-typography', `mono-ui-typography--${weight}`, {
    'mono-ui-typography--light': light,
  });

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

export default Body;
