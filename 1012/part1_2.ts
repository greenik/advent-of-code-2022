const sampleInput = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;
const input = `noop
noop
noop
addx 3
addx 7
noop
noop
noop
noop
addx 6
noop
addx -1
noop
addx 5
addx 1
noop
addx 4
noop
noop
noop
noop
addx 6
addx -1
noop
addx 3
addx -13
addx -22
noop
noop
addx 3
addx 2
addx 11
addx -4
addx 11
addx -10
addx 2
addx 5
addx 2
addx -2
noop
addx 7
addx 3
addx -2
addx 2
addx 5
addx 2
addx -2
addx -8
addx -27
addx 5
addx 2
addx 21
addx -21
addx 3
addx 5
addx 2
addx -3
addx 4
addx 3
addx 1
addx 5
noop
noop
noop
noop
addx 3
addx 1
addx 6
addx -31
noop
addx -4
noop
noop
noop
noop
addx 3
addx 7
noop
addx -1
addx 1
addx 5
noop
addx 1
noop
addx 2
addx -8
addx 15
addx 3
noop
addx 2
addx 5
noop
noop
noop
addx -28
addx 11
addx -20
noop
addx 7
addx -2
addx 7
noop
addx -2
noop
addx -6
addx 11
noop
addx 3
addx 2
noop
noop
addx 7
addx 3
addx -2
addx 2
addx 5
addx 2
addx -16
addx -10
addx -11
addx 27
addx -20
noop
addx 2
addx 3
addx 5
noop
noop
noop
addx 3
addx -2
addx 2
noop
addx -14
addx 21
noop
addx -6
addx 12
noop
addx -21
addx 24
addx 2
noop
noop
noop`;

const CYCLES_TO_CALCULATE_STRENGTH = [20, 60, 100, 140, 180, 220];
const LINE_LEN = 40;
const operations = input.split('\n');

let cycle = 1;
let x = 1;
let operationIndex = 0;
let shouldEnd = false;
let totalStrength = 0;

const getAddXValue = (operation: string): number => {
  if (operation === 'noop') {
    return 0;
  }
  const addXValue = Number(operation.split(' ')[1]);
  return addXValue;
}

const getOperationTime = (operation: string): number => {
  if (operation === 'noop') {
    return 1;
  }
  return 2;
}

let startNextOperationCycle = getOperationTime(operations[0]);
const screen = [];

while(!shouldEnd) {
  const line = Math.floor(cycle/LINE_LEN);
  const pointer = cycle % LINE_LEN;
  const spritePositions = [x - 1, x, x + 1];
  if (!screen[line]) screen[line] = new Array(LINE_LEN).fill(".");

  if (spritePositions.includes(pointer - 1)) {
    screen[line][pointer] = '#';
  }

  if (CYCLES_TO_CALCULATE_STRENGTH.includes(cycle)) {
    totalStrength += x*cycle;
  }
  if (startNextOperationCycle === cycle - 1) {
    const operation = operations[operationIndex];
    x += getAddXValue(operation);
    startNextOperationCycle += getOperationTime(operation);
    operationIndex++;
    if (!operations[operationIndex]) {
      shouldEnd = true;
    }
  }
  cycle++;
}

console.log('end', {
  totalStrength
})

const draw = () => {
  screen.forEach((line) => {
    console.log(line.join(''));
  })
}

draw();

export {};