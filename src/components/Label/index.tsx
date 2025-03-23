import { LabelHTMLAttributes } from 'react';
import cx from 'clsx';

import { Typography } from '..';

import './styles.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string;
  label: string;
  description?: string;
}

const Label = ({ id, label, className, description, ...rest }: LabelProps) => {
  const classNames = cx('mono-ui-label', className);

  return (
    <label className={classNames} htmlFor={id} {...rest}>
      {label}

      {description && (
        <Typography id={`${id}-description`} as="span" light>
          {description}
        </Typography>
      )}
    </label>
  );
};

export default Label;
