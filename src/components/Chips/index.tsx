import { HTMLAttributes } from 'react';
import cx from 'clsx';

import RemovableChip from './components/RemovableChip';
import ToggleChip from './components/ToggleChip';

import './styles.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ChipsProps extends HTMLAttributes<HTMLUListElement> {}

const Chips = ({ className, children, ...rest }: ChipsProps) => {
  const classNames = cx('mono-ui-chips', className);

  return (
    <ul className={classNames} {...rest}>
      {children}
    </ul>
  );
};

Chips.Removable = RemovableChip;
Chips.Toggle = ToggleChip;

export default Chips;
