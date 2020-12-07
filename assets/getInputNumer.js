const getInputNumer = (input) => {
  const N = parseInt(input, 10);
  if (N < 1) return "Error! Should should be bigger than 1";
  if (!N) return "Error! The input is not a number!";
  return N;
};

export default getInputNumer;
