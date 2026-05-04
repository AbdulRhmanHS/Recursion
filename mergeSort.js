function mergeSort(arr) {
  const size = arr.length;
  let merged = [];
  const mid = Math.floor(size / 2);

  // Dividing
  if (size <= 1) return arr;

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merging
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }
  // Append remaining elements
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = { mergeSort };
