class Queue {
  constructor(queueList) {
    this.queue = queueList ? [...queueList] : [];
    this.length = this.queue.length;
  }
  dequeue() {
    if (this.length > 0) {
      this.length--;
      return this.queue.pop();
    }
  }
  enqueue(value) {
    this.queue.unshift(value);
    this.length++;
  }
  // Returns the object at the beginning of the Queue without removing it.
  peek() {
    const lastValIndex = this.length - 1;
    if (lastValIndex >= 0) {
      return this.queue[lastValIndex];
    }
    return false;
  }
}

function solution(bridgeLength, weight, truckWeights) {
  const waitingTruckWeightQueue = new Queue(truckWeights.reverse());
  const onBridgeTruckTimeQueue = new Queue();

  let totalWeightOnBridge = 0;
  let time = 0;

  while (
    waitingTruckWeightQueue.length > 0 ||
    onBridgeTruckTimeQueue.length > 0
  ) {
    const onHeadTruck = onBridgeTruckTimeQueue.peek();
    if (onHeadTruck.timeToOut === time) {
      onBridgeTruckTimeQueue.dequeue();
      totalWeightOnBridge -= onHeadTruck.weight;
    }

    const onHeadWeightingTruckWeight = waitingTruckWeightQueue.peek();
    if (
      onHeadWeightingTruckWeight &&
      totalWeightOnBridge + onHeadWeightingTruckWeight <= weight
    ) {
      waitingTruckWeightQueue.dequeue();
      onBridgeTruckTimeQueue.enqueue({
        weight: onHeadWeightingTruckWeight,
        timeToOut: time + bridgeLength,
      });
      totalWeightOnBridge += onHeadWeightingTruckWeight;
    } else {
      if (onHeadTruck) time = onHeadTruck.timeToOut - 1;
    }
    time++;
  }

  return time + 1;
}

const bridgeLength1 = 2;
const weight1 = 10;
const truckWeights1 = [7, 4, 5, 6];

const expected1 = 8;

console.log('myanswer1: ', solution(bridgeLength1, weight1, truckWeights1));
console.log('expected1: ', expected1);

const bridgeLength2 = 100;
const weight2 = 100;
const truckWeights2 = [10];

const expected2 = 101;

console.log('myanswer2: ', solution(bridgeLength2, weight2, truckWeights2));
console.log('expected2: ', expected2);

const bridgeLength3 = 100;
const weight3 = 100;
const truckWeights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const expected3 = 110;

console.log('myanswer3: ', solution(bridgeLength3, weight3, truckWeights3));
console.log('expected3: ', expected3);
