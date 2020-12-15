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

In this coding exercise, I am creating a static page where a user enters any positive N number bigger than 1 in an input form and receives N x N size multiplication table of prime numbers.

## How to run

To run the application locally **npm** and **nodejs** are neccessary! Please follow the link to see the installation: [npm and nodejs installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Please run following commands in terminal to run the code on your device:

1. clone the repository: `git clone https://github.com/RihardsJ/prime-multiplication-table.git`
2. enter the folder `cd prime-multiplication-table/`
3. install all dependencies `npm i`
4. to view test results for prime numbers algorithm and see N size list of prime numbers: `npm run testPrimeNumbers`
5. to view all tests as well as test coverage report `npm run test`
6. to use the multiplication table function `npm start` and open link `http://localhost:3000` in your browser

Alternatively, you can view prime multiplication table live on netlify: [DEMO](https://prime-mt.netlify.app/)

## Built with

Jest, GitHub Actions, Javascript, HTML, CSS, Figma, VScode, Babel, Netlify, NodeJS

## I am pleased with

- Creating a recursive algorithm which finds prime numbers
- Integration of Babel and connecting ES6 modules with Jest in Node environment
- The progress that I have made.
- Managed to successfully setup workflow

## Further development

Consider performance improvement for primeNumbers algorithm.
Different table types can be created such as: simple multiplication table, even number multiplication table etc.
Add velocity calculations to issues and compare with estimates. Add error handling. Test for accessibility and make corrections to help assisting technologies to recognize DOM elements correctly.

## Performance & Known issues

    Does not perform well with N >= 100000 values - testing
    Does not perform well with N > 1000 values - browser

## References

- [wiki link to Primality Test](https://en.wikipedia.org/wiki/Primality_test)
