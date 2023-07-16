const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// reducer.js
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const batteries = [5, 8, 3, 7, 4, 4];

const totalBatteries = batteries.reduce(reducer);

module.exports = totalBatteries;

