import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import Flex from '../Flex';
import { Label } from '../Typography';

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
    <Flex align="center" gap="sm">
      <span className={classNames}>
        <input
          id={id}
          type="radio"
          disabled={disabled}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
        />
      </span>

      <Label id={id} disabled={disabled} description={description}>
        {label}
      </Label>
    </Flex>
  );
};

export default Radio;
