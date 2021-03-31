function rotation(matrix) {
  return matrix[0].map((_, index) => matrix.map((row) => row[index]).reverse());
}

function solution(key, lock) {
  const keyLength = key.length;
  const lockLength = lock.length;
  const key1 = [...key];
  const key2 = rotation(key1);
  const key3 = rotation(key2);
  const key4 = rotation(key3);
  const keys = [key1, key2, key3, key4];

  const zeroPaddedLockLength = lockLength + 2 * (keyLength - 1);
  const zeroPaddedLock = Array(zeroPaddedLockLength)
    .fill(null)
    .map(() => Array(zeroPaddedLockLength).fill(0));

  for (let i = 0; i < lockLength; i++) {
    for (let j = 0; j < lockLength; j++) {
      zeroPaddedLock[i + lockLength - 1][j + lockLength - 1] = lock[i][j];
    }
  }

  const isUnLock = (keySet, keyPosX, keyPosY) => {
    const matrixCopy = [...zeroPaddedLock.map((row) => [...row])];
    for (let i = 0; i < keyLength; i++) {
      for (let j = 0; j < keyLength; j++) {
        matrixCopy[keyPosX + i][keyPosY + j] += keySet[i][j];
      }
    }
    for (let i = 0; i < lockLength; i++) {
      for (let j = 0; j < lockLength; j++) {
        if (matrixCopy[keyLength - 1 + i][keyLength - 1 + j] !== 1) {
          return false;
        }
      }
    }

    return true;
  };

  for (let keyIdx = 0; keyIdx < keys.length; keyIdx++) {
    for (let i = 0; i < keyLength + lockLength - 1; i++) {
      for (let j = 0; j < keyLength + lockLength - 1; j++) {
        if (isUnLock(keys[keyIdx], i, j)) return true;
      }
    }
  }

  return false;
}

const key1 = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock1 = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const expected1 = true;

console.log('myanswer: ', solution(key1, lock1));
console.log('expected: ', expected1);
