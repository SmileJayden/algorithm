function solution(nums) {
  const count = nums.length / 2;
  const numberOf = new Set(nums).size;
  return Math.min(count, numberOf);
}

console.log(solution([3, 3, 3, 2, 2, 4]));
