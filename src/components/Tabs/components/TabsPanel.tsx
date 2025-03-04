import { HTMLAttributes } from 'react';
import { makeTabButtonId } from '../utils';

export interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  active: boolean;
}

const TabsPanel = ({ active, value, children, ...rest }: TabsPanelProps) => {
  const labelledBy = makeTabButtonId(value);

  return (
    <div
      {...rest}
      hidden={!active}
      tabIndex={0}
      data-state={active ? 'active' : 'inactive'}
      role="tabpanel"
      aria-labelledby={labelledBy}
    >
      {children}
    </div>
  );
};

export default TabsPanel;
