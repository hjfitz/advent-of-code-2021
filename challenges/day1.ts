import { inputDataToNumber } from "./util";

export function solution(input: number[]): number {
  const inputData = inputDataToNumber(input);
  let total = 0;
  let prev = inputData[0];
  for (let i = 1; i < inputData.length; i++) {
    if (inputData[i] > prev) {
      total += 1;
    }
    prev = inputData[i];
  }
  return total;
}

export function calculateWindows(dataset: number[]): number[] {
  const windows = dataset.map((num, idx, arr) => {
    if (idx === arr.length) return;
    const second = arr[idx + 1];
    const third = arr[idx + 2];
    return num + second + third;
  });

  return windows.filter((wdw) => !!wdw) as number[];
}

export function challenge(input: Array<number | string>): number {
  const inputData = inputDataToNumber(input);
  const windows = calculateWindows(inputData);
  return solution(windows);
}
