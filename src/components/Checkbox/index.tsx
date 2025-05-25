import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Label } from '../Typography';

import './styles.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  id: string;
  label: string;
  description?: string;
}

const Checkbox = ({ id, label, className, disabled, description, ...rest }: CheckboxProps) => {
  const classNames = cx('mono-ui-checkbox', className, {
    'mono-ui-checkbox--disabled': disabled,
  });

  return (
    <div className="mono-ui-checkbox__container">
      <span className={classNames}>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
        />
      </span>

      <Label id={id} disabled={disabled} description={description}>
        {label}
      </Label>
    </div>
  );
};

export default Checkbox;
