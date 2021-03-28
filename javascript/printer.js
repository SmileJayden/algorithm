class PrinterQueue {
  constructor(arr) {
    this.queue = arr ? [...arr] : [];
    this.length = arr ? arr.length : 0;
  }
  enqueue(value) {
    this.length++;
    this.queue.push(value);
  }
  dequeue() {
    this.length--;
    return this.queue.shift();
  }
  getMax() {
    return Math.max(...this.queue.map((x) => x.priority));
  }
}

function solution(priorities, location) {
  const printerQueue = new PrinterQueue(
    priorities.map((priority, i) => ({ priority, isTarget: i === location }))
  );

  let answer = 0;

  while (true) {
    const curr = printerQueue.dequeue();
    if (curr.priority >= printerQueue.getMax()) {
      answer++;
      if (curr.isTarget) {
        return answer;
      }
      continue;
    }
    printerQueue.enqueue(curr);
  }
}

const priorities1 = [2, 1, 3, 2];
const location1 = 2;
const expected1 = 1;

console.log('myanswer: ', solution(priorities1, location1));
console.log('expected: ', expected1);

const priorities2 = [1, 1, 9, 1, 1, 1];
const location2 = 0;
const expected2 = 5;

console.log('myanswer: ', solution(priorities2, location2));
console.log('expected: ', expected2);
