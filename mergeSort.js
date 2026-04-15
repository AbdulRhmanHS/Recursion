function mergeSort(arr) {
  const size = arr.length;
  let divisionArray = [];
  let merged = [];

  // Dividing
  if (size <= 1) return arr;
  if (size % 2 === 0) {
    divisionArray.push(arr.slice(0, size / 2), arr.slice(size / 2, size));
    divisionArray = divisionArray.map((division) => mergeSort(division));
  } else {
    divisionArray.push(
      arr.slice(0, (size + 1) / 2),
      arr.slice((size + 1) / 2, size),
    );
    divisionArray = divisionArray.map((division) => mergeSort(division));
  }

  // Merging
  let i = 0;
  let j = 0;
  while (i < divisionArray[0].length && j < divisionArray[1].length) {
    if (divisionArray[0][i] <= divisionArray[1][j]) {
      merged.push(divisionArray[0][i++]);
    } else {
      merged.push(divisionArray[1][j++]);
    }
  }
  // Append remaining elements
  return merged
    .concat(divisionArray[0].slice(i))
    .concat(divisionArray[1].slice(j));
}

module.exports = { mergeSort };
