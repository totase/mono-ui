import { ButtonHTMLAttributes } from 'react';
import cx from 'clsx';

export interface ToggleChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const ToggleChip = ({ children, className, selected = false, ...rest }: ToggleChipProps) => {
  const classNames = cx('mono-ui-chips__chip', 'mono-ui-chips__toggle-chip', className, {
    'mono-ui-chips__toggle-chip--selected': selected,
  });

  return (
    <li>
      <button {...rest} className={classNames} aria-pressed={selected}>
        {children}
      </button>
    </li>
  );
};

export default ToggleChip;
