import { ElementType, HTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface TypographyProps<T extends ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'>
  extends HTMLAttributes<HTMLElement> {
  light?: boolean;
  weight?: 'regular' | 'medium' | 'bold';
  tiny?: boolean;
  as?: T;
}

const Typography = ({
  children,
  className,
  light = false,
  tiny = false,
  as: Component = 'p',
  weight = Component === 'p' || Component === 'span' ? 'regular' : 'bold',
  ...rest
}: TypographyProps) => {
  const classNames = cx('mono-ui__typography', className, {
    'mono-ui__typography--light': light,
    'mono-ui__typography--regular': weight === 'regular',
    'mono-ui__typography--medium': weight === 'medium',
    'mono-ui__typography--bold': weight === 'bold',
    'mono-ui__typography--tiny': tiny,
  });

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
