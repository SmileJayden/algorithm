const diffCount = (str1, str2) => {
  const str2Arr = str2.split('');
  return str1.split('').reduce((a, char, i) => {
    if (str2Arr[i] !== char) a++;
    return a;
  }, 0);
};

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const countSets = Array(words.length + 1)
    .fill(null)
    .map((_) => new Set());

  for (let i = 0; i < words.length + 1; i++) {
    const set = countSets[i];

    if (i === 0) {
      set.add(begin);
      continue;
    }

    words.forEach((str1) =>
      [...countSets[i - 1]].forEach(
        (str2) => diffCount(str1, str2) === 1 && countSets[i].add(str1)
      )
    );

    if (countSets[i].has(target)) return i;
  }
}

const begin1 = 'hit';
const target1 = 'cog';
const words1 = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
const expected1 = 4;

console.log('myanswer: ', solution(begin1, target1, words1));
console.log('expected: ', expected1);

const begin2 = 'hit';
const target2 = 'cog';
const words2 = ['hot', 'dot', 'dog', 'lot', 'log'];
const expected2 = 0;

console.log('myanswer: ', solution(begin2, target2, words2));
console.log('expected: ', expected2);
