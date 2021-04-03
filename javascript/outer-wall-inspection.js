const permutations = (arr) => {
  if (arr.length <= 2)
    return arr.length === 2 ? [arr, [arr[1], arr[0]]] : [arr];
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
          item,
          ...val,
        ])
      ),
    []
  );
};

function solution(n, weak, dist) {
  const weakList = [[...weak]];
  for (let i = 1; i < weak.length; i++) {
    const previousWeak = [...weakList[i - 1]];
    const firstOne = previousWeak.shift();

    weakList.push([...previousWeak, firstOne + n]);
  }

  let ans = Infinity;

  for (let i = 1; i < dist.length + 1; i++) {
    const friendsPermutations = permutations(
      [...dist]
        .sort((x, y) => (x >= y ? 1 : -1))
        .reverse()
        .slice(0, i)
    );

    friendsPermutations.forEach((friends) => {
      weakList.forEach((weak) => {
        const restWeak = [...weak];

        for (let friend of friends) {
          let w = restWeak.shift();
          if (w === undefined) break;

          while (friend > 0) {
            friend -= restWeak[0] - w;

            if (friend < 0) {
              restWeak.unshift(w);
            }

            w = restWeak.shift();
          }
        }

        if (restWeak.length === 0) ans = Math.min(i, ans);
      });
    });
  }

  return ans === Infinity ? -1 : ans;
}

const n1 = 12;
const weak1 = [1, 5, 6, 10];
const dist1 = [1, 2, 3, 4];
const expected1 = 2;

console.log('myanswer: ', solution(n1, weak1, dist1));
console.log('expected: ', expected1);

const n2 = 12;
const weak2 = [1, 3, 4, 9, 10];
const dist2 = [3, 5, 7];
const expected2 = 1;

console.log('myanswer: ', solution(n2, weak2, dist2));
console.log('expected: ', expected2);

const n3 = 200;
const weak3 = [0, 100];
const dist3 = [1, 1];
const expected3 = 2;

console.log('myanswer: ', solution(n3, weak3, dist3));
console.log('expected: ', expected3);

const n4 = 12;
const weak4 = [0, 10];
const dist4 = [1, 2];
const expected4 = 1;

console.log('myanswer: ', solution(n4, weak4, dist4));
console.log('expected: ', expected4);

const n5 = 200;
const weak5 = [0, 10, 50, 80, 120, 160];
const dist5 = [1, 10, 5, 40, 30];
const expected5 = 3;

console.log('myanswer: ', solution(n5, weak5, dist5));
console.log('expected: ', expected5);
