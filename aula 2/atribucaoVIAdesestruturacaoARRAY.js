/*
Atribuição via desestruturação (Arrys)
*/

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //

const letras = [b, c, a]; //isso é um ARRAY
[a, b, c] = letras; /*Isso é uma atribuição vai desestruturação */

console.log(a, b, c);

// isso aqui é idenxado
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const primeiroNumero = numeros[0];
console.log(numeros[0]);

const numeros1 = [100, 200, 300, 400, 500];
const [fristNumber, SecondNumber] = numeros1;
console.log(fristNumber, SecondNumber);

const number = [10, 20, 30, 40, 50];
const [um, dois, tres, ...resto] = number
console.log(um, dois, tres);
console.log(resto)

const numero5 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const [one, , three, , five, , seven] = numero5;
console.log(one, three, five, seven)
//                 0          1          2
//             0   1  2    0  1  2    0  1  2
const array =[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = array;
console.log(array[1][2]);
console.log(lista3[2]);