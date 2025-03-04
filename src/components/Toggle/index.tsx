import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Label } from '..';

import './styles.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  id: string;
  label: string;
  description?: string;
}

const Toggle = ({ id, label, disabled, description, ...rest }: ToggleProps) => {
  const classNames = cx('mono-ui-toggle', {
    'mono-ui-toggle--disabled': disabled,
  });

  return (
    <div className="mono-ui-toggle__container">
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

      <Label id={id} label={label} description={description} />
    </div>
  );
};

export default Toggle;
