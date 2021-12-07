import { inputDataToNumber } from "./util";

type MovementCalculation = (p: number, d: number[]) => number;

export function calculateMovement(pos: number, data: number[]): number {
  return [...data].map((num) => Math.abs(num - pos)).reduce((a, b) => a + b, 0);
}

export function calculateMovementExtended(pos: number, data: number[]): number {
  return [...data]
    .map((num) => Math.abs(num - pos))
    .map((a) => (a * (a + 1)) / 2)
    .reduce((a, b) => a + b, 0);
}

export function calculateBestPosition(
  data: number[],
  cb: MovementCalculation
): number {
  const { length, [length - 1]: max } = data.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let testPos = 0; testPos < max; testPos++) {
    const movement = cb(testPos, data);
    if (movement < min) {
      min = movement;
    }
  }
  return min;
}

export function solution(input: string[]): number {
  const inputData = inputDataToNumber(input[0].split(","));
  return calculateBestPosition(inputData, calculateMovement);
}

export function challenge(input: string[]): number {
  const inputData = inputDataToNumber(input[0].split(","));
  return calculateBestPosition(inputData, calculateMovementExtended);
}
