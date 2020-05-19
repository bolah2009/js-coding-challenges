// Top K Frequent Elements
// Given a non-empty array of integers, return the k most frequent elements.

const priorityQueue = () => {
  let store = [];
  const isEmpty = () => store.length === 0;

  const add = item => {
    const { priority } = item;
    if (isEmpty()) {
      store = [item];
    } else {
      const isAdded = store.some((storeItem, index) => {
        if (priority >= storeItem.priority) {
          store = [...store.slice(0, index), item, ...store.slice(index)];
          return true;
        }
        return false;
      });
      if (!isAdded) {
        store = [...store, item];
      }
    }
  };

  const pop = () => {
    const { value } = store.shift();
    return value;
  };

  return { add, pop };
};

/**
 * @description A function that returns an array for k most frequent elements
 * from a given non-empty array of integers
 *
 * @example topKFrequent([1,2,1,1,3,2,2], 2);
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - Integer count of frequent numbers
 * @returns {number[]} - Array of k most frequent numbers
 */
const topKFrequent = (nums, k) => {
  if (nums.length < 2) return nums;

  const hash = {};
  const max = [];

  nums.forEach(num => {
    hash[num] = hash[num] ? [num, hash[num][1] + 1] : [num, 1];
  });

  const queue = priorityQueue();
  const hashEntries = Object.values(hash);
  hashEntries.forEach(([value, priority]) => queue.add({ value, priority }));

  let i = k;
  while (i) {
    max.push(queue.pop());

    i -= 1;
  }

  return max;
};

export default topKFrequent;
