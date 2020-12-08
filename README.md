# Prime Tables

## Table of content

- [About the project](#About-the-project)
- [Built with](#Built-with)
- [I am pleased with](#I-am-pleased-with)
- [Further development](#Further-development)
- [Perfrormance & Known issues](#Perfrormance-&-Known-issues)
- [References](#References)

## About the project

In this coding exercies I am creating a static page where user is able to enter a number N in an input form and recieve a table with prime numbers starting from 0 up to the N number and its multiplications.

## How to run

[DEMO](https://prime-mt.netlify.app/)

## Built with

Jest, GitHub Actions, Javascript, HTML, CSS, Figma, VScode, Babel, Netlify

## I am pleased with

- Implementation of Sieve of Eratosthenes algorithm
- Integration of Babel and connecting ES6 modules with Jest in Node environmet
- The progress that I have made.
- Managed to succesfully setup workflow

## Further development

Consider recursive solutions for getPrimeNumber and multiplicationTable functions which may increase the performance.
Different table types can be created such as: simple multiplication table, even number multiplication table etc.
Inspect more bugs. Optimze the code. Add velocity calculations to issues and compare with estimates. Add error handling.

## Performance & Known issues

    Does not perform well with N > 10000000 values - testing
    Does not perform well with N > 10000 values - browser
    

## References

- [https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions)
- [https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
