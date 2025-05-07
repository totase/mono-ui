import { describe, expect, test } from 'vitest';

import { range } from '../range';

describe('range utils suite', () => {
  test('should return the correct range', () => {
    const rangeToTest = range(1, 5);

    expect(rangeToTest).toHaveLength(5);
    expect(rangeToTest).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
