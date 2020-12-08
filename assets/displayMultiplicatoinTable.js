// helper functions which creates cells
const addCell = (htmlTag, value, row) => {
  const cell = document.createElement(htmlTag);
  cell.textContent = value;
  row.append(cell);
};

const displayMultiplicationTable = (multiplicationTable) => {
  // 1. Get dispaly element in the DOM and reset it to be clear from existing table
  const display = document.querySelector("#display");
  display.innerHTML = "";

  // 2. Create a table and add class name for styling
  const DOMtable = document.createElement("table");
  DOMtable.className = "multiplicationTable";

  for (let c = 0; c < multiplicationTable.length; c++) {
    // 3. Create rows
    const row = document.createElement("tr");
    for (let r = 0; r < multiplicationTable[c].length; r++) {
      // 4. Create columns in each row
      r === 0 || c === 0
        ? addCell("th", multiplicationTable[c][r], row)
        : addCell("td", multiplicationTable[c][r], row);
    }
    // 5. Add rows to the table
    DOMtable.append(row);
  }

  display.append(DOMtable);
};

export default displayMultiplicationTable;
