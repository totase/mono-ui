import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Label } from '..';

import './styles.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  id: string;
  label: string;
  description?: string;
}

const Radio = ({ id, label, disabled, className, description, ...rest }: RadioProps) => {
  const classNames = cx('mono-ui-radio', className, {
    'mono-ui-radio--disabled': disabled,
  });

  return (
    <div className="mono-ui-radio__container">
      <span className={classNames} tabIndex={0}>
        <input
          id={id}
          type="radio"
          disabled={disabled}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
        />
      </span>

      <Label id={id} description={description}>
        {label}
      </Label>
    </div>
  );
};

export default Radio;
