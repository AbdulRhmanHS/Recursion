function fibs(n) {
  let result = [];
  if (n === 0) return result;
  else {
    for (let i = 0; i < n; i++) {
      if (i >= 2) {
        result.push(result[i - 1] + result[i - 2]);
      } else if (i >= 1) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  }

  return result;
}

function fibsRec(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let previousState = fibsRec(n - 1);
  let currentState = [0, 1];

  for (let i = 0; i < previousState.length - 1; i++) {
    currentState.push(previousState[i] + previousState[i + 1]);
  }

  return currentState;
}

module.exports = { fibs, fibsRec };
