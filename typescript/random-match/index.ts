import { DONE_LIST, groupEveryCouple, LIST, shuffle } from "./constants";

function diceRole() {
  while (true) {
    const shuffled = groupEveryCouple(shuffle(LIST));

    let dice = false;

    for (const done of DONE_LIST) {
      const result = done.some((elem) => {
        const [A, B] = elem;

        return shuffled.some((x) => {
          return x.includes(A) && x.includes(B);
        });
      });

      if (result) {
        dice = true;
        break;
      }
    }

    if (dice) {
      continue;
    }

    return shuffled;
  }
}

console.log(diceRole());
