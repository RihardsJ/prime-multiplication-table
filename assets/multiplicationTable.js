/*
  Mutliplication function recieves sorted prime numbers array and creates a two dimensional multiplication table. For unit testing purposuses additionally 2d array is created and returned.

  ~~~ Table of content ~~~
    1. Difine table size to
    2. Build first row of a table and push it into first array
    3. Create first column of each row and push it first element to each array
    4. Multiply results and create middle elements of the table and push values in each array
*/

const multiplicationTable = (primeNumbers = []) => {
  // 1. Define table size to know length of rows and columns
  const tableSize = primeNumbers.length;

  let table = [[" "]];
  // 2. create first row of the table and first array
  primeNumbers.forEach((number) => {
    table[0].push(number);
  });

  for (let column = 1; column <= tableSize; column++) {
    // 3. create first column of each table and push first elements of each array
    table.push([primeNumbers[column - 1]]);

    for (let row = 0; row < tableSize; row++) {
      // 4. multiply results and display midle of the table, push results to the nested arrays
      table[column].push(table[0][row + 1] * table[column][0]);
    }
  }

  return table;
};

export default multiplicationTable;
