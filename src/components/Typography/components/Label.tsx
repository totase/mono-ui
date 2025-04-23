import { LabelHTMLAttributes } from 'react';
import cx from 'clsx';

import Body from './Body';

import '../styles.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string;
  children: string;
  description?: string;
}

const Label = ({ id, children, className, description, ...rest }: LabelProps) => {
  const classNames = cx('mono-ui-label', className);

  return (
    <label className={classNames} htmlFor={id} {...rest}>
      {children}

      {description && (
        <Body id={`${id}-description`} as="span" light>
          {description}
        </Body>
      )}
    </label>
  );
};

export default Label;
