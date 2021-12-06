import { inputDataToNumber } from "./util";

const MAX_ARR_CHUNK_SIZE = 100;

export function chunkArray(arr: number[], chunkSize: number): number[][] {
  const chunks: number[][] = [];
  let i = 0;
  while (i < arr.length) {
    chunks.push(arr.slice(i, (i += chunkSize)));
  }
  return chunks;
}

export function calculateLitterSizeNaive(input: number[], days = 80): number {
  let chunks = chunkArray(input, MAX_ARR_CHUNK_SIZE);
  for (let i = 0; i < days; i++) {
    const toPush = [];
    for (const chunk of chunks) {
      for (let j = 0; j < chunk.length; j++) {
        const cur = chunk[j];
        if (cur !== 0) {
          chunk[j] = cur - 1;
        } else {
          chunk[j] = 6;
          toPush.push(8);
        }
      }
    }
    chunks.push(toPush);
    chunks = chunkArray(chunks.flat(), MAX_ARR_CHUNK_SIZE);
  }
  return chunks.flat().length;
}

export function calculateLitterSizeSmart(
  input: number[],
  days: number
): number {
  // fishDays and newFishDays represent the number of fish on a given day
  let fishDays: number[] = [];
  input.forEach((f) => (fishDays[f] = (fishDays[f] || 0) + 1));

  Array.from({ length: days }, () => {
    let newFishDays: number[] = [];
    for (let day = 0; day <= 8; day++) {
      if (day === 6) {
        // if day is 6, we have a new fish
        newFishDays[day] = (fishDays[0] || 0) + (fishDays[7] || 0);
      } else if (day === 8) {
        // move everything from day 0 to day 8
        newFishDays[day] = fishDays[0] || 0;
      } else {
        // advance day by 1
        newFishDays[day] = fishDays[day + 1] || 0;
      }
    }
    fishDays = newFishDays;
  });

  return fishDays.reduce((acc, cur) => acc + cur, 0);
}

export function solution(input: string[]): number {
  const inputData = inputDataToNumber(input[0].split(","));
  return calculateLitterSizeNaive(inputData);
}

export function challenge(input: string[]): number {
  const inputData = inputDataToNumber(input[0].split(","));
  return calculateLitterSizeSmart(inputData, 256);
}
