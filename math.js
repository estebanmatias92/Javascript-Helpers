/*
  Adds Least Common Multiple function to the Math Object
  Adds Great Common Divisor function to the Math Object
*/

Object.assign(Math, {
    'microGcd': (a, b) => (a == 0) ? b : Math.microGcd(b % a, a),
    'gcd': (...arr) => arr.reduce((prev, value, i) => prev = (i === 0 ? value : Math.microGcd(value, prev)), 1),
    'microLcm': (a, b) => a * b / Math.microGcd(a, b),
    'lcm': (...arr) => arr.reduce((prev, value, i) => prev = (i === 0 ? value : Math.microLcm(value, prev)), 1)
});
