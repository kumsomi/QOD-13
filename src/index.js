// QOD -13 (26th april 2022)

// Q1:- Program to calculate the kinetic energy of a body with mass m and volume v
// 0.5*m*v*v

function kineticEnergy(m, v) {
  return 0.5 * m * v * v;
}
console.log(kineticEnergy(3, 4));

// Q2:- Calulate the simple interest given P,R,T
// SI=P*R*R/100
function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}
console.log(simpleInterest(100, 6, 2));

// Q3:- Write a program to convert octal to decimal

function OctalToDecimal(n) {
  let lastDigit = 0,
    decimal = 0,
    i = 1;
  while (n !== 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    decimal += lastDigit * i;
    i = i * 8;
  }
  return decimal;
}
console.log(OctalToDecimal(116));
