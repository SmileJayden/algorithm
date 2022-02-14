function zigzag(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const arr = s.split('');
  const map = Array(numRows)
    .fill(null)
    .reduce((a, _, i) => {
      return { ...a, [i]: [] };
    }, {});

  const cycle = (numRows - 1) * 2;

  arr.forEach((x, i) => {
    const num = i % cycle;

    if (map[num] != null) {
      map[num].push(x);
    } else {
      map[2 * numRows - num - 2].push(x);
    }
  });

  return Object.values(map)
    .flatMap((x) => x)
    .join('');
}

console.log(zigzag('PAYPALISHIRING', 3));
console.log(zigzag('PAYPALISHIRING', 4));
