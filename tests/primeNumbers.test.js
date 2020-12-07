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
    expect(primeNumbers(10)).toEqual([2, 3, 5, 7]);
  });

  test("test medium prime numbers", () => {
    expect(primeNumbers(500)).toEqual(array.medium);
  });

  test("test large size prime numbers", () => {
    expect(primeNumbers(10000)).toEqual(array.large);
  });
});
