import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { makeTabButtonId, makeTabPanelId } from '../utils';

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  active: boolean;
}

const TabPanel = ({ active, value, className, children, ...rest }: TabPanelProps) => {
  const id = makeTabPanelId(value);
  const labelledBy = makeTabButtonId(value);

  const classNames = cx('mono-ui-tabs__tab-panel', className);

  return (
    <div {...rest} id={id} hidden={!active} role="tabpanel" className={classNames} aria-labelledby={labelledBy}>
      {children}
    </div>
  );
};

export default TabPanel;
