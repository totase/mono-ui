import { HTMLAttributes } from 'react';
import { makeTabButtonId, makeTabPanelId } from '../utils';

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  active: boolean;
}

const TabPanel = ({ active, value, children, ...rest }: TabPanelProps) => {
  const id = makeTabPanelId(value);
  const labelledBy = makeTabButtonId(value);

  return (
    <div {...rest} id={id} hidden={!active} role="tabpanel" aria-labelledby={labelledBy}>
      {children}
    </div>
  );
};

export default TabPanel;
