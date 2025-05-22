import { ElementType, HTMLAttributes } from 'react';
import cx from 'clsx';

import ListItem from './components/ListItem';

import './styles.css';

export interface ListProps<T extends ElementType = 'ul' | 'ol'>
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  listStyling?: boolean;
  as?: T;
}

const List = ({ children, className, listStyling = true, as: Component = 'ul', ...rest }: ListProps) => {
  const classNames = cx('mono-ui-list', className, {
    'mono-ui-list--ordered': Component === 'ol',
    'mono-ui-list--unordered': Component === 'ul',
    'mono-ui-list--list-styling': listStyling,
  });

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

List.Item = ListItem;

export default List;
