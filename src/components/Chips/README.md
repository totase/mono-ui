# Chips

Component for displaying interactable chips.

## Usage

```tsx
import { Chips } from '@totase/mono-ui';

function Component() {
  return (
    <Chips>
      <Chips.Toggle selected={selected.includes(option)} onClick={...}>
        Option 1
      </Chips.Toggle>
      <Chips.Toggle selected={selected.includes(option)} onClick={...}>
        Option 2
      </Chips.Toggle>
      <Chips.Toggle selected={selected.includes(option)} onClick={...}>
        Option 3
      </Chips.Toggle>
    </Chips>
  );
}
```
