import { ButtonHTMLAttributes } from 'react';
import cx from 'clsx';
import { makeTabButtonId, makeTabPanelId } from '../utils';

export interface TabButtonProps extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  label: string;
  value: string;
  active: boolean;
}

const TabButton = ({ label, value, active, ...rest }: TabButtonProps) => {
  const id = makeTabButtonId(value);
  const controlsId = makeTabPanelId(value);

  const classNames = cx('mono-ui-tabs__tab-button', {
    'mono-ui-tabs__tab-button--active': active,
  });

  return (
    <button {...rest} id={id} aria-controls={controlsId} className={classNames} role="tab" aria-selected={active}>
      {label}
    </button>
  );
};

export default TabButton;
