import type { Meta } from '@storybook/react';

import { Body, Flex } from '../../components';

import './styles.css';

const meta = {
  title: 'Foundations/Colors',
} satisfies Meta;

export default meta;

export const Colors = () => {
  return (
    <Flex direction="column" gap="md">
      <div className="color-block__container">
        <Body size="sm" weight="bold">
          Name
        </Body>
        <Body size="sm" weight="bold">
          Value
        </Body>
      </div>
      <div className="color-block__container">
        <Body size="sm">--mono-ui--color-white</Body>
        <div className="color-block color-block--white" />
      </div>
      <div className="color-block__container">
        <Body size="sm">--mono-ui--color-black</Body>
        <div className="color-block color-block--black" />
      </div>
      <div className="color-block__container">
        <Body size="sm">--mono-ui--color-100</Body>
        <div className="color-block color-block--100" />
      </div>
      <div className="color-block__container">
        <Body size="sm">--mono-ui--color-200</Body>
        <div className="color-block color-block--200" />
      </div>
      <div className="color-block__container">
        <Body size="sm">--mono-ui--color-300</Body>
        <div className="color-block color-block--300" />
      </div>
      <div className="color-block__container">
        <Body size="sm">--mono-ui--color-400</Body>
        <div className="color-block color-block--400" />
      </div>
      <div className="color-block__container">
        <Body size="sm">--mono-ui--color-500</Body>
        <div className="color-block color-block--500" />
      </div>
    </Flex>
  );
};
