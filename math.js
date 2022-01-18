/*
  Adds Least Common Multiple function to the Math Object
  Adds Great Common Divisor function to the Math Object
*/

Object.assign(Math, {
    'gcd2': (a, b) => (b == 0) ? a : Math.gcd2(b, a % b),
    'gcd': arr => arr.reduce((multiple, current) => Math.gcd2(current, multiple)),
    'lcm2': (a, b) => a * b / Math.gcd2(a, b),
    'lcm': arr => arr.reduce((multiple, current) => Math.lcm2(current, multiple))
});


/*
  Sieve of Eratosthenes
  
  The function marks every composite index (every multiple of "i") as true, this way only the primes are left undefined or falsy, to add then to the array.
*/
function getPrimes(num) {
    let sieve = [];
    let primes = [];

    for (let i = 2; i <= num; i++) {
        if (!sieve[i]) {
            primes.push(i);

            for (let j = i * i; j <= num; j += i)
                sieve[j] = true;          
        }
    }

    return primes;
}
