import { LabelHTMLAttributes } from 'react';
import cx from 'clsx';

import Body from './Body';

import '../styles.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string;
  children: string;
  description?: string;
  disabled?: boolean;
}

const Label = ({ id, children, className, description, disabled, ...rest }: LabelProps) => {
  const classNames = cx('mono-ui-label', className, {
    'mono-ui-label--disabled': disabled,
  });

  return (
    <label className={classNames} htmlFor={id} {...rest}>
      {children}

      {description && (
        <Body id={`${id}-description`} color="light" size="sm" as="span">
          {description}
        </Body>
      )}
    </label>
  );
};

export default Label;
