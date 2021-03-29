function solution(name) {
  const nameChars = name.split('');

  const changeNameCount = nameChars.reduce((a, e) => {
    const diff = e.charCodeAt(0) - 'A'.charCodeAt(0);
    return a + Math.min(diff, 26 - diff);
  }, 0);

  const changeTargetIndices = nameChars.reduce((a, e, i) => {
    if (e === 'A') return a;
    return [...a, i];
  }, []);

  const nameLength = name.length;
  let movingCount = 0;
  let currIdx = 0;

  while (changeTargetIndices.length > 0) {
    const arr = changeTargetIndices.map((charIndex) => {
      return {
        distance: Math.min(
          Math.abs(charIndex - currIdx),
          Math.abs(nameLength - Math.abs(charIndex - currIdx))
        ),
        charIndex,
      };
    });

    const minDistance = Math.min(...arr.map((d) => d.distance));
    const obj = arr.find((x) => x.distance === minDistance);
    const targetIdx = obj.charIndex;
    movingCount += obj.distance;

    changeTargetIndices.splice(changeTargetIndices.indexOf(targetIdx), 1);
    currIdx = targetIdx;
  }

  return changeNameCount + movingCount;
}

const name1 = 'JEROEN';
const expected1 = 56;

console.log('myanswer: ', solution(name1));
console.log('expected: ', expected1);

const name2 = 'JAN';
const expected2 = 23;

console.log('myanswer: ', solution(name2));
console.log('expected: ', expected2);
