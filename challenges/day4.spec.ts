import {
  chunk,
  solution,
  challenge,
  createBingoCard,
  doRound,
  hasWin,
} from "./day4";

describe("day 4", () => {
  const INPUT_DATA = [
    "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1",
    "",
    "22 13 17 11  0",
    " 8  2 23  4 24",
    "21  9 14 16  7",
    " 6 10  3 18  5",
    " 1 12 20 15 19",
    "",
    " 3 15  0  2 22",
    " 9 18 13 17  5",
    "19  8  7 25 23",
    "20 11 10 24  4",
    "14 21 16 12  6",
    "",
    "14 21 17 24  4",
    "10 16 15  9 19",
    "18  8 23 26 20",
    "22 11 13  6  5",
    " 2  0 12  3  7",
  ];
  describe("victory calculation", () => {
    it("should not win if there is no win", () => {
      expect(
        hasWin([
          [
            { value: "1", checked: false },
            { value: "2", checked: false },
            { value: "3", checked: false },
          ],
          [
            { value: "4", checked: false },
            { value: "5", checked: false },
            { value: "6", checked: true },
          ],
          [
            { value: "7", checked: false },
            { value: "8", checked: false },
            { value: "9", checked: false },
          ],
        ])
      ).toBe(false);
    });
    it("should calculate based on a row", () => {
      expect(
        hasWin([
          [
            { value: "1", checked: true },
            { value: "2", checked: false },
            { value: "3", checked: true },
          ],
          [
            { value: "4", checked: true },
            { value: "5", checked: true },
            { value: "6", checked: true },
          ],
          [
            { value: "7", checked: false },
            { value: "8", checked: false },
            { value: "9", checked: false },
          ],
        ])
      ).toBe(true);
    });

    it("should calculate based on a column", () => {
      expect(
        hasWin([
          [
            { value: "1", checked: true },
            { value: "2", checked: false },
            { value: "3", checked: true },
          ],
          [
            { value: "4", checked: true },
            { value: "5", checked: false },
            { value: "6", checked: false },
          ],
          [
            { value: "7", checked: true },
            { value: "8", checked: false },
            { value: "9", checked: false },
          ],
        ])
      ).toBe(true);
    });
  });
  describe("utils", () => {
    it("should complete a round", () => {
      const line = ["1", "2", "3"];
      const card = createBingoCard(["1 3 5", "2 4 6", "3 9 10"]);
      for (const num of line) {
        doRound(num, card);
      }
      expect(card).toEqual([
        [
          { value: "1", checked: true },
          { value: "3", checked: true },
          { value: "5", checked: false },
        ],
        [
          { value: "2", checked: true },
          { value: "4", checked: false },
          { value: "6", checked: false },
        ],
        [
          { value: "3", checked: true },
          { value: "9", checked: false },
          { value: "10", checked: false },
        ],
      ]);
    });
    it("should create a bingo card", () => {
      const card = createBingoCard(["1 2  3", "2  56 9"]);
      expect(card).toEqual([
        [
          { value: "1", checked: false },
          { value: "2", checked: false },
          { value: "3", checked: false },
        ],
        [
          { value: "2", checked: false },
          { value: "56", checked: false },
          { value: "9", checked: false },
        ],
      ]);
    });
    it("should chunk an array correctly", () => {
      expect(chunk(INPUT_DATA[0].split(","), 5)).toEqual([
        ["7", "4", "9", "5", "11"],
        ["17", "23", "2", "0", "14"],
        ["21", "24", "10", "16", "13"],
        ["6", "15", "25", "12", "22"],
        ["18", "20", "8", "19", "3"],
        ["26", "1"],
      ]);
    });
  });
  describe("challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 4512;
      expect(solution(INPUT_DATA)).toEqual(EXPECTED);
    });
  });

  describe("extended challenge", () => {
    it("should parse the data correctly", () => {
      const EXPECTED = 1924;
      expect(challenge(INPUT_DATA)).toEqual(EXPECTED);
    });
  });
});
