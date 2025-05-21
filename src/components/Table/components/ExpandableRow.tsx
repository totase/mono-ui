import { MouseEvent, useState } from 'react';
import cx from 'clsx';

import Arrow from '../../Arrow';
import Button from '../../Button';
import TableRow, { TableRowProps } from './TableRow';
import TableCell from './TableCell';

export interface ExpandableRowProps extends TableRowProps {
  disabled?: boolean;
  initialOpen?: boolean;
  content: string;
}

const ExpandableRow = ({ disabled, initialOpen, content, className, children, ...rest }: ExpandableRowProps) => {
  const [open, setOpen] = useState(initialOpen);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (disabled) return;

    setOpen(!open);
  };

  const classNames = cx('mono-ui-table__expandable-row', className, {
    'mono-ui-table__expandable-row--open': open,
  });

  return (
    <>
      <TableRow className={classNames} {...rest}>
        {children}
        <TableCell>
          <Button
            onClick={handleClick}
            aria-expanded={open}
            aria-label="Toggle expandable"
            disabled={disabled}
            appearance="flat"
          >
            <Arrow direction={open ? 'up' : 'down'} title="Toggle expandable" animated />
          </Button>
        </TableCell>
      </TableRow>
      <tr aria-hidden={!open} className="mono-ui-table__expandable-row__content">
        <TableCell colSpan={999}>{content}</TableCell>
      </tr>
    </>
  );
};

export default ExpandableRow;
