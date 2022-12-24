const sampleInput = `#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`;

const input = `#.########################################################################################################################
#<><v<^<vv<><^vv><><v^.^>.^.>.<v^>v><v^.v^<v<vvvv.^^><>^vv<<<>>v>>^>v>>>v<.vv>v<.<v>><>^<<v^<<v^vv>^^<v<^<>v>^v<^v^..^^<<#
#<>^<<<^<<vv.<^.^>>>vv.v<<vv^...vvv><><>^<^vv.<v>>v><<^^vvv>v>>^>^<v>^<vv><vv<v^v^.vv<<>vv.^^<>v<<v^>..>v^><v^v<<^^<^.^v<#
#>^>>^<v<v^<v.>vv^>vv^<vv.<>>^vv.<^^>v^vv>v<<vv<>><<^>.v^^v>v<<v^.^v>v>.<^^vvv><^v.v.<v>^>v<<^v.<vv>^v^v^^<>.<<<v^^^>^^^<#
#>>v>^><^v<.<>>>>^<v>>v^^^><<^v^<>^><>.v<.>^vv<^^<v>.<vv>v^>.v<v<vv.^><^v>><<<v<vvv.v^^>^.^>v^>^><>^<<^>v<<v^v>^v^>><>v.<#
#>>vv<^.^<>v<v<^<.>^v^.<>>.v^^^.vv^v.<v<>v.>>>v>>.<<<<v<.^>^v<v^<v^<..^v<v^>^<v<>v<vv>.><<<>^>>>v>>>v^<^v>v^<..v>>>v>^>^>#
#>^^v>.^>^<v>^^v>>v<^<<>^>^^>v<.v^<<><v^>>>><>.><>>>vv<^v^v.<v<v>v^>><v><<><>>^v<^^<^v<v^>v^<>.<.^v>vv.v><<v.>.^>.^^^.<.>#
#<<v>><.>v<<vv>v.vv<><vv<>^>>>^v<<v>^<<<<v^<>>vv^^v^>.<.^><>v>>v<^v<.v^<^<>v^v^v^>^v^<>v<.>v<^^^.<><v.^^..^v>^>^><.>v>v.>#
#<^v>v>^.>>>^vv^<>><>^.<>^^<<<^<><.v>^>.>.vvv><v<<>v^<^^<>^vv<vvv<v<<v<^<<>><v<>vv^v<.^.>^>v<<^<><><<<^<.>.v^^.<>><v^<^<<#
#>.<^<v^^><<.v^v<>v<^vv>>vv>^>^<.>>^v<vv.>.v<>>v<^^<><^^^v.<.v>>^.v^^^>>v^<>.<v^v^.^^v^vv.>>>^^v^..<^v..<.v<>v^<vv.^>^>v>#
#>v^^v>^<v>>vv^v^>.<><>v^^v.^^>.<<.>^<^<v^.^<><v.v<<^^^^<v^v>.^v^<.v^<<^^.><>.<v.v<^^>^^>>>^v^^..vv<v><>^>.><v^^..^^<.<..#
#<^<.v>>vv>v<<v<^<>>v^<v>.v^<>vvv..<^>>v>v^v^<^><^<^^v>v>.>vv>^^^>><.<<>^^>.>.>v><^<^v^^<vv<>>^^v<<v>.^.v.<v.^.^v<<^>^<>>#
#<.^v>^>.>^^>^>^<>>>.>^^^vv^v<>v.<^vv.vv^>>>^^v>^>v>>vvv^><v.<^><<>^^.v.vv>>vv>^vv<<<^..v<^><<<>>^<<v^<^<<.>^^<><<^^<vv^>#
#<^><>>>>^.^^v>v>^^.^<>><.<><v<<^>v><^^>><^^v>^>^^><^^>^v^<<><<.v^v>>>vvv^v>v^.^>.>v^vv>>>v^>^^.>>.>>vvv<^<<vvvv<^>><v^v<#
#<v^<<>^^v<^^<v^<^v><>..^<^>v^^<^<v>v.>>v>><><>v^>^v<vv^v^vv<.^^>>.<<^v>^^<>><<^>v^<^>v>^<>>>v>^.^<.^.^<v>vv.^v>v<vvv^^^<#
#<>v<v^^v^v<<<v^^><v<>v<^<>v^v<^^>^<v<v^.>^<vv^>^^<>v<>>>.v^v.<<<<.v^v>^<>><.v<>^.<>^.^vv<>.^<v.^v<^>>>^<^v^<.<>>v>^.>>^>#
#>>^>>vv.>v^v>>.vv>^<^v^>>^^<<<>v<>>><^.<^>^<>^.>>.<^^.^<.v<^vv>><<..<<.<v^>^^<>.>.<>><>>v^>.v.^^>^vv<<^^v>v^>vv>^<^v.v>>#
#<v.<v^^^<^><<^>v^><<v.^v^^>vv><vvv>^^^<v>^>vv<^^^>.>><<^<^v<>.v><^><>v<<.<^vv>.^^^<v>v>>>v<^.v^>>>^>^<<..v.>vv.>>v>^<^^>#
#<vvv>^^<<vv.v><^..>v.<v<v<<<v^>v<<>.><v<>.<vv^><^<<^v^..>v<v^v>>>^>><v.>>^<>v<^^.vv>>v>.v^^^><^<>>>^<<<<<...v><v>v><^<v<#
#>v^>v^<v>>><<^v>>>v^<^v.^.v^v.<^<^>.<<.<<.^^vv<v>v>><^^.><>v.>>..^.<vv><>.v>.^^>^vvv>.v>.<.^<v<>^><^v<>>>.<^^v<<>>>>^v>.#
#<>^>.v^<<><.v^<^<.>^>..<<vv^v<>>v>vv.<><<>^>><^^<v.<v<^<v^>vv^^<>vv>^<^^<v^.>^<^>v<v><^v>v^<^.v^<<>v>.>vv^^v^>vv>^.v><^<#
#<>>^.v><^v>^><>v><>.v>vv>^v^^v>.^..>^<^<vv^vv>v<<<v<<v<>.<.>>^^v<^<>v>^<^<v.>^<v.^<^^vvv>.<>^><^v.^>>v<v>^^.^^v>v>vv<<<>#
#.>>^^>v.v^>v^^>vv<vv<v.vv>.vv<<<<^^<v.<v><vv.v<^<^v<.>..^>v^<^^.<>v^<v..^^<^v^^>^<^.v>v<^^>vvvvv.>>>^vv^^^<>.v>v^..>v^.>#
#>^>v^.^vv^v.vv>v.>v^<><^<>v^<^v><.v<^v>^v>.v<v>^vvvvv>.<vv>>^^<^^^<.<>v>.<>>.v<^<v<^.v.<><>v^v^^^v^>^^.^^<><><<<v^^<<^v<#
#<>>v.<<v<^<^<^.vv>>>>>v^..<><<v^>^^.>>^<.<>^v^<^>v<.vv<v<<^vv^.<v<<v^vv<<.v<>^v^<^v<^vv>>><v>vvv><><><.><v>^><<.>><<>^^.#
#.<^v><>v>^v^v^><^^.v<<>^<^<>v..^>vv>vvvv<<vv>>>><v<^<^v^>v>^<>^^v.>>v>^.v^vvv<><v^.><<vv.>^.^v<>>v.<vv>^<^>>>v^>><v.>>><#
########################################################################################################################.#`;

enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
  WALL
}

type Grid = Blizzard[][][];

const grid: Grid = [];
const rows = input.split('\n');

const mapDirectionString = (str: string): Direction => {
  switch (str) {
    case '^':
      return Direction.UP;
    case '>':
        return Direction.RIGHT;
    case 'v':
      return Direction.DOWN;
    case '<':
      return Direction.LEFT;
    default:
      return Direction.WALL; // to simplify checkings marking wall as non moving blizzard
  }
}

class Blizzard {
  direction: Direction;
  directionStr: string;

  constructor(direction: string) {
    this.direction = mapDirectionString(direction);
    this.directionStr = direction;
  }
}

const createBlizzard = (direction: string): Blizzard => {
  return new Blizzard(direction);
}

rows.forEach((row: string, rowIndex: number) => {
  grid.push([]);
  row.split('').forEach((letter: string, colIndex: number) => {
    if (['^', '>', 'v', '<', '#'].includes(letter)) {
      const blizzard = createBlizzard(letter);
      grid[rowIndex].push([blizzard]);
    } else {
      grid[rowIndex].push([]);
    }
  });
});

const moveBlizzards = (grid: Grid): Grid => {
  const newGrid: Grid = JSON.parse(JSON.stringify(new Array(grid.length).fill(new Array(grid[0].length).fill([]))));
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
      grid[rowIndex][columnIndex].forEach((blizzard: Blizzard) => {
        switch (blizzard.direction) {
          case Direction.UP:
            if (rowIndex === 1) {
              newGrid[newGrid.length - 2][columnIndex].push(blizzard);
            } else {
              newGrid[rowIndex - 1][columnIndex].push(blizzard);
            }
            break;
          case Direction.RIGHT:
            if (columnIndex === newGrid[0].length - 2) {
              newGrid[rowIndex][1].push(blizzard);
            } else {
              newGrid[rowIndex][columnIndex + 1].push(blizzard);
            }
            break;
          case Direction.DOWN:
            if (rowIndex === newGrid.length - 2) {
              newGrid[1][columnIndex].push(blizzard);
            } else {
              newGrid[rowIndex + 1][columnIndex].push(blizzard);
            }
            break;
          case Direction.LEFT:
            if (columnIndex === 1) {
              newGrid[rowIndex][newGrid[0].length - 2].push(blizzard);
            } else {
              newGrid[rowIndex][columnIndex - 1].push(blizzard);
            }
            break;
          case Direction.WALL:
            newGrid[rowIndex][columnIndex].push(grid[rowIndex][columnIndex][0]);
            break;
          default:
            break;
        }
      })
    }
  }
  return newGrid;
}

const draw = (grid: Grid) => {
  grid.forEach((row: Blizzard[][]) => {
    const rowStr = row.map((blizzards) => {
      if (blizzards.length === 0) {
        return '.';
      }
      if (blizzards.length === 1) {
        return blizzards[0].directionStr;
      }
      return blizzards.length.toString();
    });
    console.log(rowStr.join(''));
  })
}

const moves: [number, number][] = [
  [-1, 0], // UP
  [0, 1], // RIGHT
  [1, 0], // DOWN
  [0, -1], // LEFT
]

const search = () => {
  const visited = new Set(); // key: row,col,time
  const queue: [number, number, number, Grid][] = []; // [row, col, time, grid]
  queue.push([0, 1, 0, grid]);
  visited.add(`0,1,0`);

  let minTime = Number.POSITIVE_INFINITY;

  while (queue.length) {
    const current = queue.shift()!;
    const [row, column, time, oldGrid] = current;
    if ((row === grid.length - 1) && (column === grid[0].length - 2)) {
      if (minTime > time) {
        minTime = time;
        console.log('new min time', minTime);
      }
    }
    if (time > minTime) continue;

    if(visited.has(`${row},${column}${time}`)) {
      continue;
    }

    visited.add(`${row},${column}${time}`);

    const newGrid = moveBlizzards(oldGrid as Grid);
    let moved = false;
    moves.forEach((move: [number, number]) => {
      const newRow = row + move[0];
      const newColumn = column + move[1];
      if (newGrid[newRow]?.[newColumn]?.length === 0) {
        queue.push([newRow, newColumn, time + 1, newGrid]);
        moved = true;
      }
    });

    if (!moved) {
      queue.push([row, column, time + 1, newGrid]);
    }
  }
  return minTime;
};

console.log('end', {
  time: search()
})

export {};