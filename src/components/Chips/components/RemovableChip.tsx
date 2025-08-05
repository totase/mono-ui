import { ButtonHTMLAttributes } from 'react';
import cx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RemovableChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const RemovableChip = ({ className, children, ...rest }: RemovableChipProps) => {
  const classNames = cx('mono-ui-chips__chip', 'mono-ui-chips__removable-chip', className);

  return (
    <li>
      <button {...rest} className={classNames} aria-label={`Remove ${children}`}>
        {children}
        <span>&#10005;</span>
      </button>
    </li>
  );
};

export default RemovableChip;
