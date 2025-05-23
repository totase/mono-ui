# Accordion

Component to show information in an expandable panel.

## Usage

```tsx
import { Accordion } from '@totase/mono-ui';

function Component() {
  return (
    <Accordion {...props}>
      <Accordion.Header>Accordion header</Accordion.Header>
      <Accordion.Content>Expandable content</Accordion.Content>
    </Accordion>
  );
}
```

## Props

### Accordion

| Name          | Type        | Default | Description                                                |
| ------------- | ----------- | ------- | ---------------------------------------------------------- |
| `initialOpen` | `boolean`   | `false` | Sets whether the accordion is expanded when first rendered |
| `children`    | `ReactNode` |         |                                                            |
| `className`   | `string`    |         |                                                            |

### AccordionHeader

| Name        | Type        | Default | Description                                         |
| ----------- | ----------- | ------- | --------------------------------------------------- |
| `onClick`   | `function`  | `false` | Optional function to call when accordion is toggled |
| `children`  | `ReactNode` |         |                                                     |
| `className` | `string`    |         |                                                     |

### AccordionContent

| Name        | Type        | Default | Description |
| ----------- | ----------- | ------- | ----------- |
| `children`  | `ReactNode` |         |             |
| `className` | `string`    |         |             |
