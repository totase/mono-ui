import { HTMLAttributes } from 'react';
import cx from 'clsx';

import TableRow from './TableRow';

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

const TableHead = ({ children, className, ...rest }: TableHeadProps) => {
  const classNames = cx('mono-ui-table__head', className);

  return (
    <thead className={classNames} {...rest}>
      <TableRow>{children}</TableRow>
    </thead>
  );
};

export default TableHead;
