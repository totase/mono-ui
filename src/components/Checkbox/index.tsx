import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Label } from '..';

import './styles.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  id: string;
  label: string;
  description?: string;
}

const Checkbox = ({ id, label, disabled, description, ...rest }: CheckboxProps) => {
  const classNames = cx('mono-ui__checkbox', {
    'mono-ui__checkbox--disabled': disabled,
  });

  return (
    <div className="mono-ui__checkbox__container">
      <span className={classNames} tabIndex={0}>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
        />
      </span>

      <Label id={id} label={label} description={description} />
    </div>
  );
};

export default Checkbox;
