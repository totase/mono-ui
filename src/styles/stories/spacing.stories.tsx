import type { Meta } from '@storybook/react-vite';

import { Body, Flex } from '../../components';

import './styles.css';

const meta = {
  title: 'Foundations/Spacing',
} satisfies Meta;

export default meta;

export const Spacing = () => {
  return (
    <Flex direction="column" gap="md">
      <div className="spacing-block__container">
        <Body size="sm" weight="bold">
          Name
        </Body>
        <Body size="sm" weight="bold">
          Size
        </Body>
      </div>
      <div className="spacing-block__container">
        <Body size="sm">--mono-ui--spacing-xs</Body>
        <Body size="sm">0.25rem</Body>
        <div className="spacing-block spacing-block--xs" />
      </div>
      <div className="spacing-block__container">
        <Body size="sm">--mono-ui--spacing-sm</Body>
        <Body size="sm">0.5rem</Body>
        <div className="spacing-block spacing-block--sm" />
      </div>
      <div className="spacing-block__container">
        <Body size="sm">--mono-ui--spacing-md</Body>
        <Body size="sm">0.75rem</Body>
        <div className="spacing-block spacing-block--md" />
      </div>
      <div className="spacing-block__container">
        <Body size="sm">--mono-ui--spacing-lg</Body>
        <Body size="sm">1rem</Body>
        <div className="spacing-block spacing-block--lg" />
      </div>
      <div className="spacing-block__container">
        <Body size="sm">--mono-ui--spacing-xl</Body>
        <Body size="sm">1.25rem</Body>
        <div className="spacing-block spacing-block--xl" />
      </div>
    </Flex>
  );
};
