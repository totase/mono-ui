import { HTMLAttributes } from 'react';
import cx from 'clsx';

import '../styles.css';
import { Body } from '../../Typography';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

const ListItem = ({ title, className, children, ...rest }: ListItemProps) => {
  const classNames = cx('mono-ui-list__item', className);

  return (
    <li className={classNames} {...rest}>
      {title && <Body weight="bold">{title}</Body>}

      {children}
    </li>
  );
};

export default ListItem;
