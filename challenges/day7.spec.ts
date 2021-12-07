import {
  solution,
  challenge,
  calculateBestPosition,
  calculateMovement,
  calculateMovementExtended,
} from "./day7";

describe("day 7", () => {
  const INPUT_DATA = ["16,1,2,0,4,2,7,1,2,14"];
  const inputDataFactory = () => INPUT_DATA[0].split(",").map(Number);
  describe("util", () => {
    it("should calculate total movement", () => {
      expect(calculateMovement(2, inputDataFactory())).toBe(37);
    });
    it("should calculate the best position naive", () => {
      expect(
        calculateBestPosition(inputDataFactory(), calculateMovement)
      ).toEqual(37);
    });
    it("should calculate the movement with extended fuel", () => {
      expect(calculateMovementExtended(5, inputDataFactory())).toBe(168);
    });
  });
  describe("challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 37;
      expect(solution(INPUT_DATA)).toEqual(EXPECTED);
    });
  });

  describe("extended challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 168;
      //expect(challenge(INPUT_DATA)).toEqual(EXPECTED);
    });
  });
});
