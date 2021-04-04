function generateMatrix(n, m, v) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < m; j++) {
      matrix[i][j] = [...v];
    }
  }
  return matrix;
}

function solution(n, build_frame) {
  const matrix = generateMatrix(n + 1, n + 1, [0, 0]); // [기둥, 보]

  build_frame.forEach((build) => {
    const [x, y, a, b] = build;

    switch (a) {
      // 기둥
      case 0:
        switch (b) {
          // 삭제
          case 0:
            // 받치고있는 보가 위반할 경우 reject
            if (matrix[x-1]?.[y][1] === 1) {

              return

            }

            if (matrix[x][y][1] === 1) {

              return
            }

            // 받치고있는 기둥이 위반할 경우 reject
            if (matrix[x][y+1]?.[0] === 1) {

              return
            }



            break;
          // 생성
          case 1:
            // 바닥임
            if (y === 0) {
              matrix[x][y][0] = 1;
              return;
            }

            // 밑에 기둥있음
            if (matrix[x]?.[y - 1]?.[0] === 1) {
              matrix[x][y][0] = 1;
              return;
            }

            // 보의 양쪽 끝에 있음
            if (matrix[x - 1]?.[y][1] === 1 && matrix[x][y][1] === 1) {
              return;
            }

            // 보의 한쪽 끝에 있음
            if (matrix[x - 1]?.[y][1] === 1 || matrix[x][y][1] === 1) {
              matrix[x][y][0] = 1;
              return;
            }

            break;
          default:
            throw Error('wrong input');
        }

        break;
      // 보
      case 1:
        switch (b) {
          // 삭제
          case 0:
            break;
          // 생성
          case 1:
            // 한쪽에 기둥이 있음
            if (matrix[x][y - 1][0] === 1 || matrix[x + 1]?.[y - 1][0] === 1) {
              matrix[x][y][1] = 1;
              return;
            }

            // 보의 양쪽 끝에 있음
            if (matrix[x][y][1] === 1 && matrix[x + 1]?.[y][1] === 1) {
              matrix[x][y][1] = 1;
              return;
            }

            break;
          default:
            throw Error('wrong input');
        }
        break;
      default:
        throw Error('wrong input');
    }
  });

  const answer = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      for (let k = 0; k < 2; k++) {
        if (matrix[i][j][k] === 1) {
          answer.push([i, j, k]);
        }
      }
    }
  }

  return answer;
}

const n1 = 5;
const build_frame1 = [
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [2, 1, 0, 1],
  [2, 2, 1, 1],
  [5, 0, 0, 1],
  [5, 1, 0, 1],
  [4, 2, 1, 1],
  [3, 2, 1, 1],
];
const expected1 = [
  [1, 0, 0],
  [1, 1, 1],
  [2, 1, 0],
  [2, 2, 1],
  [3, 2, 1],
  [4, 2, 1],
  [5, 0, 0],
  [5, 1, 0],
];

console.log('myanswer: ', solution(n1, build_frame1));
console.log('expected: ', expected1);

const n2 = 5;
const build_frame2 = [
  [0, 0, 0, 1],
  [2, 0, 0, 1],
  [4, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 1],
  [3, 1, 1, 1],
  [2, 0, 0, 0],
  [1, 1, 1, 0],
  [2, 2, 0, 1],
];
const expected2 = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 1],
  [2, 1, 1],
  [3, 1, 1],
  [4, 0, 0],
];

console.log('myanswer: ', solution(n2, build_frame2));
console.log('expected: ', expected2);
