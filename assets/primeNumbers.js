/*
   ~~~ Table of content ~~~
    1. If N equals 1 return array as it is exception (the only odd prime number)
    2. Initialize the array and the index number
    3. Create recursive helper function to check if index number is prime
      3.1 first base call returns false if index is divisible with at least one prime from the array
      3.2 second base call returns true if the number is not divisible with any prime numbers
      3.3 recrusively call the function to check all indexes
    4. 
*/

const generatePrimeNumbers = (N) => {
  // 1. If N is 1 return arrays with prime numbers as we do not need to do calculations
  if (N === 1) return [2];

  //2. initialize array including start counting from number 3 to skip the first number check
  let primeNumbers = [2];
  let i = 3;

  //3. create recursive helper function to check if square root of a number is divisible by existing prime numbers in the array
  const isPrimeNumber = (arrayOfPrimes, checkingNumber, index = 0) => {
    //3.1 return false if at least one prime number is divisible by the number
    if (checkingNumber % arrayOfPrimes[index] === 0) return false;
    //3.2 return true if array ended or it reached root of checking number
    if (arrayOfPrimes[index] > Math.sqrt(checkingNumber) || index > arrayOfPrimes.length)
      return true;
    //3.3 do the recursion to check all the numbers less then the root
    return isPrimeNumber(arrayOfPrimes, checkingNumber, ++index);
  };

  //4. loop and fill up the array with prime numbers
  while (primeNumbers.length < N) {
    if (isPrimeNumber(primeNumbers, i)) {
      primeNumbers.push(i);
    }
    //5. increment i by two to check only odd numbers and save some iterations
    i += 2;
  }

  return primeNumbers;
};

export default generatePrimeNumbers;
