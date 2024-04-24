const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = numbers.filter(n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
});
console.log(`I numeri primi dell'array originale sono: ${primes}`);