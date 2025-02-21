import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Typography } from '..';

import './styles.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  id: string;
  label: string;
  description?: string;
}

const Radio = ({ id, label, disabled, description, ...rest }: RadioProps) => {
  const classNames = cx('mono-ui__radio', {
    'mono-ui__radio--disabled': disabled,
  });

  return (
    <div className="mono-ui__radio__container">
      <span className={classNames} tabIndex={0}>
        <input
          id={id}
          type="radio"
          disabled={disabled}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
        />
      </span>

      <label className="mono-ui__radio__label" htmlFor={id}>
        {label}

        {description && (
          <Typography id={`${id}-description`} as="span">
            {description}
          </Typography>
        )}
      </label>
    </div>
  );
};

export default Radio;
