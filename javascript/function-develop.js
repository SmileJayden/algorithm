class Queue {
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
}

function solution(progresses, speeds) {
  const restDays = progresses.map((progress, idx) => {
    const speed = speeds[idx];
    return Math.ceil((100 - progress) / speed);
  });

  const queue = new Queue(restDays);
  const answer = [];

  let answerIdx = -1;
  let bottleNeck = 0;

  while (queue.length > 0) {
    const elem = queue.dequeue();
    if (elem > bottleNeck) {
      bottleNeck = elem;
      answer.push(0);
      answerIdx++;
    }
    answer[answerIdx] += 1;
  }

  return answer;
}

const progresses1 = [93, 30, 55];
const speeds1 = [1, 30, 5];
const expected1 = [2, 1];

console.log('myanswer: ', solution(progresses1, speeds1));
console.log('expected: ', expected1);

const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds2 = [1, 1, 1, 1, 1, 1];
const expected2 = [1, 3, 2];

console.log('myanswer: ', solution(progresses2, speeds2));
console.log('expected: ', expected2);
