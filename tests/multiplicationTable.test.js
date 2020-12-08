import multiplicationTable from "../assets/multiplicationTable";

describe("multiplication table function", () => {
  // test if function exists
  test("multiplicationTable function to be defined", () => {
    expect(multiplicationTable()).toBeDefined();
  });

  test("mutliplication should return array", () => {
    expect(Array.isArray(multiplicationTable([2, 3, 5]))).toBeTruthy();
  });

  test("small mutliplication table", () => {
    expect(multiplicationTable([2, 3, 5, 7])).toEqual([
      [" ", 2, 3, 5, 7],
      [2, 4, 6, 10, 14],
      [3, 6, 9, 15, 21],
      [5, 10, 15, 25, 35],
      [7, 14, 21, 35, 49],
    ]);
  });

  test("medium multuplication table", () => {
    expect(multiplicationTable([2, 3, 5, 7, 11, 13, 17, 19])[8][8]).toBe(361);
  });

  //testing only last element sample
  test("large multiplication table", () => {
    expect(multiplicationTable([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])[10][10]).toBe(841);
  });
});
