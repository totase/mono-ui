import { HTMLAttributes, ReactNode, useState } from 'react';
import cx from 'clsx';

import TabButton, { TabButtonProps } from './components/TabButton';
import TabPanel from './components/TabPanel';

import './styles.css';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: Omit<TabButtonProps, 'active'>[];
  panels: {
    value: string;
    children: ReactNode;
  }[];
}

const Tabs = ({ tabs, panels, className, ...rest }: TabsProps) => {
  const [selected, setSelected] = useState<string>(tabs[0].value);

  const classNames = cx('mono-ui-tabs', className);

  return (
    <div className={classNames} {...rest}>
      <div className="mono-ui-tabs__tabslist" aria-orientation="horizontal" role="tablist">
        {tabs.map(({ label, value, ...rest }) => {
          return (
            <TabButton
              key={`tab-button-${value}`}
              {...rest}
              label={label}
              value={value}
              onClick={() => setSelected(value)}
              active={selected === value}
            />
          );
        })}
      </div>

      {panels.map(({ value, ...rest }) => (
        <TabPanel key={`tab-panel-${value}`} {...rest} value={value} active={selected === value} />
      ))}
    </div>
  );
};

export default Tabs;
