class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }
  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex !== destination
    );
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
      (vertex) => vertex !== source
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  getAllDistances(start) {
    const queue = [start];
    const distances = { [start]: 0 };
    const visited = { [start]: true };

    while (queue.length > 0) {
      const currVertex = queue.shift();

      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          distances[neighbor] = distances[currVertex] + 1;
          visited[neighbor] = true;
        }
      });
    }

    return distances;
  }
}

function solution(n, edge) {
  const graph = new Graph();

  edge.forEach((e) => {
    graph.addEdge(e[0], e[1]);
  });

  const distances = Object.values(graph.getAllDistances(1));
  const max = Math.max(...distances);
  return distances.filter((d) => d === max).length;
}

const n1 = 6;
const edge1 = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

const expected1 = 3;

console.log('myanswer: ', solution(n1, edge1));
console.log('expected: ', expected1);
