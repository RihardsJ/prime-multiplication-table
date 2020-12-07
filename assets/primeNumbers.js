/*
To solve prime numbers array issues 'Sieve of Eratosthenes' algorithm is used to aviod brute force method

   ~~~ Table of content ~~~
    1. Initialize create a boolean array of consequtive integers
    2. Mark composite numbers as false
    3. Return array of prime numbers
*/

const generatePrimeNumbers = (N) => {
  // 1. Initialize array with Boolean values size of 2...-> N
  let consequtiveIntegers = [];
  for (let i = 2; i < N + 1; i++) {
    consequtiveIntegers[i] = true;
  }

  // 2.  Iterate through the array
  for (let i = 2; i <= Math.sqrt(N); i++) {
    // 2.1. Check if the number is prime
    if (consequtiveIntegers[i]) {
      //2.2. Mark all composites as false
      for (let j = i * 2; j <= N; j += i) {
        consequtiveIntegers[j] = false;
      }
    }
  }

  //   3. return prime numbers
  let primeNumbers = [];

  for (let p = 2; p <= N; p++) {
    if (consequtiveIntegers[p]) {
      primeNumbers.push(p);
    }
  }

  return primeNumbers;
};

export default generatePrimeNumbers;
