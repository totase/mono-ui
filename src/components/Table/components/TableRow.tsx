import { HTMLAttributes } from 'react';
import cx from 'clsx';

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

const TableRow = ({ className, ...rest }: TableRowProps) => {
  const classNames = cx('mono-ui-table__row', className);

  return <tr className={classNames} {...rest} />;
};

export default TableRow;
