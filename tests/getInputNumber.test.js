import getInputNumber from "../assets/getInputNumer";

describe("Input Number tests: ", () => {
  // test if function exists
  test("getInputNumber function  be defined", () => {
    expect(getInputNumber()).toBeDefined();
  });

  test("numeric value of input should not be changed", () => {
    expect(getInputNumber(55)).toEqual(55);
  });

  test("should recieve a string integer and return number", () => {
    expect(getInputNumber("10")).toEqual(10);
  });

  test("input should be round down nearest integer", () => {
    expect(getInputNumber(21.1234)).toEqual(21);
  });

  test("input should be positive number", () => {
    expect(getInputNumber("eleven")).toThrowError(
      "Error! Number Cannot be negative! Please insert positive integer."
    );
  });

  test("input should be positive number", () => {
    expect(getInputNumber(-20)).toThrowError("Error! Should should be bigger than 1");
  });
});
