import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vitest } from 'vitest';

import { useClickOutside } from '..';

describe('useClickOutside suite', () => {
  const setup = () => {
    const user = userEvent.setup();

    const callback = vitest.fn();
    const containerRef = { current: document.createElement('div') };

    renderHook(() => {
      useClickOutside([containerRef], callback);
    });

    expect(callback).toHaveBeenCalledTimes(0);

    return { user, containerRef, callback };
  };

  test('should call the callback when clicking outside the element', async () => {
    const { user, callback } = setup();

    await user.click(document.body);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should NOT call the callback when clicking inside the element', async () => {
    const { user, containerRef, callback } = setup();

    await user.click(containerRef.current);

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
