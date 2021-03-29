function solution(n, lost, reserve) {
  const filterCb = (findCondition) => {
    return (x) => {
      const y = reserve.find((y) => findCondition(x, y));
      if (y === undefined) return true;
      reserve.splice(reserve.indexOf(y), 1);
    };
  };

  return (
    n -
    lost
      .filter(filterCb((x, y) => x === y))
      .filter(filterCb((x, y) => Math.abs(x - y) <= 1)).length
  );
}

const n1 = 5;
const lost1 = [2, 4];
const reserve1 = [1, 3, 5];
const expected1 = 5;

console.log('myanswer: ', solution(n1, lost1, reserve1));
console.log('expected: ', expected1);

const n2 = 5;
const lost2 = [2, 4];
const reserve2 = [3];
const expected2 = 4;

console.log('myanswer: ', solution(n2, lost2, reserve2));
console.log('expected: ', expected2);

const n3 = 3;
const lost3 = [3];
const reserve3 = [1];
const expected3 = 2;

console.log('myanswer: ', solution(n3, lost3, reserve3));
console.log('expected: ', expected3);

const n4 = 7;
const lost4 = [2, 3, 4];
const reserve4 = [1, 2, 3, 6];
const expected4 = 6;

console.log('myanswer: ', solution(n4, lost4, reserve4));
console.log('expected: ', expected4);
