const directionMap = new Map([
  [0, [0, 1]],
  [1, [1, 1]],
  [2, [1, 0]],
  [3, [1, -1]],
  [4, [0, -1]],
  [5, [-1, -1]],
  [6, [-1, 0]],
  [7, [-1, 1]],
]);

function generateVertexId(x, y) {
  return `vertex(${x},${y})`;
}

function generateEdgeId(x1, y1, x2, y2) {
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);

  return `edge(${minX},${minY})-(${maxX},${maxY})`;
}

function solution(arrows) {
  const visitedVertex = {};
  const visitedEdge = {};

  let answer = 0;
  let currX = 0;
  let currY = 0;

  visitedVertex[generateVertexId(currX, currY)] = true;
  arrows.forEach((arrow) => {
    // execute twice for ((0,0), (1,1), (1,0), (0,1)) cross line case
    for (let i = 0; i < 2; i++) {
      const dir = directionMap.get(arrow);

      const nextX = currX + dir[0];
      const nextY = currY + dir[1];
      const nextVertexId = generateVertexId(nextX, nextY);

      const edgeId = generateEdgeId(currX, currY, nextX, nextY);

      if (!visitedEdge[edgeId] && visitedVertex[nextVertexId]) {
        answer++;
      }

      visitedVertex[nextVertexId] = true;
      visitedEdge[edgeId] = true;

      currX = nextX;
      currY = nextY;
    }
  });

  return answer;
}

const arrows = [6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0];

const expected1 = 3;

console.log('myanswer: ', solution(arrows));
console.log('expected: ', expected1);
