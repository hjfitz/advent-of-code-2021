import { solution, parseInput, challenge } from "./day2";

describe("day 2", () => {
  const INPUT_DATA: string[] = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];
  describe("challenge", () => {
    it("should convert the input in to a Array<[string, number]>", () => {
      expect(parseInput(INPUT_DATA)).toEqual([
        ["forward", 5],
        ["down", 5],
        ["forward", 8],
        ["up", 3],
        ["down", 8],
        ["forward", 2],
      ]);
    });
    it("should parse the data correctly", () => {
      const EXPECTED = 150;
      expect(solution(INPUT_DATA)).toEqual(EXPECTED);
    });
  });

  describe("extended challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 900;
      expect(challenge(INPUT_DATA)).toEqual(EXPECTED);
    });
  });
});
