import { ElementType, HTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface TypographyProps<T extends ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'>
  extends HTMLAttributes<HTMLElement> {
  light?: boolean;
  as?: T;
}

const Typography = ({ children, className, light = false, as: Component = 'p', ...rest }: TypographyProps) => {
  const classNames = cx('mono-ui__typography', className, {
    'mono-ui__typography--light': light,
  });

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
