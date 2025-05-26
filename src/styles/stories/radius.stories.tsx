import type { Meta } from '@storybook/react';

import { Body, Flex } from '../../components';

import './styles.css';

const meta = {
  title: 'Foundations/Radius',
} satisfies Meta;

export default meta;

export const Radius = () => {
  return (
    <Flex direction="column" gap="md">
      <div className="radius-story__container">
        <Body size="sm" weight="bold">
          Name
        </Body>
        <Body size="sm" weight="bold">
          Size
        </Body>
      </div>
      <div className="radius-story__container">
        <Body size="sm">--mono-ui--radius-sm</Body>
        <Body size="sm">4px</Body>
        <div className="radius-story radius-story--sm" />
      </div>
      <div className="radius-story__container">
        <Body size="sm">--mono-ui--radius-md</Body>
        <Body size="sm">8px</Body>
        <div className="radius-story radius-story--md" />
      </div>
      <div className="radius-story__container">
        <Body size="sm">--mono-ui--radius-lg</Body>
        <Body size="sm">16px</Body>
        <div className="radius-story radius-story--lg" />
      </div>
      <div className="radius-story__container">
        <Body size="sm">--mono-ui--radius-rounded</Body>
        <Body size="sm">9999px</Body>
        <div className="radius-story radius-story--rounded" />
      </div>
    </Flex>
  );
};
