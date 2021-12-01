import { solution, challenge, calculateWindows } from "./day1";

describe("day 1", () => {
  const INPUT_DATA = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  describe("challenge", () => {
    it("should parse the data correctly", () => {
      expect(solution(INPUT_DATA)).toEqual(7);
    });
  });

  describe("extended challenge", () => {
    it("should be able to calculate windows", () => {
      const expected = [607, 618, 618, 617, 647, 716, 769, 792];
      expect(calculateWindows(INPUT_DATA)).toEqual(expected);
    });

    it("should parse the data correctly", () => {
      expect(challenge(INPUT_DATA)).toEqual(5);
    });
  });
});
