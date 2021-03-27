// 모든 선수가 연결되어있는지 확인해야함.
// O(V^3) 을 피해갈 수 없음
// FloydWarshall 이용

// Time Complexity of Dijkstra’s Algorithm: O(E log V)
// Time Complexity of Floyd Warshall: O(V3)

class FloydWarshall {
  matrix = [];

  constructor(n) {
    this.matrix = [];
    for (let i = 0; i < n; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < n; j++) {
        this.matrix[i][j] = null;
      }
    }
  }
  setValue(col, row, value) {
    this.matrix[col][row] = value;
  }
  getValue(col, row) {
    return this.matrix[col][row];
  }
}

function solution(n, edge) {
  const floydWarshall = new FloydWarshall(n);

  edge.forEach((e) => {
    floydWarshall.setValue(e[0] - 1, e[1] - 1, true);
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 서로의 승패에 대해 직접적으로 알거나, k 선수를 통해서 알 수 있으면 true
        floydWarshall.setValue(
          i,
          j,
          floydWarshall.getValue(i, j) ||
            (floydWarshall.getValue(i, k) && floydWarshall.getValue(k, j))
        );
      }
    }
  }

  let ans = n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (!floydWarshall.getValue(i, j) && !floydWarshall.getValue(j, i)) {
        ans--;
        break;
      }
    }
  }

  return ans;
}

const n1 = 5;
const edge1 = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];

const expected1 = 2;

console.log('myanswer: ', solution(n1, edge1));
console.log('expected: ', expected1);
