# Prime Tables

## Table of content

- [About the project](#About-the-project)
- [How to run](#How-to-run)
- [Built with](#Built-with)
- [I am pleased with](#I-am-pleased-with)
- [Further development](#Further-development)
- [Perfrormance & Known issues](#Perfrormance-&-Known-issues)
- [References](#References)

## About the project

In this coding exercies I am creating a static page where user is able to enter a number N in an input form and recieve a table with prime numbers starting from 0 up to the N number and its multiplications.

## How to run

To run the application localy **npm** and **nodejs** are neccessary! Please follow the link to see the installation: [npm and nodejs installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Please run follow commands in terminal to run the code from your device:

1. clone the repository: `git clone https://github.com/RihardsJ/prime-multiplication-table.git`
2. enter the folder `cd prime-multiplication-table/`
3. initialize the dependencies `npm i`
4. to view test results for prime numbers algorithm and see N size list of prime numbers: `npm run testPrimeNumbers`
5. to view all tests as well as test coverage report `npm run test`
6. to use the multiplication table function `npm start`

Alternatively you can view prime multiplication table live on netlify: [DEMO](https://prime-mt.netlify.app/)

## Built with

Jest, GitHub Actions, Javascript, HTML, CSS, Figma, VScode, Babel, Netlify

## I am pleased with

- Creating a reacursive algorithm which finds prime numbers
- Integration of Babel and connecting ES6 modules with Jest in Node environmet
- The progress that I have made.
- Managed to succesfully setup workflow

## Further development

Consider recursive solutions for getPrimeNumber and multiplicationTable functions which may increase the performance.
Different table types can be created such as: simple multiplication table, even number multiplication table etc.
Inspect more bugs. Optimze the code. Add velocity calculations to issues and compare with estimates. Add error handling. Test for accesability and make corrections to help assisting technologies recognize DOM elements in a correct way.

## Performance & Known issues

    Does not perform well with N >= 100000 values - testing
    Does not perform well with N > 1000 values - browser

## References

- [https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions)
- [https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
