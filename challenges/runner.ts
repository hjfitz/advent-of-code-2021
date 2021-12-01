import { readFile } from "fs/promises";

const day = process.argv[2];
const isChallenge = process.argv[3] === "challenge";

const inFile = `./${day}.in`;
const solFile = `./${day}.ts`;

async function parseInput(): Promise<string[]> {
  const inp = await readFile(inFile, "utf8");
  return inp.toString().split("\n");
}

async function solve() {
  console.log("Solving...");
  console.log("Using input file:", inFile);
  console.log("Using solution file:", solFile);
  const input = await parseInput();
  const sol = await import(solFile);
  console.log(`Imports available: "${Object.keys(sol).join(", ")}"`);
  let result: unknown;
  if (isChallenge) {
    result = await sol.challenge(input);
  } else {
    result = await sol.solution(input);
  }

  console.log(result);
}

solve();
