# Grid

Layout component used to wrap content in grid styling.

## Usage

```tsx
import { Grid } from '@totase/mono-ui';

function Component() {
  return (
    <Grid columns={'repeat(2, minmax(0, 1fr))'} gap="md">
      <div>Box</div>
      <div>Box</div>
    </Grid>
  );
}
```
