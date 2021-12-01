# ❄️ Advent of Code 2021

2021: the year of TDD. Every entry here is built with TDD. Give it a go yourself!

## Usage

I'm not sure why you'd want to run my code for these challenges.

This repo has a custom runner for challenges (and extended challenges). It requires that:

- a challenge makes use of the `dayX.template.ts` template
- a challenge follows the naming convention is `dayX.ts`
- the challenge input follows `dayX.in`
- it also makes sense that tests follows `dayX.spec.ts` - although this is not necessary

Running the solution:

In order to run some solution, call `npx ts-node runner dayX`. For the extended challenge, call `npx ts-node runner dayX challenge`.

Ensure that you do this from the challenges directory.
