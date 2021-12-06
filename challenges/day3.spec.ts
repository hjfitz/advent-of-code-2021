import {
  solution,
  challenge,
  flipBitString,
  getOxygenGeneratorRating,
  getC02ScrubberRating,
  mostCommonNthBit,
  omitLeastCommonBitPosition,
} from "./day3";

describe("day 3", () => {
  const INPUT_DATA = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];
  describe("utils", () => {
    it("should flip bit strings", () => {
      expect(flipBitString("10101")).toEqual("01010");
      expect(flipBitString("11111")).toEqual("00000");
      expect(flipBitString("10011")).toEqual("01100");
    });
  });
  describe("challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 198;
      expect(solution(INPUT_DATA)).toEqual(EXPECTED);
    });
  });

  describe("extended challenge", () => {
    describe("specific challenge utils", () => {
      it("should give us the most common nth bit", () => {
        expect(mostCommonNthBit(INPUT_DATA, 0)).toEqual("1");
        expect(mostCommonNthBit(INPUT_DATA, 1)).toEqual("0");
      });

      it("should omit based on some bit", () => {
        const EXPECTED = [
          "11110",
          "10110",
          "10111",
          "10101",
          "11100",
          "10000",
          "11001",
        ];
        expect(omitLeastCommonBitPosition(INPUT_DATA, 0, "1")).toEqual(
          EXPECTED
        );
      });
      it("should calculate the oxygen generator rating appropriately", () => {
        const EXPECTED = 23;
        expect(getOxygenGeneratorRating(INPUT_DATA)).toEqual(EXPECTED);
      });

      it("should calculate the C02 scrubber rating appropriately", () => {
        const EXPECTED = 10;
        expect(getC02ScrubberRating(INPUT_DATA)).toEqual(EXPECTED);
      });
    });
    it("should complete the challenge part", () => {
      const EXPECTED = 230;
      expect(challenge(INPUT_DATA)).toEqual(EXPECTED);
    });
  });
});
