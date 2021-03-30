function solution(N, number) {
  const calc = (n1, n2) => {
    const plus = n1 + n2;
    const minus = n1 - n2;
    const multiply = n1 * n2;
    const divide = (n1 / n2) >> 0;
    return [plus, minus, multiply, divide];
  };

  const cache = new Array(9).fill(0).map((_) => new Set());
  for (let i = 1; i < 9; i++) {
    cache[i].add('1'.repeat(i) * N);
    for (let j = 1; j < i; j++) {
      for (const n1 of cache[j]) {
        for (const n2 of cache[i - j]) {
          calc(n1, n2).forEach((res) => cache[i].add(res));
        }
      }
    }
    if (cache[i].has(number)) return i;
  }
  return -1;
}

const N1 = 5;
const number1 = 12;
const expected1 = 4;

console.log('myanswer: ', solution(N1, number1));
console.log('expected: ', expected1);

const N2 = 2;
const number2 = 11;
const expected2 = 3;

console.log('myanswer: ', solution(N2, number2));
console.log('expected: ', expected2);
