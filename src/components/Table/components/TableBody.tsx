import { HTMLAttributes } from 'react';
import cx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = ({ className, ...rest }: TableBodyProps) => {
  const classNames = cx('mono-ui-table__body', className);

  return <tbody className={classNames} {...rest} />;
};

export default TableBody;
