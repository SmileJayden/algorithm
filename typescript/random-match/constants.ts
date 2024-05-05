export const 유민 = "유민";
export const 청운 = "청운";
export const 현아 = "현아";
export const 시온 = "시온";
export const 재윤 = "재윤";
export const 예진 = "예진";
export const 수인 = "수인";
export const 재영 = "재영";

export const LIST: string[] = [유민, 청운, 현아, 시온, 재윤, 예진, 수인, 재영];

export const DONE_LIST = [
  [
    [재윤, 예진],
    [수인, 재영],
    [현아, 유민],
    [청운, 시온],
  ],
  [
    [수인, 예진],
    [유민, 시온],
    [현아, 재윤],
    [청운, 재영],
  ],
  [
    [재영, 시온],
    [유민, 재윤],
    [현아, 예진],
    [청운, 수인],
  ],
  [
    [재영, 재윤],
    [수인, 현아],
    [유민, 청운],
    [시온, 예진],
  ],
] as const;

export function shuffle<T extends any>(array: Array<T>) {
  const result = [...array];

  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }
  return result;
}

export function groupEveryCouple<T extends any>(arr: Array<T>) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    // Push a subarray of two elements, or whatever is left at the end of the array
    result.push(arr.slice(i, i + 2));
  }
  return result;
}
