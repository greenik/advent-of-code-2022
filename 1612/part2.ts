const sampleInput = `Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`;

const input = `Valve OQ has flow rate=17; tunnels lead to valves NB, AK, KL
Valve HP has flow rate=0; tunnels lead to valves ZX, KQ
Valve GO has flow rate=0; tunnels lead to valves HR, GW
Valve PD has flow rate=9; tunnels lead to valves XN, EV, QE, MW
Valve NQ has flow rate=0; tunnels lead to valves HX, ZX
Valve DW has flow rate=0; tunnels lead to valves IR, WE
Valve TN has flow rate=24; tunnels lead to valves KL, EI
Valve JJ has flow rate=0; tunnels lead to valves EV, HR
Valve KH has flow rate=0; tunnels lead to valves ZQ, AA
Valve PH has flow rate=0; tunnels lead to valves FN, QE
Valve FD has flow rate=0; tunnels lead to valves SM, HX
Valve SM has flow rate=7; tunnels lead to valves WW, RZ, FD, HO, KQ
Valve PU has flow rate=0; tunnels lead to valves VL, IR
Valve OM has flow rate=0; tunnels lead to valves CM, AA
Valve KX has flow rate=20; tunnel leads to valve PC
Valve IR has flow rate=3; tunnels lead to valves PU, CM, WW, DW, AF
Valve XG has flow rate=0; tunnels lead to valves RX, OF
Valve QE has flow rate=0; tunnels lead to valves PH, PD
Valve GW has flow rate=0; tunnels lead to valves JQ, GO
Valve HO has flow rate=0; tunnels lead to valves SM, TY
Valve WU has flow rate=0; tunnels lead to valves SG, RZ
Valve MS has flow rate=0; tunnels lead to valves UE, OF
Valve JS has flow rate=0; tunnels lead to valves DO, ZX
Valve YQ has flow rate=0; tunnels lead to valves BC, SG
Valve EJ has flow rate=0; tunnels lead to valves AA, LR
Valve EI has flow rate=0; tunnels lead to valves BV, TN
Valve NC has flow rate=0; tunnels lead to valves TS, BC
Valve AF has flow rate=0; tunnels lead to valves IR, HX
Valve OX has flow rate=0; tunnels lead to valves HR, BV
Valve BF has flow rate=0; tunnels lead to valves JQ, SY
Valve CA has flow rate=0; tunnels lead to valves YD, HX
Valve KQ has flow rate=0; tunnels lead to valves HP, SM
Valve NB has flow rate=0; tunnels lead to valves OQ, OF
Valve SY has flow rate=0; tunnels lead to valves BF, BV
Valve AA has flow rate=0; tunnels lead to valves KH, EJ, OM, TY, DO
Valve BC has flow rate=11; tunnels lead to valves WE, RX, YQ, LR, NC
Valve HR has flow rate=14; tunnels lead to valves OX, GO, JJ
Valve WE has flow rate=0; tunnels lead to valves DW, BC
Valve MW has flow rate=0; tunnels lead to valves JQ, PD
Valve DO has flow rate=0; tunnels lead to valves JS, AA
Valve PC has flow rate=0; tunnels lead to valves AK, KX
Valve YD has flow rate=0; tunnels lead to valves CA, OF
Valve RX has flow rate=0; tunnels lead to valves XG, BC
Valve CM has flow rate=0; tunnels lead to valves IR, OM
Valve HX has flow rate=6; tunnels lead to valves ZQ, NQ, AF, FD, CA
Valve ZQ has flow rate=0; tunnels lead to valves KH, HX
Valve BV has flow rate=21; tunnels lead to valves SY, OX, EI
Valve AK has flow rate=0; tunnels lead to valves PC, OQ
Valve UE has flow rate=0; tunnels lead to valves MS, JQ
Valve LR has flow rate=0; tunnels lead to valves BC, EJ
Valve JQ has flow rate=8; tunnels lead to valves MW, UE, BF, GW
Valve VL has flow rate=0; tunnels lead to valves PU, ZX
Valve EV has flow rate=0; tunnels lead to valves JJ, PD
Valve TS has flow rate=0; tunnels lead to valves NC, ZX
Valve RZ has flow rate=0; tunnels lead to valves SM, WU
Valve OF has flow rate=13; tunnels lead to valves XG, YD, NB, MS, XN
Valve WW has flow rate=0; tunnels lead to valves SM, IR
Valve TY has flow rate=0; tunnels lead to valves HO, AA
Valve XN has flow rate=0; tunnels lead to valves OF, PD
Valve SG has flow rate=15; tunnels lead to valves WU, YQ
Valve FN has flow rate=25; tunnel leads to valve PH
Valve KL has flow rate=0; tunnels lead to valves TN, OQ
Valve ZX has flow rate=5; tunnels lead to valves JS, HP, VL, NQ, TS`;

const REGEX = /^Valve ([A-Z]+) has flow rate=(\d+); tunnels? leads? to valves? ([A-Z, ]+)$/;
interface Item {
  openValvesMask: number;
  remainingTime: number;
  currentValve: string;
  totalGasOut: number;
};

const lines = input.split(`\n`);

const flowRates: Record < string, number > = {};
const flowValveIndexes: Record < string, number > = {};
const shortestPaths: Record < string, number > = {};
const allValves: string[] = [];
const valvesWithFlow: string[] = [];

lines.forEach((line: string) => {
  const matches = line.match(REGEX)
  const [_, sourceValve, flowRateStr, destinationValves] = matches;
  const flowRate = +flowRateStr;

  flowRates[sourceValve] = flowRate;
  allValves.push(sourceValve);

  if (flowRate > 0) {
    valvesWithFlow.push(sourceValve);
    flowValveIndexes[sourceValve] = valvesWithFlow.length;
  }

  shortestPaths[`${sourceValve}:${sourceValve}`] = 0;

  destinationValves.split(', ').forEach((dstValve: string) => {
    shortestPaths[`${sourceValve}:${dstValve}`] = 1;
  });
});

// FLOYD WARSHALL ALGORITHM
allValves.forEach((topValve: string) => {
  allValves.forEach((cmpValveA: string) => {
    allValves.forEach((cmpValveB: string) => {
      shortestPaths[`${cmpValveA}:${cmpValveB}`] = Math.min(
        shortestPaths[`${cmpValveA}:${cmpValveB}`] || Number.POSITIVE_INFINITY,
        (shortestPaths[`${cmpValveA}:${topValve}`] || Number.POSITIVE_INFINITY) +
        (shortestPaths[`${topValve}:${cmpValveB}`] || Number.POSITIVE_INFINITY)
      );
    });
  });
});

const addOpenValveMask = (current: number, valve: string): number => {
  const openValveMask = 1 << flowValveIndexes[valve];
  return current | openValveMask;
}

const isValveOpened = (current: number, valve: string): boolean => {
  const openValveMask = 1 << flowValveIndexes[valve];
  const isOpenNum = current & openValveMask;
  return isOpenNum > 0;
}

const bestResultAtMaxTimeDict = {}; // key: openValvesMask, value: maxGasFlow

const graphSearch = (minutesLeft: number) => {
  const queue: Array < Item > = [];
  queue.push({
    currentValve: 'AA',
    remainingTime: minutesLeft,
    openValvesMask: 0,
    totalGasOut: 0
  });
  const visited = new Set<string>();

  while (queue.length > 0) {
    const item = queue.pop();
    const {
      openValvesMask,
      remainingTime,
      currentValve,
      totalGasOut
    } = item;
    const visitedKey = `${currentValve}:${remainingTime}:${openValvesMask}:${totalGasOut}`;

    if (visited.has(visitedKey)) continue;

    visited.add(visitedKey);

    bestResultAtMaxTimeDict[item.openValvesMask] = Math.max(
      bestResultAtMaxTimeDict[item.openValvesMask] || 0, item.totalGasOut
    )

    if (remainingTime === 0) {
      continue;
    }

    for (let i = 0; i < valvesWithFlow.length; i++) {
      const nextValve = valvesWithFlow[i];
      const nextRemainingTime = remainingTime - shortestPaths[`${currentValve}:${nextValve}`] - 1;
      if (isValveOpened(openValvesMask, nextValve) || nextRemainingTime <= 0) {
        continue;
      }
      queue.push({
        currentValve: nextValve,
        openValvesMask: addOpenValveMask(openValvesMask, nextValve),
        remainingTime: nextRemainingTime,
        totalGasOut: totalGasOut + nextRemainingTime * flowRates[nextValve],
      });
    }
  }
}

graphSearch(26);

let maxGasOut = 0;

Object.entries(bestResultAtMaxTimeDict).forEach(([openValveMaskA, bestGasLeakResultA]: [string, number]) => {
  Object.entries(bestResultAtMaxTimeDict).forEach(([openValveMaskB, bestGasLeakResultB]: [string, number]) => {
    // check if both masks are completely different (AND will return 0 only if all open/closed valves are different)
    const isOverlaping = +openValveMaskA & +openValveMaskB;
    if (isOverlaping === 0) {
      maxGasOut = Math.max(maxGasOut, bestGasLeakResultA + bestGasLeakResultB);
    }
  })
})

console.log('end', {
  maxGasOut
})

export {};