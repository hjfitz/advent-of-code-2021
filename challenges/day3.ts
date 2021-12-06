import { inputDataToNumber } from "./util";

export function flipBitString(bitString: string): string {
  return bitString
    .split("")
    .map((bit) => (bit === "0" ? "1" : "0"))
    .join("");
}

export function solution(input: string[]): number {
  const gammaBin = input
    .reduce(
      (acc, cur) => {
        return acc.map((bit, i) => {
          const idx = parseInt(cur[i], 10);
          bit[idx] += 1;
          return bit;
        });
      },
      Array.from({ length: input[0].length }, () => [0, 0])
    )
    .map(([first, second]) => (first > second ? 0 : 1))
    .join("");

  const epsilonBin = flipBitString(gammaBin);
  return parseInt(epsilonBin, 2) * parseInt(gammaBin, 2);
}

export function getOxygenGeneratorRating(input: string[]): number {
  let idx = 0;
  let workingSet = input;
  while (workingSet.length > 1) {
    const common = mostCommonNthBit(workingSet, idx);
    workingSet = omitLeastCommonBitPosition(workingSet, idx, common);
    if (idx <= input[0].length) {
      idx += 1;
    }
  }
  return parseInt(workingSet[0], 2);
}

export function getC02ScrubberRating(input: string[]): number {
  let idx = 0;
  let workingSet = input;
  while (workingSet.length > 1) {
    const common = leastCommonNthBit(workingSet, idx);
    workingSet = omitLeastCommonBitPosition(workingSet, idx, common);
    if (idx <= input[0].length) {
      idx += 1;
    }
  }
  return parseInt(workingSet[0], 2);
}

export function mostCommonNthBit(input: string[], idx: number): "1" | "0" {
  const sortedIn = input.map((line) => line[idx]).sort() as Array<"1" | "0">;
  const first = sortedIn[Math.floor(sortedIn.length / 2)];
  return first;
}

export function leastCommonNthBit(input: string[], idx: number): "1" | "0" {
  return mostCommonNthBit(input, idx) === "1" ? "0" : "1";
}

export function omitLeastCommonBitPosition(
  input: string[],
  idx: number,
  bit: "1" | "0"
): string[] {
  return input.filter((line) => line[idx] === bit);
}

export function challenge(input: string[]): number {
  const co2Rating = getC02ScrubberRating(input);
  const oxygenRating = getOxygenGeneratorRating(input);
  return co2Rating * oxygenRating;
}
