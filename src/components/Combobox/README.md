# Combobox

A combined text input and dropdown that lets users search and select options from a list.

## Usage

```tsx
import { Combobox } from '@totase/mono-ui';

function Component() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return <Combobox id="disabled-combobox" label="Combobox" options={options} />;
}
```
