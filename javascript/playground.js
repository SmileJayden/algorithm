function solution(numbers) {
  const set = new Set();
  const length = numbers.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  function compareNumbers(a, b) {
    return a - b;
  }
  const result = [...set];
  result.sort(compareNumbers);

  return result;
}

const result = solution([5, 0, 2, 7]);

console.log('result', result);
