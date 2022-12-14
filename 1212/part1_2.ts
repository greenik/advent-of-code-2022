const sampleInput = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

const input = `abcccccccaaaaaccccaaaaaaaccccccccccccccccccccccccccccccccccccaaaaa
abaacccaaaaaaccccccaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaa
abaacccaaaaaaaccccaaaaaaaaaaaaaacccccccccccccaacccccccccccccaaaaaa
abaacccccaaaaaacaaaaaaaaaaaaaaaacccccccccccccaacccccccccccccacacaa
abaccccccaaccaacaaaaaaaaaacccaacccccccccccccaaacccccccccccccccccaa
abcccccccaaaacccaaaaaaaaacccccccccccccaaacccaaacccccccccccccccccaa
abccccccccaaaccccccccaaaacccccccccccccaaaaacaaaccacacccccccccccccc
abccccccccaaacaaacccccaaacccccccccccccaaaaaaajjjjjkkkcccccaacccccc
abcccccaaaaaaaaaacccccaaccccccccccciiiiiijjjjjjjjjkkkcaaaaaacccccc
abcccccaaaaaaaaacccccccccccccccccciiiiiiijjjjjjjrrkkkkaaaaaaaacccc
abcccccccaaaaaccccccccccccccccccciiiiiiiijjjjrrrrrppkkkaaaaaaacccc
abcccaaccaaaaaacccccccccccaacaaciiiiqqqqqrrrrrrrrpppkkkaaaaaaacccc
abccaaaaaaaaaaaaccccacccccaaaaaciiiqqqqqqrrrrrruuppppkkaaaaacccccc
abcccaaaaaaacaaaacaaacccccaaaaaahiiqqqqtttrrruuuuupppkkaaaaacccccc
abcaaaaaaaccccaaaaaaacccccaaaaaahhqqqtttttuuuuuuuuuppkkkccaacccccc
abcaaaaaaaaccccaaaaaacccccaaaaaahhqqqtttttuuuuxxuuuppkklcccccccccc
abcaaaaaaaacaaaaaaaaaaacccccaaachhhqqtttxxxuuxxyyuuppllllccccccccc
abcccaaacaccaaaaaaaaaaaccccccccchhhqqtttxxxxxxxyuupppplllccccccccc
abaacaacccccaaaaaaaaaaaccccccccchhhqqtttxxxxxxyyvvvpppplllcccccccc
abaacccccccccaaaaaaacccccccccccchhhpppttxxxxxyyyvvvvpqqqlllccccccc
SbaaccccccaaaaaaaaaaccccccccccchhhppptttxxxEzzyyyyvvvqqqlllccccccc
abaaaaccccaaaaaaaaacccccccccccchhhpppsssxxxyyyyyyyyvvvqqqlllcccccc
abaaaacccccaaaaaaaacccccccccccgggpppsssxxyyyyyyyyyvvvvqqqlllcccccc
abaaacccaaaacaaaaaaaccccccccccgggpppsswwwwwwyyyvvvvvvqqqllllcccccc
abaaccccaaaacaaccaaaacccccccccgggppssswwwwwwyyywvvvvqqqqmmmccccccc
abaaccccaaaacaaccaaaaccaaaccccggpppssssswwswwyywvqqqqqqmmmmccccccc
abcccccccaaacccccaaacccaaacaccgggpppssssssswwwwwwrqqmmmmmccccccccc
abcccccccccccccccccccaacaaaaacgggppooosssssrwwwwrrrmmmmmcccccccccc
abcccccccccccccccccccaaaaaaaacggggoooooooorrrwwwrrnmmmdddccaaccccc
abaccccccccccccaacccccaaaaaccccggggoooooooorrrrrrrnmmddddcaaaccccc
abaccccccccaaaaaaccccccaaaaaccccggfffffooooorrrrrnnndddddaaaaccccc
abaacccccccaaaaaacccccaaaaaacccccffffffffoonrrrrrnnndddaaaaaaacccc
abaaccccccccaaaaaaaccacaaaacccccccccffffffonnnnnnnndddaaaaaaaacccc
abccccccccccaaaaaaaaaaaaaaaccccccccccccfffennnnnnnddddccaaaccccccc
abcccccccccaaaaaaacaaaaaaaaaacccccccccccffeennnnnedddccccaaccccccc
abcccccccccaaaaaaccaaaaaaaaaaaccccccccccaeeeeeeeeeedcccccccccccccc
abccccccccccccaaaccaaaaaaaaaaaccccccccccaaaeeeeeeeecccccccccccccaa
abcccccccaaccccccccaaaaaaaacccccccccccccaaaceeeeecccccccccccccccaa
abaaccaaaaaaccccccccaaaaaaaacccccccccccccaccccaaacccccccccccaaacaa
abaaccaaaaacccccaaaaaaaaaaacccccccccccccccccccccacccccccccccaaaaaa
abaccaaaaaaaaccaaaaaaaaaaaaaacccccccccccccccccccccccccccccccaaaaaa`;

let startCords: [number, number] = [-1, -1]; // for part 1
let endCords: [number, number] = [-1, -1];
const lowestCords: [number, number][] = [];
const rows = input.split('\n');

const grid: GraphPointTwo[][] = [];

const getAdjecentsCords = (row: number, col: number): [number, number][] => {
  const currentLetter = rows[row][col];
  const currentLetterCharCode = currentLetter.charCodeAt(0);
  const allAdjecentsCords: [number, number][] = [
    [row, col - 1], // left
    [row - 1, col], // top
    [row, col + 1], // right
    [row + 1, col], // bottom
  ];
  const filteredAdjecents = allAdjecentsCords.filter((cords: [number, number]) => {
    const [adjRow, adjCol] = cords;
    
    if (!rows[adjRow] || !rows[adjRow][adjCol]) return false;

    const adjLetter = rows[adjRow][adjCol];

    if (currentLetter === 'S') return true;

    const adjLetterCharCode = adjLetter.charCodeAt(0);
    return adjLetterCharCode <= (currentLetterCharCode + 1);
  });

  return filteredAdjecents;
}

const getPointFromCords = (row: number, col: number): GraphPointTwo => {
  return grid[row][col];
}

class GraphPointTwo {
  adjecentsCords: [number, number][];
  letter: string;
  row: number;
  col: number;

  constructor(row: number, col: number) {
    const letter = rows[row][col];
    const adjecentsCords = getAdjecentsCords(row, col);

    this.col = col;
    this.row = row;
    this.letter = letter;
    this.adjecentsCords = adjecentsCords;
  }

  getStr(): string {
    return `${this.row},${this.col}`;
  }

  get adjecents(): GraphPointTwo[] {
    return this.adjecentsCords.map(([adjRow, adjCol]: [number, number]) => getPointFromCords(adjRow, adjCol))
  }
}

const buildGraph = () => {
  rows.forEach((rowStr: string, row: number) => {
    grid.push([]);
    const cols = rowStr.split('');
    cols.forEach((letter: string, col: number) => {
      // for part 2
      if (['a', 'S'].includes(letter)) {
        lowestCords.push([row, col]);
      }
      // marking start point (part 1)
      if (letter === 'S') {
        startCords = [row, col];
      }
      // marking end point
      if (letter === 'E') {
        endCords = [row, col];
      }
      const point: GraphPointTwo = new GraphPointTwo(row, col);
      grid[row].push(point);
    })
  })
}

const getAdjecentsForVisit = (point: GraphPointTwo, visitedSet: Set<string>) => {
  return point.adjecents.filter((adjecent: GraphPointTwo) => {
    if (adjecent.letter === 'E' && !['y', 'z'].includes(point.letter)) return false;
    
    return !visitedSet.has(adjecent.getStr());
  })
}

const searchShortestWay = (sPoint: GraphPointTwo, ePoint: GraphPointTwo): number => {
  const queue: Array<[GraphPointTwo, number]> = [
    [sPoint, 0]
  ];
  const visitedSet = new Set([sPoint.getStr()]);
  let distance = Number.POSITIVE_INFINITY;

  while (queue.length) {
    const [point, currDistance] = queue.shift();
    if (point.getStr() === ePoint.getStr()) {
      distance = currDistance
      break;
    }

    const filteredAdjecents = getAdjecentsForVisit(point, visitedSet);

    filteredAdjecents.forEach((adjecent: GraphPointTwo) => {
      visitedSet.add(adjecent.getStr());
      queue.push([
        adjecent,
        currDistance + 1
      ])
    })
  }

  return distance;
}

buildGraph();

const startPoint: GraphPointTwo = getPointFromCords(...startCords);
const endPoint: GraphPointTwo = getPointFromCords(...endCords);
const partA = searchShortestWay(startPoint, endPoint);

const lowestDistances = lowestCords.map(([row, column]: [number, number]) => searchShortestWay(getPointFromCords(row, column), endPoint)).sort();

console.log('end', {
  partA,
  partB: lowestDistances[0]
});

export {};