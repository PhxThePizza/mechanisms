let game;
function newGame() {data = {
biome: null,
time:{
    minute: 0,
    hours: 6,
    days: 1
},
stats:{
    hunger: 20,
    maxHunger: 20,
    health: 20,
    maxHealth: 20,
    xp: 0,
    level: 1
},
weather: "Clear Skies",
forest:{
    sticks: 0,
    berries: 0,
    flint: 0,
    apples: 0,
    sand: 0,
    clay: 0,
},
mining:{
    stone: 0,
    coal: 0,
    ironOre: 0
},
tools:{
    miningTool:"None",
    pointyStick:false,
    sharpStone:false
},
gatherPower: 1,
miningPower: 0
}
return data
}