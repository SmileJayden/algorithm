function solution(lines) {
  const formattedLines = lines.map((line) => {
    const [date, time, duration] = line.split(' ');
    const endDate = +new Date(`${date} ${time}`);
    const startDate = endDate - 1000 * duration.slice(0, -1) + 1;
    return [startDate, endDate];
  });

  return Math.max(
    ...formattedLines.map(([, targetEndDate], i) => {
      return formattedLines
        .slice(i)
        .reduce(
          (temp, [compareStartDate]) =>
            targetEndDate + 1000 > compareStartDate ? temp + 1 : temp,
          0
        );
    })
  );
}

const lines1 = ['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'];
const expected1 = 1;

console.log('myanswer: ', solution(lines1));
console.log('expected: ', expected1);

const lines2 = ['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s'];
const expected2 = 2;

console.log('myanswer: ', solution(lines2));
console.log('expected: ', expected2);

const lines3 = [
  '2016-09-15 20:59:57.421 0.351s',
  '2016-09-15 20:59:58.233 1.181s',
  '2016-09-15 20:59:58.299 0.8s',
  '2016-09-15 20:59:58.688 1.041s',
  '2016-09-15 20:59:59.591 1.412s',
  '2016-09-15 21:00:00.464 1.466s',
  '2016-09-15 21:00:00.741 1.581s',
  '2016-09-15 21:00:00.748 2.31s',
  '2016-09-15 21:00:00.966 0.381s',
  '2016-09-15 21:00:02.066 2.62s',
];
const expected3 = 7;

console.log('myanswer: ', solution(lines3));
console.log('expected: ', expected3);
