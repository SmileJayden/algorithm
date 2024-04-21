function myFunc(input) {
  const [firstLine, ...rest] = input.split('\n');
  const [row, col] = firstLine.split(' ');
  const rowNum = Number(row);
  const colNum = Number(col);
  console.log(rowNum, colNum);
  console.log('rest', rest);
  return 3;
}

const input1 = `5 5
01100
01011
11111
01111
11111`;

const input2 = `5 5
01100
00011
11111
01111
11111`;

const input3 = `4 4
0000
0000
0000
0000`;

const input4 = `3 6
111000
101111
111111`;

console.log(myFunc(input1), 3);
console.log(myFunc(input4), 2);
