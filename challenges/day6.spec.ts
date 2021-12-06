import {
  solution,
  challenge,
  calculateLitterSizeNaive,
  calculateLitterSizeSmart,
} from "./day6";

describe("day 6", () => {
  const INPUT_DATA_FACTORY = () => [3, 4, 3, 1, 2];
  const INPUT_DATA = ["3,4,3,1,2"];

  describe("litter size", () => {
    it("should calculate the correct size for 18 days", () => {
      expect(calculateLitterSizeNaive(INPUT_DATA_FACTORY(), 18)).toBe(26);
    });

    it("should calculate the correct size for 80 days", () => {
      expect(calculateLitterSizeNaive(INPUT_DATA_FACTORY())).toBe(5934);
    });

    it("should calculate the correct size for 256 days", () => {
      expect(calculateLitterSizeSmart(INPUT_DATA_FACTORY(), 256)).toBe(
        26984457539
      );
    });
  });
  describe("challenge", () => {
    it("should calculate the right population size", () => {
      const EXPECTED = 5934;
      expect(solution(INPUT_DATA)).toEqual(EXPECTED);
    });
  });

  describe("extended challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 26984457539;
      expect(challenge(INPUT_DATA)).toEqual(EXPECTED);
    });
  });
});
