import getInputNumer from "./getInputNumer.js";
import generatePrimeNumbers from "./primeNumbers.js";
import multiplicationTable from "./multiplicationTable.js";

const form = document.querySelector("#userForm");

form.addEventListener("submit", (e) => {
  // prevent page from reloading
  e.preventDefault();
  // recive input from user
  const userInputValue = e.target.input.value;
  //
  const N = getInputNumer(userInputValue);

  if (typeof N !== "number") {
    throwNewError(N);
  } else {
    const arrayOfPrimeNumbers = generatePrimeNumbers(N);
    multiplicationTable(arrayOfPrimeNumbers);
  }
});

// throwNewErrorFunction
const throwNewError = (error) => {
  console.error(error);
};
