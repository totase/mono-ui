import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Typography } from '..';

import './styles.css';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
}

const Radio = ({ id, label, disabled, description, readOnly, ...rest }: RadioProps) => {
  const classNames = cx('mono-ui__radio', {
    'mono-ui__radio--disabled': disabled,
    'mono-ui__radio--readOnly': readOnly,
  });

  return (
    <div className="mono-ui__radio__container">
      <span className={classNames} tabIndex={0}>
        <input
          id={id}
          type="radio"
          disabled={disabled}
          readOnly={readOnly}
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
