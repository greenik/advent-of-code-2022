const sampleInput = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

const input = `Monkey 0:
Starting items: 52, 60, 85, 69, 75, 75
Operation: new = old * 17
Test: divisible by 13
  If true: throw to monkey 6
  If false: throw to monkey 7

Monkey 1:
Starting items: 96, 82, 61, 99, 82, 84, 85
Operation: new = old + 8
Test: divisible by 7
  If true: throw to monkey 0
  If false: throw to monkey 7

Monkey 2:
Starting items: 95, 79
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 5
  If false: throw to monkey 3

Monkey 3:
Starting items: 88, 50, 82, 65, 77
Operation: new = old * 19
Test: divisible by 2
  If true: throw to monkey 4
  If false: throw to monkey 1

Monkey 4:
Starting items: 66, 90, 59, 90, 87, 63, 53, 88
Operation: new = old + 7
Test: divisible by 5
  If true: throw to monkey 1
  If false: throw to monkey 0

Monkey 5:
Starting items: 92, 75, 62
Operation: new = old * old
Test: divisible by 3
  If true: throw to monkey 3
  If false: throw to monkey 4

Monkey 6:
Starting items: 94, 86, 76, 67
Operation: new = old + 1
Test: divisible by 11
  If true: throw to monkey 5
  If false: throw to monkey 2

Monkey 7:
Starting items: 57
Operation: new = old + 2
Test: divisible by 17
  If true: throw to monkey 6
  If false: throw to monkey 2`;


interface IMonkey {
  items: number[],
  operation: string,
  divisibleBy: number;
  testTrueResult: number;
  testFalseResult: number;
  activity: number;
}

const monkeysRawData = input.split('\n\n');
const STARTING_ITEMS_REGEX = /(?<=Starting items: )(.*)(?=\n)/;
const OPERATION_REGEX = /(?<=new = )(.*)(?=\n)/;
const DIVISIBLE_BY_REGEX = /(?<=divisible by )(.*)(?=\n)/;
const TEST_RESULT_TRUE_REGEX = /(?<=If true: throw to monkey )(.*)(?=\n)/;
const TEST_RESULT_FALSE_REGEX = /(?<=If false: throw to monkey )(.*)/;
const NUMBER_OF_ROUNDS = 20;

const monkeysArray: IMonkey[] = [];

const getOperationResult = (operation: string, oldValue: number): number => {
  return eval(operation.replace(/old/g, oldValue.toString()));
}

const prepareInitData = () => {
  monkeysRawData.forEach((monkeyData: string, index: number) => {
    const startingItems: number[] = monkeyData.match(STARTING_ITEMS_REGEX)![0].split(', ').map((val: string) => +val);
    const operation: string = monkeyData.match(OPERATION_REGEX)![0];
    const divisibleBy: number = +monkeyData.match(DIVISIBLE_BY_REGEX)![0];
    const testTrueResult: number = +monkeyData.match(TEST_RESULT_TRUE_REGEX)![0];
    const testFalseResult: number = +monkeyData.match(TEST_RESULT_FALSE_REGEX)![0];
    
    if (!monkeysArray[index]) {
      monkeysArray.push({
        items: startingItems,
        operation,
        divisibleBy,
        testTrueResult,
        testFalseResult,
        activity: 0
      })
    }
  })
}

prepareInitData();

for (let round = 0; round < NUMBER_OF_ROUNDS; round++) {
  monkeysArray.forEach((monkey: IMonkey) => {
    monkey.items.forEach((itemWorryLevel: number) => {
      const worryLevel = Math.floor(getOperationResult(monkey.operation, itemWorryLevel) / 3);
      const destinationMonkey = worryLevel % monkey.divisibleBy === 0 ? monkey.testTrueResult : monkey.testFalseResult;
      monkeysArray[destinationMonkey].items.push(worryLevel);
      monkey.activity++;
    })
    monkey.items = [];
  })
}

monkeysArray.sort((a, b) => b.activity - a.activity)

console.log('end', {
  monkeysArray,
  result: monkeysArray[0].activity * monkeysArray[1].activity
})


export {};