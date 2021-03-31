function solution(tickets) {
  let ans = ['ZZZ'];

  const dfs = (curr, hereToForePaths, restTickets) => {
    if (restTickets.length === 0) {
      ans = ans.join('') > hereToForePaths.join('') ? hereToForePaths : ans;
      return;
    }

    const availableNextPaths = restTickets.reduce((a, e) => {
      if (e[0] === curr) return [...a, e[1]];
      return a;
    }, []);

    return availableNextPaths.forEach((nextPath) => {
      const usedTicketIdx = restTickets.findIndex(
        (path) => path[0] === curr && path[1] === nextPath
      );
      return dfs(
        nextPath,
        [...hereToForePaths, nextPath],
        restTickets.filter((_, i) => usedTicketIdx !== i)
      );
    });
  };
  dfs('ICN', ['ICN'], tickets);

  return ans;
}

const tickets1 = [
  ['ICN', 'JFK'],
  ['HND', 'IAD'],
  ['JFK', 'HND'],
];
const expected1 = ['ICN', 'JFK', 'HND', 'IAD'];

console.log('myanswer: ', solution(tickets1));
console.log('expected: ', expected1);

const tickets2 = [
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];
const expected2 = ['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO'];

console.log('myanswer: ', solution(tickets2));
console.log('expected: ', expected2);

const tickets3 = [
  ['ICN', 'COO'],
  ['ICN', 'BOO'],
  ['COO', 'ICN'],
];
const expected3 = ['ICN', 'COO', 'ICN', 'BOO'];

console.log('myanswer: ', solution(tickets3));
console.log('expected: ', expected3);

const tickets4 = [
  ['ICN', 'AAA'],
  ['ICN', 'AAA'],
  ['ICN', 'AAA'],
  ['AAA', 'ICN'],
  ['AAA', 'ICN'],
];
const expected4 = ['ICN', 'AAA', 'ICN', 'AAA', 'ICN', 'AAA'];

console.log('myanswer: ', solution(tickets4));
console.log('expected: ', expected4);
