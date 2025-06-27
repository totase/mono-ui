import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import Flex from '../Flex';
import { Label } from '../Typography';

import './styles.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  id: string;
  label: string;
  description?: string;
}

const Toggle = ({ id, label, disabled, className, description, ...rest }: ToggleProps) => {
  const classNames = cx('mono-ui-toggle', className, {
    'mono-ui-toggle--disabled': disabled,
  });

  return (
    <Flex align="center" gap="sm">
      <span className={classNames} tabIndex={0}>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
        />

        <span className="mono-ui-toggle__thumb" />
      </span>

      <Label id={id} disabled={disabled} description={description}>
        {label}
      </Label>
    </Flex>
  );
};

export default Toggle;
