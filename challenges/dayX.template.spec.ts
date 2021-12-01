import { solution, challenge } from "./day{{day}}";

describe("day {{day}}", () => {
  const INPUT_DATA: unknown[] = [];
  describe("challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 1;
      expect(solution(INPUT_DATA)).toEqual(EXPECTED);
    });
  });

  describe("extended challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 0;
      expect(challenge(INPUT_DATA)).toEqual(EXPECTED);
    });
  });
});
