let n1 = 0.7;//Lembrando que se for 10.00 ele e inteiro ainda
let n2 = 0.1;
n1 = ((n1 * 100) + (n2 * 100)) / 100;
n1 = ((n1 * 100) + (n2 * 100)) / 100;
n1 = ((n1 * 100) + (n2 * 100)) / 100;
console.log(n1);
console.log(Number.isInteger(n1))

let numero2 = 5;
let numero1 = 6;
console.log(numero1.toString() + numero2); //convertendo o numero para string

let n3 = 10;
let n4 = 15;
console.log(typeof n3);

let x1 = 55;
console.log(Number.isInteger(x1)); //Para saber se o número e inteiro

let x3 = 20;
console.log(typeof x3); //outro de tipo de converção para string

let x5 = 20;
console.log(x5.toString(2)); //Exibir o número em binário

let x4 = 20;
console.log(x4.toFixed(100)); //Para escolher quantas casas decimal antes do ponto

let x10 = 5;
let x11 = 5;
x10 = x11 * 'Ola'; // Not a Number (NaN)
console.log(x10);
console.log(Number.isNaN(x10));

let a1 = 90;
let a2 = 100;
a1 += a2;
a1 += a2;
a1 += a2;
a1 = parseFloat(n1.toFixed(2));
console.log(a1);

let b1 = 30;
let b2 = 40;
console.log(Number.isInteger(b1));
b1 = b1.toString();
console.log(typeof b1); //outro de tipo de converção para string