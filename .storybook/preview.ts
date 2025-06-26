import type { Preview } from '@storybook/react-vite';

import './index.css';

const preview: Preview = {
  parameters: {
    a11y: { test: 'error' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Foundations', 'Components'],
      },
    },
    layout: 'centered',
  },
};

export default preview;
