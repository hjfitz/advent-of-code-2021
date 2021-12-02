export function parseInput(input: string[]): Array<[string, number]> {
  return input.map((line) => {
    const [direction, amount] = line.split(" ");
    return [direction, parseInt(amount, 10)];
  });
}

export function solution(input: string[]): number {
  const inputData = parseInput(input);
  let pos = 0;
  let depth = 0;
  for (const [direction, amount] of inputData) {
    switch (direction) {
      case "forward": {
        pos += amount;
        break;
      }
      case "down": {
        depth += amount;
        break;
      }
      case "up": {
        depth -= amount;
        break;
      }
    }
  }
  return pos * depth;
}

export function challenge(input: string[]): number {
  const inputData = parseInput(input);
  let pos = 0;
  let depth = 0;
  let aim = 0;
  for (const [direction, amount] of inputData) {
    switch (direction) {
      case "forward": {
        pos += amount;
        depth = depth + aim * amount;
        break;
      }
      case "down": {
        aim += amount;
        break;
      }
      case "up": {
        aim -= amount;
        break;
      }
    }
  }
  return pos * depth;
}
