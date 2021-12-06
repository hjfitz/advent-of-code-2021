export function chunk<T = string>(arr: T[], size: number): T[][] {
  return arr.reduce((acc, cur, idx) => {
    if (idx % size === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(cur);
    return acc;
  }, [] as T[][]);
}

export interface CardNode {
  value: string;
  checked: boolean;
}

export type BingoCard = CardNode[][] & { hasWon: boolean };

// assume input length is 5
export function createBingoCard(input: string[]): BingoCard {
  return input.map((line) => {
    return line
      .split(" ")
      .filter(Boolean)
      .map((value) => {
        return {
          value: value.trim(),
          checked: false,
        } as CardNode;
      });
  }) as BingoCard;
}

// operate by ref
export function doRound(num: string, bingoCard: BingoCard): void {
  for (const row of bingoCard) {
    for (const node of row) {
      if (node.value === num) {
        node.checked = true;
      }
    }
  }
}

export function hasWin(bingoCard: BingoCard): boolean {
  const hasColumn = bingoCard.some((line) => {
    // check vertical
    return line.every((node) => node.checked);
  });

  let hasRow = false;
  for (let row = 0; row < bingoCard.length; row++) {
    const curRow = bingoCard.map((line) => line[row]);
    const hasMatch = curRow.every((node) => node.checked);
    if (hasMatch) {
      hasRow = true;
    }
  }

  return hasColumn || hasRow;
}

export function calculateWinner(card: BingoCard): number {
  return card
    .flat()
    .filter((node) => !node.checked)
    .map((node) => parseInt(node.value, 10))
    .reduce((acc, cur) => acc + cur, 0);
}

export function solution(input: Array<string>): number {
  const [nums, _, ...cards] = input;
  const bingoCards = chunk(cards.filter(Boolean), 5).map(createBingoCard);
  for (const num of nums.split(",")) {
    for (const card of bingoCards) {
      doRound(num, card);
      if (hasWin(card)) {
        const winnerVal = calculateWinner(card);
        return winnerVal * parseInt(num, 10);
      }
    }
  }
  return 0;
}

export function challenge(input: Array<string>): number {
  const [nums, _, ...cards] = input;
  const bingoCards = chunk(cards.filter(Boolean), 5).map(createBingoCard);
  bingoCards.forEach((card) => (card.hasWon = false));
  let lastWinnerVal = 0;
  for (const num of nums.split(",")) {
    for (const card of bingoCards) {
      doRound(num, card);
      if (hasWin(card)) {
        const winnerVal = calculateWinner(card);
        if (!card.hasWon) {
          console.log(`Potential winner: ${winnerVal}`);
          lastWinnerVal = winnerVal * parseInt(num, 10);
        }
        card.hasWon = true;
      }
    }
  }
  return lastWinnerVal;
}
