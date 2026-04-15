const { mergeSort } = require("./mergeSort");

describe("mergeSort", () => {
  test("returns empty array for empty input", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("returns single element array unchanged", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test("sorts already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts reverse sorted array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts unsorted array with even length", () => {
    expect(mergeSort([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
  });

  test("sorts unsorted array with odd length", () => {
    expect(mergeSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });

  test("handles array with duplicate elements", () => {
    expect(mergeSort([5, 2, 8, 2, 9, 1])).toEqual([1, 2, 2, 5, 8, 9]);
  });

  test("handles array with all duplicates", () => {
    expect(mergeSort([3, 3, 3, 3])).toEqual([3, 3, 3, 3]);
  });

  test("sorts array with negative numbers", () => {
    expect(mergeSort([-5, 3, -10, 0, 8, -2])).toEqual([-10, -5, -2, 0, 3, 8]);
  });

  test("sorts array with all negative numbers", () => {
    expect(mergeSort([-3, -1, -4, -2])).toEqual([-4, -3, -2, -1]);
  });

  test("handles two element array", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });

  test("sorts large random array", () => {
    const input = [64, 34, 25, 12, 22, 11, 90, 5];
    expect(mergeSort(input)).toEqual([5, 11, 12, 22, 25, 34, 64, 90]);
  });
});
