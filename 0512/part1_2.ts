const stacksInput = `        [G]         [D]     [Q]    
[P]     [T]         [L] [M] [Z]    
[Z] [Z] [C]         [Z] [G] [W]    
[M] [B] [F]         [P] [C] [H] [N]
[T] [S] [R]     [H] [W] [R] [L] [W]
[R] [T] [Q] [Z] [R] [S] [Z] [F] [P]
[C] [N] [H] [R] [N] [H] [D] [J] [Q]
[N] [D] [M] [G] [Z] [F] [W] [S] [S]`;
const movesInput = `move 7 from 6 to 8
move 5 from 2 to 6
move 2 from 4 to 1
move 1 from 4 to 5
move 5 from 7 to 6
move 7 from 6 to 3
move 5 from 9 to 2
move 6 from 2 to 3
move 2 from 7 to 9
move 20 from 3 to 1
move 11 from 1 to 6
move 1 from 9 to 8
move 3 from 8 to 2
move 8 from 1 to 5
move 10 from 8 to 4
move 7 from 6 to 4
move 1 from 8 to 3
move 8 from 1 to 7
move 16 from 4 to 8
move 1 from 9 to 8
move 1 from 5 to 2
move 4 from 7 to 4
move 5 from 6 to 7
move 1 from 6 to 1
move 8 from 7 to 4
move 1 from 6 to 9
move 12 from 4 to 5
move 3 from 2 to 5
move 1 from 6 to 2
move 1 from 3 to 7
move 1 from 3 to 2
move 1 from 9 to 3
move 1 from 7 to 8
move 1 from 7 to 5
move 1 from 3 to 2
move 4 from 5 to 7
move 5 from 5 to 7
move 1 from 4 to 3
move 1 from 3 to 9
move 3 from 1 to 8
move 1 from 9 to 1
move 2 from 2 to 1
move 2 from 2 to 7
move 8 from 8 to 1
move 3 from 5 to 2
move 8 from 7 to 5
move 7 from 1 to 3
move 3 from 1 to 7
move 1 from 1 to 5
move 1 from 3 to 7
move 7 from 5 to 8
move 2 from 2 to 8
move 1 from 3 to 2
move 1 from 2 to 4
move 1 from 4 to 8
move 13 from 8 to 1
move 13 from 5 to 9
move 2 from 5 to 2
move 7 from 9 to 3
move 12 from 8 to 3
move 4 from 9 to 3
move 1 from 3 to 4
move 2 from 2 to 3
move 1 from 1 to 6
move 1 from 2 to 3
move 1 from 5 to 9
move 7 from 7 to 4
move 10 from 1 to 8
move 1 from 1 to 4
move 1 from 9 to 5
move 2 from 5 to 1
move 1 from 6 to 5
move 3 from 8 to 9
move 5 from 4 to 3
move 4 from 4 to 1
move 7 from 1 to 6
move 2 from 5 to 7
move 35 from 3 to 4
move 4 from 9 to 1
move 19 from 4 to 8
move 1 from 7 to 6
move 1 from 9 to 2
move 10 from 4 to 5
move 2 from 4 to 7
move 3 from 4 to 3
move 1 from 2 to 8
move 1 from 1 to 9
move 3 from 3 to 6
move 4 from 8 to 6
move 4 from 5 to 2
move 2 from 8 to 3
move 3 from 5 to 9
move 12 from 6 to 1
move 8 from 8 to 6
move 2 from 9 to 1
move 1 from 4 to 1
move 1 from 3 to 8
move 3 from 7 to 8
move 2 from 9 to 7
move 1 from 6 to 7
move 10 from 6 to 8
move 4 from 2 to 5
move 1 from 3 to 7
move 7 from 5 to 7
move 13 from 8 to 1
move 29 from 1 to 4
move 8 from 7 to 8
move 1 from 1 to 3
move 3 from 7 to 6
move 1 from 1 to 9
move 15 from 4 to 1
move 1 from 3 to 6
move 10 from 1 to 6
move 10 from 6 to 7
move 1 from 4 to 9
move 1 from 9 to 1
move 1 from 9 to 7
move 6 from 7 to 8
move 1 from 1 to 6
move 5 from 6 to 5
move 21 from 8 to 9
move 5 from 1 to 9
move 2 from 9 to 5
move 3 from 5 to 6
move 3 from 7 to 9
move 4 from 4 to 6
move 6 from 8 to 7
move 6 from 6 to 3
move 2 from 7 to 9
move 1 from 7 to 2
move 6 from 3 to 2
move 1 from 6 to 4
move 4 from 5 to 9
move 1 from 4 to 5
move 9 from 4 to 6
move 7 from 6 to 4
move 10 from 9 to 2
move 5 from 7 to 5
move 10 from 2 to 7
move 2 from 5 to 4
move 2 from 5 to 9
move 4 from 9 to 4
move 1 from 8 to 6
move 7 from 7 to 2
move 1 from 5 to 4
move 2 from 7 to 1
move 1 from 5 to 7
move 3 from 6 to 2
move 4 from 4 to 5
move 1 from 2 to 7
move 10 from 4 to 7
move 3 from 7 to 3
move 17 from 9 to 4
move 1 from 1 to 4
move 1 from 1 to 5
move 5 from 2 to 7
move 1 from 9 to 2
move 5 from 4 to 8
move 2 from 9 to 7
move 4 from 8 to 1
move 3 from 4 to 8
move 1 from 2 to 5
move 1 from 9 to 2
move 6 from 4 to 8
move 3 from 7 to 5
move 1 from 4 to 9
move 1 from 9 to 1
move 3 from 1 to 9
move 4 from 8 to 5
move 2 from 9 to 8
move 4 from 2 to 5
move 8 from 7 to 2
move 5 from 8 to 5
move 2 from 7 to 8
move 1 from 3 to 5
move 1 from 1 to 2
move 1 from 1 to 6
move 2 from 3 to 6
move 5 from 2 to 8
move 4 from 7 to 1
move 7 from 8 to 5
move 1 from 1 to 5
move 3 from 8 to 3
move 1 from 9 to 3
move 7 from 2 to 3
move 2 from 2 to 8
move 2 from 4 to 8
move 1 from 8 to 5
move 1 from 1 to 4
move 2 from 4 to 7
move 2 from 7 to 1
move 3 from 2 to 3
move 3 from 5 to 2
move 1 from 8 to 3
move 3 from 3 to 2
move 5 from 2 to 1
move 17 from 5 to 8
move 9 from 8 to 1
move 11 from 3 to 5
move 8 from 8 to 5
move 2 from 8 to 5
move 16 from 1 to 4
move 13 from 4 to 7
move 6 from 5 to 2
move 2 from 4 to 8
move 5 from 7 to 9
move 2 from 1 to 2
move 7 from 7 to 1
move 1 from 1 to 4
move 1 from 9 to 8
move 7 from 2 to 8
move 1 from 4 to 7
move 2 from 9 to 4
move 1 from 4 to 1
move 1 from 3 to 5
move 2 from 9 to 8
move 11 from 8 to 7
move 2 from 6 to 5
move 1 from 6 to 9
move 1 from 1 to 9
move 1 from 9 to 1
move 4 from 1 to 4
move 2 from 1 to 8
move 1 from 1 to 2
move 1 from 9 to 5
move 2 from 4 to 3
move 2 from 2 to 7
move 2 from 3 to 9
move 1 from 9 to 1
move 1 from 9 to 1
move 5 from 5 to 1
move 19 from 5 to 6
move 5 from 1 to 4
move 1 from 2 to 9
move 1 from 1 to 3
move 7 from 5 to 8
move 1 from 3 to 6
move 8 from 7 to 3
move 7 from 4 to 8
move 3 from 8 to 5
move 1 from 4 to 1
move 1 from 9 to 4
move 1 from 4 to 9
move 1 from 5 to 2
move 2 from 5 to 6
move 2 from 8 to 2
move 7 from 8 to 1
move 1 from 1 to 7
move 3 from 6 to 9
move 2 from 3 to 2
move 1 from 2 to 1
move 1 from 8 to 7
move 2 from 9 to 6
move 2 from 9 to 5
move 1 from 5 to 6
move 1 from 2 to 8
move 2 from 1 to 7
move 1 from 4 to 3
move 3 from 2 to 5
move 7 from 1 to 3
move 10 from 3 to 4
move 3 from 5 to 4
move 1 from 3 to 8
move 3 from 3 to 2
move 1 from 8 to 1
move 1 from 1 to 3
move 3 from 8 to 3
move 5 from 4 to 6
move 1 from 2 to 3
move 4 from 6 to 4
move 1 from 5 to 7
move 4 from 3 to 4
move 1 from 2 to 8
move 12 from 7 to 6
move 1 from 8 to 2
move 2 from 2 to 7
move 1 from 8 to 4
move 23 from 6 to 3
move 14 from 3 to 6
move 15 from 4 to 6
move 1 from 8 to 6
move 10 from 3 to 7
move 2 from 4 to 2
move 11 from 7 to 8
move 2 from 2 to 6
move 44 from 6 to 9
move 21 from 9 to 3
move 12 from 3 to 6
move 1 from 7 to 4
move 1 from 4 to 7
move 9 from 3 to 2
move 2 from 8 to 6
move 3 from 2 to 4
move 17 from 9 to 1
move 3 from 4 to 6
move 2 from 2 to 9
move 4 from 9 to 2
move 10 from 6 to 9
move 1 from 7 to 6
move 4 from 9 to 5
move 4 from 2 to 4
move 14 from 1 to 5
move 4 from 4 to 3
move 3 from 2 to 9
move 9 from 9 to 7
move 1 from 2 to 5
move 9 from 8 to 5
move 8 from 7 to 2
move 4 from 3 to 8
move 5 from 6 to 2
move 3 from 1 to 6
move 1 from 7 to 1
move 4 from 2 to 4
move 3 from 6 to 4
move 3 from 8 to 3
move 13 from 5 to 2
move 2 from 3 to 5
move 12 from 5 to 9
move 1 from 3 to 5
move 1 from 5 to 9
move 1 from 8 to 3
move 4 from 9 to 5
move 6 from 4 to 5
move 12 from 9 to 7
move 1 from 9 to 3
move 1 from 3 to 2
move 12 from 5 to 6
move 12 from 7 to 2
move 1 from 3 to 7
move 1 from 4 to 8
move 33 from 2 to 8
move 1 from 7 to 5
move 1 from 1 to 2
move 4 from 5 to 4
move 3 from 2 to 5
move 34 from 8 to 6
move 1 from 4 to 3
move 1 from 5 to 7
move 1 from 7 to 5
move 3 from 4 to 9
move 2 from 9 to 7
move 1 from 9 to 4
move 1 from 3 to 7
move 1 from 5 to 8
move 1 from 5 to 1
move 1 from 5 to 7
move 1 from 4 to 8
move 1 from 1 to 4
move 1 from 4 to 2
move 3 from 7 to 5
move 2 from 8 to 5
move 1 from 2 to 8
move 4 from 6 to 2
move 1 from 8 to 6
move 1 from 7 to 9
move 29 from 6 to 7
move 4 from 2 to 3
move 2 from 5 to 8
move 1 from 9 to 5
move 2 from 8 to 1
move 23 from 7 to 5
move 2 from 6 to 1
move 23 from 5 to 6
move 1 from 3 to 6
move 4 from 5 to 9
move 2 from 1 to 3
move 5 from 3 to 8
move 2 from 6 to 5
move 2 from 1 to 4
move 1 from 9 to 8
move 1 from 9 to 1
move 1 from 4 to 6
move 2 from 5 to 6
move 6 from 7 to 8
move 2 from 9 to 2
move 18 from 6 to 5
move 21 from 6 to 4
move 1 from 1 to 6
move 2 from 6 to 7
move 2 from 7 to 9
move 2 from 2 to 8
move 7 from 4 to 3
move 12 from 5 to 3
move 1 from 9 to 5
move 1 from 9 to 4
move 6 from 5 to 2
move 17 from 3 to 4
move 3 from 4 to 3
move 1 from 2 to 4
move 5 from 2 to 8
move 1 from 5 to 8
move 19 from 8 to 7
move 1 from 3 to 6
move 1 from 8 to 4
move 1 from 6 to 1
move 15 from 4 to 6
move 1 from 1 to 4
move 3 from 3 to 5
move 4 from 6 to 7
move 1 from 4 to 7
move 10 from 6 to 7
move 16 from 4 to 5
move 24 from 7 to 2
move 8 from 7 to 8
move 1 from 4 to 2
move 6 from 8 to 7
move 1 from 8 to 7
move 1 from 6 to 9
move 14 from 5 to 4
move 9 from 7 to 8
move 4 from 5 to 1
move 2 from 1 to 5
move 3 from 8 to 6
move 2 from 6 to 9
move 2 from 2 to 8
move 6 from 2 to 7
move 3 from 4 to 6
move 1 from 3 to 4
move 3 from 5 to 7
move 1 from 6 to 9
move 5 from 7 to 2
move 4 from 9 to 1
move 1 from 7 to 9
move 9 from 8 to 4
move 5 from 1 to 2
move 2 from 6 to 1
move 6 from 4 to 7
move 1 from 7 to 3
move 1 from 3 to 9
move 1 from 9 to 7
move 1 from 6 to 7
move 9 from 4 to 5
move 7 from 7 to 9
move 3 from 7 to 5
move 1 from 9 to 2
move 6 from 9 to 8
move 4 from 4 to 5
move 1 from 4 to 2
move 1 from 4 to 2
move 2 from 1 to 2
move 1 from 9 to 8
move 10 from 2 to 4
move 8 from 2 to 7
move 12 from 2 to 9
move 6 from 7 to 4
move 1 from 1 to 2
move 8 from 9 to 8
move 7 from 5 to 1
move 9 from 4 to 3
move 14 from 8 to 4
move 1 from 8 to 4
move 1 from 1 to 5
move 1 from 5 to 2
move 3 from 2 to 4
move 1 from 7 to 1
move 1 from 7 to 3
move 2 from 1 to 7
move 3 from 5 to 7
move 2 from 7 to 6
move 1 from 6 to 5
move 3 from 7 to 1
move 1 from 6 to 8
move 1 from 8 to 7
move 1 from 3 to 6
move 1 from 7 to 1
move 4 from 1 to 4
move 6 from 3 to 2
move 3 from 1 to 2
move 3 from 3 to 6
move 3 from 2 to 6
move 6 from 6 to 5
move 1 from 1 to 4
move 1 from 9 to 6
move 5 from 2 to 1
move 3 from 1 to 2
move 2 from 9 to 8
move 3 from 1 to 5
move 1 from 9 to 7
move 25 from 4 to 1
move 1 from 1 to 7
move 2 from 8 to 3
move 13 from 1 to 9
move 2 from 3 to 5
move 8 from 5 to 9
move 4 from 2 to 1
move 2 from 6 to 7
move 10 from 5 to 9
move 4 from 7 to 2
move 2 from 2 to 3
move 9 from 9 to 2
move 4 from 4 to 5
move 4 from 5 to 4
move 5 from 1 to 4
move 10 from 4 to 5
move 22 from 9 to 1
move 2 from 2 to 7
move 3 from 2 to 1
move 6 from 2 to 6
move 1 from 7 to 1
move 10 from 5 to 7
move 15 from 1 to 4
move 13 from 1 to 5
move 3 from 6 to 8
move 1 from 8 to 9`;
const stacksSampleInput = `    [D]    
[N] [C]    
[Z] [M] [P]`;
const movesSampleInput = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const MOVE_COUNT_REGEX = /(?<=move )(.*)(?= from )/;
const SOURCE_REGEX = /(?<=from )(.*)(?= to )/;
const DESTINATION_REGEX = /(?<=to )(.*)/;

const parseStacks = () => {
  const rawLines = stacksInput.split('\n');
  const lines = rawLines.map((line) => line.split(''));
  const SIGNS_IN_COLUMN = 4;
  const stacksNo = Math.ceil(lines[0].length / SIGNS_IN_COLUMN);
  const stacks: string[][] = [];
  lines.forEach((line: string[], lineIndex: number) => {
    for (let i = 0; i < stacksNo; i++) {
      if (lineIndex === 0) {
        stacks.push([]);
      }
      const colIndex = i*SIGNS_IN_COLUMN + 1;
      const cargo = line[colIndex].trim();
      if (cargo) {
        stacks[i].push(cargo);
      }
    }
  })
  return stacks;
}

const moveStacks = (stacks: Array<string[]>, shouldReverse: boolean) => {
  const moves = movesInput.split('\n');
  moves.forEach((move: string) => {
    const count = Number(move.match(MOVE_COUNT_REGEX)![0]);
    const source = Number(move.match(SOURCE_REGEX)![0]) - 1;
    const destination = Number(move.match(DESTINATION_REGEX)![0]) - 1;
    const movingElements = stacks[source].splice(0, count);
    if (shouldReverse) {
      movingElements.reverse();
    }
    stacks[destination].unshift(...movingElements)
  })
  return stacks;
}

console.log({
  resultPartA: moveStacks(parseStacks(), true).map((stack) => stack[0]).join(''),
  resultPartB: moveStacks(parseStacks(), false).map((stack) => stack[0]).join('')
});

export {};