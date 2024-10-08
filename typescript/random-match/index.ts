import { DONE_LIST, groupEveryCouple, LIST, shuffle } from "./constants";

function diceRole() {
  while (true) {
    const shuffled = groupEveryCouple(shuffle(LIST));

    let shouldRedice = false;

    for (const done of DONE_LIST) {
      const hasSomePair = done.some((elem) => {
        const [A, B] = elem;

        return shuffled.some((x) => {
          return x.includes(A) && x.includes(B);
        });
      });

      if (hasSomePair) {
        shouldRedice = true;
      }
    }

    if (!shouldRedice) {
      return shuffled;
    }
  }
}

console.log(diceRole());
