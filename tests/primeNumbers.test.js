import primeNumbers from "../assets/primeNumbers";
import array from "./objectOfPrimes";

describe("Prime Numbers Test", () => {
  // test if function exists
  test("primeNumbers function to be defined", () => {
    expect(primeNumbers()).toBeDefined();
  });

  test("output should be an array", () => {
    expect(Array.isArray(primeNumbers(2))).toBeTruthy();
  });

  test("test small prime numbers", () => {
    console.log("N = 10", primeNumbers(10));
    expect(primeNumbers(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  test("test medium prime numbers", () => {
    console.log("N = 100", primeNumbers(100));
    expect(primeNumbers(100)).toEqual(array.medium);
  });

  test("test large size prime numbers", () => {
    expect(primeNumbers(1000)).toEqual(array.large);
  });
});
