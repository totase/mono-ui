import { KeyboardEvent, useCallback } from 'react';

function keyWasPressed({ key, keys, e }: { key?: string; keys?: string[]; e: KeyboardEvent }) {
  return keys?.includes(e.key) ?? e.key === key;
}

/**
 * Returns a callback function to handle key down events for specified keys.
 *
 * @param action - The function to be executed when the specified keys are pressed.
 * @param keys - An optional array of keys to trigger the action.
 * @param key - The default key to trigger the action (defaults to "Enter").
 *
 * @returns A callback function to handle key down events.
 */
const useKeyDown = ({
  action,
  keys,
  key = 'Enter',
}: {
  action: (e: KeyboardEvent) => void;
  keys?: string[];
  key?: string;
}) => {
  /**
   * Handles key down events and executes the `action` when the specified key(s) are pressed.
   *
   * @param e - The keyboard event object.
   */
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!keyWasPressed({ key, keys, e })) return;

      action(e);
    },

    [action, key, keys],
  );

  return onKeyDown;
};

export default useKeyDown;
