import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KeyboardEvent } from 'react';
import { describe, expect, test, vitest } from 'vitest';

import useKeyDown from '../useKeyDown';

describe('useKeyDown', () => {
  const setup = () => {
    const user = userEvent.setup();

    const callback = vitest.fn();

    const { result } = renderHook(() => useKeyDown({ key: 'k', action: callback }));
    document.onkeydown = (e) => result.current(e as unknown as KeyboardEvent);

    expect(callback).toHaveBeenCalledTimes(0);

    return { user, callback };
  };

  test('should call the callback when the desired key is pressed', async () => {
    const { user, callback } = setup();

    await user.keyboard('k');

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should NOT call the callback when another key is pressed', async () => {
    const { user, callback } = setup();

    await user.keyboard('f');

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
