const sampleInput = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian. 
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`;
const input = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 2: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 3 ore and 17 obsidian.
Blueprint 3: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 4: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 17 obsidian.
Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 2 ore and 8 obsidian.
Blueprint 6: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 7: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 3 ore and 17 obsidian.
Blueprint 8: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 13 clay. Each geode robot costs 3 ore and 12 obsidian.
Blueprint 9: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 11 clay. Each geode robot costs 4 ore and 12 obsidian.
Blueprint 10: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 11: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 12: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 9 obsidian.
Blueprint 13: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 13 clay. Each geode robot costs 3 ore and 15 obsidian.
Blueprint 14: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 15: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 16: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 2 ore and 15 obsidian.
Blueprint 18: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 19: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 13 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 20: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 21: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 22: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 2 ore and 16 obsidian.
Blueprint 23: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 3 ore and 13 obsidian.
Blueprint 24: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 5 clay. Each geode robot costs 3 ore and 18 obsidian.
Blueprint 26: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 4 ore and 14 obsidian.
Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 4 ore and 15 obsidian.
Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 30: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 14 clay. Each geode robot costs 4 ore and 10 obsidian.`;

const rows = input.split(`\n`);
const INITIAL_MAX_MINUTES = 24;

class SuperSet {
	sets: Array<Set<string>>

	constructor() {
		this.sets = [new Set()]
	}

	add(v: string) {
		if (this.sets[this.sets.length-1].size === 16777000) this.sets.push(new Set())
		return this.sets[this.sets.length-1].add(v)
	}

	has(v: string) {
		for (const set of this.sets) {
			if (set.has(v)) return true
		}
		return false;
	}
}

interface Blueprint {
  id: number;
  oreRobot: {
    ore: number;
    maxRobots: number;
  },
  clayRobot: {
    ore: number;
    maxRobots: number;
  },
  obsidianRobot: {
    ore: number;
    clay: number;
    maxRobots: number;
  },
  geodeRobot: {
    ore: number;
    obsidian: number;
  }
};

interface ResourcesState {
  minutesLeft: number;
  ore: {
    robots: number;
    materials: number;
  },
  clay: {
    robots: number;
    materials: number;
  },
  obsidian: {
    robots: number;
    materials: number;
  },
  geode: {
    robots: number;
    materials: number;
  }
};

const INITIAL_RESOURCES_STATE: ResourcesState = {
  minutesLeft: INITIAL_MAX_MINUTES,
  ore: {
    robots: 1,
    materials: 0,
  },
  clay: {
    robots: 0,
    materials: 0,
  },
  obsidian: {
    robots: 0,
    materials: 0,
  },
  geode: {
    robots: 0,
    materials: 0,
  }
}

const blueprints: Blueprint[] = [];

rows.forEach((row: string) => {
  const [
    ,
    blueprintId,
    oreRobotOreCost,
    clayRobotOreCost,
    obsidianRobotOreCost,
    obsidianRobotClayCost,
    geodeRobotOreCost,
    geodeRobotObsidianCost,
  ] =
    /Blueprint (\d+): Each ore robot costs (\d+) ore. Each clay robot costs (\d+) ore. Each obsidian robot costs (\d+) ore and (\d+) clay. Each geode robot costs (\d+) ore and (\d+) obsidian./
      .exec(row)
      ?.map(Number) ?? [];
  
  blueprints.push({
    id: blueprintId,
    oreRobot: {
      ore: oreRobotOreCost,
      maxRobots: Math.max(oreRobotOreCost, clayRobotOreCost, obsidianRobotOreCost, geodeRobotOreCost)
    },
    clayRobot: {
      ore: clayRobotOreCost,
      maxRobots: obsidianRobotClayCost
    },
    obsidianRobot: {
      ore: obsidianRobotOreCost,
      clay: obsidianRobotClayCost,
      maxRobots: geodeRobotObsidianCost
    },
    geodeRobot: {
      ore: geodeRobotOreCost,
      obsidian: geodeRobotObsidianCost
    }
  });
});

const getMaxGeodeObtained = (blueprint: Blueprint): number => {
  const visited = new SuperSet();
  const queue = new Array<ResourcesState>();
  queue.push(INITIAL_RESOURCES_STATE);
  let bestGeodeValue = 0;
  while(queue.length > 0) {
    const currentState = queue.pop()!;
    const {
      minutesLeft,
      ore,
      clay,
      obsidian,
      geode,
    } = currentState;

    if (minutesLeft === 0) {
      bestGeodeValue = Math.max(geode.materials, bestGeodeValue);
      continue;
    }

    const visitedKeyRobots = `${ore.robots},${clay.robots},${obsidian.robots},${geode.robots}`;
    const visitedKeyMaterials = `${ore.materials},${clay.materials},${obsidian.materials},${geode.materials}`;
    const wholeVisitedKey = `${minutesLeft}:${visitedKeyRobots}:${visitedKeyMaterials}`;
    
    if (!visited.has(wholeVisitedKey)) {
      visited.add(wholeVisitedKey);
    } else {
      continue;
    }
    
    let producedRobot = false;

    // Priority 1 - Produce geode robot
    if (
      blueprint.geodeRobot.obsidian <= obsidian.materials &&
      blueprint.geodeRobot.ore <= ore.materials
    ) {
      queue.push({
        minutesLeft: minutesLeft - 1,
        ore: {
          ...ore,
          materials: ore.materials - blueprint.geodeRobot.ore + ore.robots
        },
        clay: {
          ...clay,
          materials: clay.materials + clay.robots
        },
        obsidian: {
          ...obsidian,
          materials: obsidian.materials - blueprint.geodeRobot.obsidian + obsidian.robots
        },
        geode: {
          robots: geode.robots + 1,
          materials: geode.materials + geode.robots
        }
      });
      continue;
    }

    // Priority 2 - Produce obsidian robot
    if (
      blueprint.obsidianRobot.clay <= clay.materials &&
      blueprint.obsidianRobot.ore <= ore.materials &&
      blueprint.obsidianRobot.maxRobots !== currentState.obsidian.robots
    ) {
      queue.push({
        minutesLeft: minutesLeft - 1,
        ore: {
          ...ore,
          materials: ore.materials - blueprint.obsidianRobot.ore + ore.robots
        },
        clay: {
          ...clay,
          materials: clay.materials - blueprint.obsidianRobot.clay + clay.robots
        },
        obsidian: {
          robots: obsidian.robots + 1,
          materials: obsidian.materials + obsidian.robots
        },
        geode: {
          ...geode,
          materials: geode.materials + geode.robots
        }
      });
      continue;
    }

    // Priority 3 - Produce clay robot at 50% chance
    if (
      blueprint.clayRobot.ore <= ore.materials &&
      blueprint.clayRobot.maxRobots !== currentState.clay.robots &&
      Math.random() > 0.5
    ) {
      queue.push({
        minutesLeft: minutesLeft - 1,
        ore: {
          ...ore,
          materials: ore.materials - blueprint.clayRobot.ore + ore.robots
        },
        clay: {
          robots: clay.robots + 1,
          materials: clay.materials + clay.robots
        },
        obsidian: {
          ...obsidian,
          materials: obsidian.materials + obsidian.robots
        },
        geode: {
          ...geode,
          materials: geode.materials + geode.robots
        }
      });
      producedRobot = true;
    }

    // Priority 4 - Produce ore robot at 50% chance
    if (
      blueprint.oreRobot.ore <= ore.materials &&
      blueprint.oreRobot.maxRobots !== currentState.ore.robots &&
      Math.random() > 0.5
    ) {
      queue.push({
        minutesLeft: minutesLeft - 1,
        ore: {
          robots: ore.robots + 1,
          materials: ore.materials - blueprint.oreRobot.ore + ore.robots
        },
        clay: {
          ...clay,
          materials: clay.materials + clay.robots
        },
        obsidian: {
          ...obsidian,
          materials: obsidian.materials + obsidian.robots
        },
        geode: {
          ...geode,
          materials: geode.materials + geode.robots
        }
      });
      producedRobot = true;
    }

    // Priority 5 - if not produced any robot - just collect materials
    if (!producedRobot) {
      queue.push({
        minutesLeft: minutesLeft - 1,
        ore: {
          ...ore,
          materials: ore.materials + ore.robots
        },
        clay: {
          ...clay,
          materials: clay.materials + clay.robots
        },
        obsidian: {
          ...obsidian,
          materials: obsidian.materials + obsidian.robots
        },
        geode: {
          ...geode,
          materials: geode.materials + geode.robots
        }
      });
    }
  }
  return bestGeodeValue;
}

let totalScore = 0;

blueprints.forEach((blueprint: Blueprint) => {
  let max = 0;
  // for mine input - sometimes it's not worth producing a low grade robot whenever we have enough materials for it and current production is not maximized
  // due to above, I'm randomly choosing if ore and clay robot should be built or not (50% chance)
  // so I need to check various scenarios by calculating the same blueprint many times - it's similar to Monte Carlo algorithm
  // time consuming a bit, but it's working!
  for (let i = 0; i < 10000; i++) {
    const best = getMaxGeodeObtained(blueprint);
    if (best > max) {
      max = best;
    }
  }
  totalScore += blueprint.id * max;
})

console.log('end', {
  totalScore
})

export {};