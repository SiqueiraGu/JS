/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
null (bigint, symbol) - valores copiados
*/

let nome = 'Gustavo';
nome = 'Siqueira';
console.log(nome);
//A gente não esta mudando o valor da variável, mas esta trocando.

let nome1 = 'Gustavo';
nome1[0] = 'S'; //Não faz a troca a string e imutavél
console.log(nome1[0], nome1);
//Esse dado ele e imutavél, quando falamos de dado e sobre valor!

let a = 'A';
let b = a; //Cópia do valor a para o valor de B
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

//Referência (mutável) - array, object, function (VALORES PASSADOS POR REFERÊNCIA)
let a1 = [1, 2, 3];
let b1 = a1;
console.log(a, b);

a1.push(4);
console.log(a1, b1);

b1.pop();
console.log(a1, b1);

let a2 = [1, 2, 3];
let b2 = [...a2];
let c2 = b2;
console.log(a2 , b2); //AA é B tem o mesmo valor
a2.push(4); // A tem 4 Valores e B tem 3 valor de A
console.log(a2, b2);
b2.pop(); //A continua tendo 1,2,3,4 e retira o valor final do array de b
console.log(a2, b2);
a2.push('Gustavo'); //C continua o valor de B, mas o A foi alterdo
console.log(a2, c2);

const a11 = {
    nome: 'Gustavo',
    sobrenome: 'Siqueira',
};
const b11 = {...a11}; //Não altera o valor deles
a11.nome = 'Arielly';
console.log(b11);
console.log(a11);