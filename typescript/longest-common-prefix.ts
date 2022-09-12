function longestCommonPrefix(strs: string[]): string {
  const shortestWord = strs.reduce((a, b) => (a.length <= b.length ? a : b));

  let prefix = "";
  for (let i = 0; i < shortestWord.length; i++) {
    const char = shortestWord[i];
    if (strs.every((str) => str[i] === char)) prefix += char;
    else return prefix;
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "rocecar", "cor"]));
