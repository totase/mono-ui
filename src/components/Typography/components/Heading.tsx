import { ElementType, HTMLAttributes } from 'react';
import cx from 'clsx';

import { Weight } from '@/types';

export interface HeadingProps<T extends ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
  extends HTMLAttributes<HTMLHeadingElement> {
  light?: boolean;
  weight?: Weight;
  as?: T;
}

const Heading = ({ children, light, weight = 'bold', as: Component = 'h1', ...rest }: HeadingProps) => {
  const classNames = cx('mono-ui-typography', `mono-ui-typography--${weight}`, {
    'mono-ui-typography--light': light,
  });

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

export default Heading;
