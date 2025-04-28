import { RefObject, useEffect } from 'react';

/**
 * Detect clicks outside an array of specified element.
 *
 * @template T - Generic reference to the element type.
 *
 * @param refs - References to the DOM elements to which the click outside detection should be applied.
 * @param callback - A function to be called when a click outside the specified element occurs.
 *
 * @returns void
 */
const useClickOutside = <T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[],
  callback: (e?: MouseEvent) => void,
) => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (refs.some((ref) => !ref.current || ref.current.contains(target))) return;

      callback(e);
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [refs, callback]);
};

export default useClickOutside;
