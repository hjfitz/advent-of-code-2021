export function inputDataToNumber(inputData: Array<string | number>): number[] {
  if (typeof inputData[0] === "string") {
    return inputData.map((num) => parseInt(num as string, 10));
  }
  return inputData as number[];
}
