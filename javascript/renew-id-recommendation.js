function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
}

const newId1 = '...!@BaT#*..y.abcdefghijklm';
const expected1 = 'bat.y.abcdefghi';

console.log('myanswer: ', solution(newId1));
console.log('expected: ', expected1);

const newId2 = 'z-+.^.';
const expected2 = 'z--';
console.log('myanswer: ', solution(newId2));
console.log('expected: ', expected2);

const newId3 = '=.=';
const expected3 = 'aaa';

console.log('myanswer: ', solution(newId3));
console.log('expected: ', expected3);

const newId4 = '123_.def';
const expected4 = '123_.def';

console.log('myanswer: ', solution(newId4));
console.log('expected: ', expected4);

const newId5 = 'abcdefghijklmn.p';
const expected5 = 'abcdefghijklmn';

console.log('myanswer: ', solution(newId5));
console.log('expected: ', expected5);
