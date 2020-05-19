import { topKFrequent } from '../src';

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

test('returns array of frequent integers', () => {
  const nums = [1, 1, 1, 2, 2, 3];
  const k = 2;
  const result = topKFrequent(nums, k);

  expect(result).toHaveLength(2);
  expect(result).toContain(1);
  expect(result).toContain(2);
});

test('returns the same array when array contains only one integer', () => {
  const nums = [2];
  const k = 1;
  const result = topKFrequent(nums, k);

  expect(result).toHaveLength(1);
  expect(result).toContain(2);
});

test('returns the most frequent when array contains negative integers', () => {
  const nums = [-2, -2];
  const k = 1;
  const result = topKFrequent(nums, k);

  expect(result).toHaveLength(1);
  expect(result).toContain(-2);
});
