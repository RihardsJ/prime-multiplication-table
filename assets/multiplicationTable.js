/*
  Mutliplication function recieves sorted prime numbers array and creates a two dimensional multiplication table. For unit testing purposuses additionally 2d array is created and returned.

  ~~~ Table of content ~~~
    1. Difine table size
    2. Build first row of a table and first array
    3. Create first column of each row and add first element to each array
    4. Multiply results and create midle of the table push values in each array
*/

const multiplicationTable = (primeNumbers = []) => {
  // 1. Define table size to know length of rows and columns
  const tableSize = primeNumbers.length;

  const display = document.querySelector("#display");
  display.innerHTML = "";
  const DOMtable = document.createElement("table");
  DOMtable.className = "multiplicationTable";
  const DOMrow = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = " ";
  DOMrow.append(th);

  let table = [[" "]];
  primeNumbers.forEach((number) => {
    const th = document.createElement("th");
    th.textContent = number;
    DOMrow.append(th);
    // 2. create first row of the table and first array
    table[0].push(number);
  });

  DOMtable.append(DOMrow);

  for (let column = 1; column <= tableSize; column++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    tr.append(th);
    th.textContent = primeNumbers[column - 1];
    // 3. create first column of each table and push first elements of each array
    table.push([primeNumbers[column - 1]]);

    for (let row = 0; row < tableSize; row++) {
      const cell = document.createElement("td");
      cell.textContent = table[0][row + 1] * table[column][0];
      tr.append(cell);

      // 4. multiply results and display midle of the table, push results to the nested arrays
      table[column].push(table[0][row + 1] * table[column][0]);
    }
    DOMtable.append(tr);
  }

  display.append(DOMtable);
  return table;
};

export default multiplicationTable;
