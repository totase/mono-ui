import { LabelHTMLAttributes } from 'react';

import { Typography } from '..';

import './styles.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string;
  label: string;
  description?: string;
}

const Label = ({ id, label, description }: LabelProps) => {
  return (
    <label className="mono-ui__label" htmlFor={id}>
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
