import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { Label } from '../Typography';

import './styles.css';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  description?: string;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
}

const Textarea = ({ id, label, description, className, disabled, readOnly, rows = 3, ...rest }: TextareaProps) => {
  const classNames = cx('mono-ui-textarea', className, {
    'mono-ui-textarea--disabled': disabled,
    'mono-ui-textarea--readOnly': readOnly,
  });

  return (
    <div className="mono-ui-textarea__container">
      <Label id={id} disabled={disabled} description={description}>
        {label}
      </Label>
      <textarea
        id={id}
        className={classNames}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        aria-describedby={description ? `${id}-description` : undefined}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
